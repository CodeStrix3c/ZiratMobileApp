import OTPSection from "@/src/components/form/sections/OTPSection";
import ProfileSection from "@/src/components/form/sections/ProfileSection";
import {
  useLoginMutation,
  useOtpVerifyMutation,
  useProfileMutation,
} from "@/src/hooks/userQueryHooks";

import { useAuth } from "@/src/contexts/AuthContext";
import { useZodForm } from "@/src/hooks/useZodForm";
import { showErrorToast } from "@/src/utils/toast";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, View } from "react-native";
import { otpSchema } from "../../schemas/shared/otp.schema";
import { profileSchema } from "../../schemas/user/profile.schema";

export default function UserRegistration() {
  const [step, setStep] = useState(0);
  const [profileData, setProfileData] = useState<any>(null);
  const schemas=[profileSchema,otpSchema]
  const methods = useZodForm(schemas[step], { mode:"onChange" });
  const { control, handleSubmit, formState: { errors } } = methods;

  const { mutateAsync: signupMutate, isPending: isSignupPending } =
    useProfileMutation();
  const { mutateAsync: verifyOtpMutate, isPending: isOtpPending } =
    useOtpVerifyMutation();
  const { mutateAsync: loginMutate } = useLoginMutation();
  const { setUserToken, setUserId } = useAuth();

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: any) => {
    if (step === 0) {
      setProfileData(data);
      nextStep();
      return;
    }

    if (step === 1) {
      try {
        const signupRes = await signupMutate(profileData);

        if (!signupRes.success) {
          showErrorToast("Signup failed");
          return;
        }

        const otpRes = await verifyOtpMutate({
          phoneNumber: profileData.phone,
          otp: data.otp,
        });

        if (otpRes.message !== "OTP verified successfully.") {
          Alert.alert("Error", "Invalid OTP");
          return;
        }

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
