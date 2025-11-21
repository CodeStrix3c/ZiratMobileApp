import OTPSection from "@/src/components/form/sections/OTPSection";
import ProfileSection from "@/src/components/form/sections/ProfileSection";
import {
  useLoginMutation,
  useOtpVerifyMutation,
  useProfileMutation,
} from "@/src/hooks/useUserProfileMutation";

import { useAuth } from "@/src/contexts/AuthContext";
import { showErrorToast } from "@/src/utils/toast";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, View } from "react-native";
import { useZodForm } from "../../hooks/useZodForm";
import { otpSchema } from "../../schemas/otpSchema";
import { profileSchema } from "../../schemas/profileSchema";

export default function UserRegistration() {
  const [step, setStep] = useState(0);
  const [profileData, setProfileData] = useState<any>(null);

  const schemas = [profileSchema, otpSchema];
  const { control, handleSubmit, formState } = useZodForm(schemas[step]);
  const { errors } = formState;

  const { mutateAsync: signupMutate, isPending: isSignupPending } =
    useProfileMutation();
  const { mutateAsync: verifyOtpMutate, isPending: isOtpPending } =
    useOtpVerifyMutation();
  const { mutateAsync: loginMutate } = useLoginMutation();
  const { setUserToken, setUserId } = useAuth();

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);
  const onSubmit = async (data: any) => {
    /* ----------------------------- */
    /* STEP 0 — JUST STORE + NEXT    */
    /* ----------------------------- */
    if (step === 0) {
      setProfileData(data); // store name, email, phone, pass
      nextStep(); // go to OTP screen
      return; // important: STOP here
    }

    /* ----------------------------- */
    /* STEP 1 — CALL API + LOGIN     */
    /* ----------------------------- */
    if (step === 1) {
      try {
        // 1) Register user
        const signupRes = await signupMutate(profileData);

        if (!signupRes.success) {
          showErrorToast("Signup failed");
          return;
        }

        // 2) Verify OTP
        const otpRes = await verifyOtpMutate({
          phoneNumber: profileData.phone,
          otp: data.otp,
        });

        if (otpRes.message !== "OTP verified successfully.") {
          Alert.alert("Error", "Invalid OTP");
          return;
        }

        // 3) Login
        const loginRes = await loginMutate({
          email: profileData.email,
          password: profileData.password,
        });

        await setUserToken(loginRes.token);
        await setUserId(loginRes.user);

        router.replace("/");

        Alert.alert("Success", "Registration + Login successful.");
      } catch (error: any) {
        const backendError =
          error?.response?.data?.[0]?.description ||
          error?.response?.data?.message ||
          "Something went wrong";

        showErrorToast(backendError);
      }
    }
  };

  const isLoading = isSignupPending || isOtpPending;

  return (
    <View style={{ flex: 1 }}>
      {step === 0 && <ProfileSection control={control} errors={errors} />}
      {step === 1 && <OTPSection control={control} errors={errors} />}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        {step > 0 && (
          <Button title="Back" onPress={prevStep} disabled={isLoading} />
        )}

        <Button
          title={step === 1 ? "Submit" : "Next"}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}
