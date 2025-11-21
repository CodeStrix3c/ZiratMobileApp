import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

type InputType = "text" | "number" | "email" | "phone" | "password";

interface FormInputProps {
  control: Control<any>;
  name: string;
  label: string;
  type?: InputType;
  optional?: boolean;
  defaultValue?: string;
  error?: any;
}

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  optional = false,
  defaultValue = "",
  error,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const keyboardTypeMap = {
    text: "default",
    number: "numeric",
    email: "email-address",
    phone: "phone-pad",
    password: "default",
  } as const;

  const isSecure = type === "password";

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error: fieldError },
      }) => {
        const showError = !!(fieldError || error); // ✅ fixed

        return (
          <View style={{ marginBottom: 20 }}>
            <TextInput
              label={optional ? `${label} (Optional)` : label}
              mode="outlined"
              value={value}
              onChangeText={(text) => {
                if (type === "number") {
                  const numericValue = text.replace(/[^0-9]/g, "");
                  onChange(numericValue);
                } else {
                  onChange(text);
                }
              }}
              onBlur={onBlur}
              secureTextEntry={isSecure && !showPassword}
              keyboardType={keyboardTypeMap[type]}
              error={showError}
              right={
                isSecure && (
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword((p) => !p)}
                  />
                )
              }
              style={{ backgroundColor: "white" }}
              {...props}
            />

            {showError && (
              <HelperText type="error" visible>
                {(fieldError || error)?.message}
              </HelperText>
            )}
          </View>
        );
      }}
    />
  );
}
