import { FormSectionProps } from "@/src/types/formSectionProps";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  optional = false,
  defaultValue = "",
  error,
  keyboardType,
  ...props
}: FormSectionProps) {
  const [showPassword, setShowPassword] = useState(false);

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
        const showError = Boolean(fieldError?.message || error?.message);

        const resolvedKeyboard = keyboardType
          ? keyboardType
          : type === "email"
            ? "email-address"
            : type === "phone"
              ? "phone-pad"
              : "default";

        return (
          <View style={{ marginBottom: 20 }}>
            <TextInput
              label={optional ? `${label} (Optional)` : label}
              mode="outlined"
              value={value}
              onChangeText={(text) => {
                const isNumericOnly =
                  resolvedKeyboard === "phone-pad" ||
                  resolvedKeyboard === "numeric";

                if (isNumericOnly) {
                  const digits = text.replace(/\D/g, "");
                  onChange(digits);
                } else {
                  onChange(text);
                }
              }}
              onBlur={onBlur}
              secureTextEntry={isSecure && !showPassword}
              keyboardType={resolvedKeyboard}
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
