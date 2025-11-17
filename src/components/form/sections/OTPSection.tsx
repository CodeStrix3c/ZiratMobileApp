// src/components/form/sections/OTPSection.tsx
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import FormInput from "../inputs/FormInput";

interface Props {
  control: any;
  errors: any;
  onResend?: () => void;
}

export default function OTPSection({ control, errors, onResend }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text variant="headlineSmall" style={{ marginBottom: 10 }}>
        OTP Verification
      </Text>
      <Text style={{ marginBottom: 10 }}>
        Enter the 6-digit OTP sent to your mobile number.
      </Text>

      <FormInput
        control={control}
        name="otp"
        label="Enter OTP"
        error={errors?.otp}
        keyboardType="number-pad"
      />

      {onResend && (
        <Text
          onPress={onResend}
          style={{
            color: "blue",
            marginTop: 10,
            textDecorationLine: "underline",
          }}
        >
          Resend OTP
        </Text>
      )}
    </View>
  );
}
