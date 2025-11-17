import ProfileSection from "@/src/components/form/sections/ProfileSection";
import {
  useOtpVerifyMutation,
  useProfileMutation,
} from "@/src/hooks/useUserProfileMutation";
import React, { useState } from "react";
import { Alert, Button, View } from "react-native";
import OTPSection from "../../components/form/sections/OTPSection";
import { useZodForm } from "../../hooks/useZodForm";
import { otpSchema } from "../../schemas/otpSchema";
import { profileSchema } from "../../schemas/profileSchema";

export default function UserRegistration() {
  const [step, setStep] = useState(0);

  const schemas = [profileSchema, otpSchema];
  const { control, handleSubmit, formState, getValues } = useZodForm(
    schemas[step]
  );
  const { errors } = formState;

  const nextStep = () => setStep((s) => Math.min(s + 1, schemas.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const { mutateAsync: signupMutate, isPending: isSignupPending } =
    useProfileMutation();

  const { mutateAsync: verifyOtpMutate, isPending: isOtpPending } =
    useOtpVerifyMutation();

  // ---------------------
  // 🔥 UPDATED SUBMIT LOGIC
  // ---------------------
  const onSubmit = async (data: any) => {
    // STEP 0 → PROFILE SUBMISSION
    if (step === 0) {
      try {
        await signupMutate({
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });

        Alert.alert("Success", "OTP sent to your phone.");
        nextStep();
      } catch (error: any) {
        Alert.alert(
          "Signup Failed",
          error?.response?.data?.message || "Unknown error"
        );
      }
      return;
    }

    // STEP 1 → OTP VERIFICATION
    if (step === 1) {
      try {
        await verifyOtpMutate({
          phone: getValues("phone"), // from step 0
          otp: data.otp,
        });

        Alert.alert("Success", "Registration completed.");
      } catch (error: any) {
        Alert.alert(
          "OTP Failed",
          error?.response?.data?.message || "Invalid OTP"
        );
      }
      return;
    }
  };

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
        {step > 0 && <Button title="Back" onPress={prevStep} />}
        <Button
          title={step === 1 ? "Submit" : "Next"}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
