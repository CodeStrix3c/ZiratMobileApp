import React, { useState } from "react";
import { Button, ScrollView, View } from "react-native";

import OTPSection from "@/src/components/form/sections/OTPSection";
import { useAuth } from "@/src/contexts/AuthContext";
import { useZodForm } from "@/src/hooks/useZodForm";

import { otpSchema } from "@/src/schemas/registrationSchema";
import { vendorBusinessSchema } from "@/src/schemas/vendorRegistrationSchema";
import { router } from "expo-router";
import BusinessSection from "./sections/BusinessSection";

export default function VendorRegistration() {
  const [step, setStep] = useState(0);
  const [businessData, setBusinessData] = useState(null);

  const schemas = [vendorBusinessSchema, otpSchema];
  const { control, handleSubmit, formState } = useZodForm(schemas[step]);
  const { errors } = formState;
  console.log(errors, "error....");

  const { setUserId, setUserToken } = useAuth();

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const onSubmit = async (data: any) => {
    if (step === 0) {
      setBusinessData(data);
      next();
    } else {
      router.push("/vendor/profile-completion");
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, padding: 16 }}>
        {step === 0 && <BusinessSection control={control} errors={errors} />}

        {step === 1 && <OTPSection control={control} errors={errors} />}

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          {step > 0 && <Button title="Back" onPress={prev} />}
          <Button
            title={step === 1 ? "Submit" : "Next"}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
