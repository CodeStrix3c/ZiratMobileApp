import React, { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const colorMap: any = {
  primary: "#2d6b06",
  secondary: "#c7611f",
  dark: "#222222",
  light: "#ffffff",
  error: "#f44336",
};

interface FormInputProps {
  control: Control<any>;
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "phone" | "password";
  optional?: boolean;
  icon?: string | null;
  iconColor?: "primary" | "secondary" | "dark" | "light" | "error";
  iconSize?: number;
  onPressIcon?: () => void;
  defaultValue?: string;
  error?: FieldError;
  [key: string]: any; // For other TextInput props
}

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  optional = false,
  icon = null,
  iconColor = "secondary",
  iconSize = 22,
  onPressIcon,
  defaultValue = "",
  error,
  ...props
}: FormInputProps) {
  console.log(error, "error");

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
      render={({ field: { onChange, value, onBlur }, fieldState: { error: fieldError } }) => {
        const showError = !optional && !!fieldError;

        return (
          <View className="mb-5 w-full">
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
              contentStyle={{}}

              /* LEFT ICON */
              left={
                icon ? (
                  <TextInput.Icon
                    icon={icon}
                    color={colorMap[iconColor] || colorMap.secondary}
                    size={iconSize}
                    onPress={onPressIcon}
                  />
                ) : undefined
              }

              /* RIGHT ICON (for password) */
              right={
                isSecure ? (
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    color={colorMap.primary}
                    size={iconSize}
                    onPress={() => setShowPassword((p) => !p)}
                  />
                ) : (
                  props.right
                )
              }

              className="bg-light"
              {...props}
            />

            {showError && (
              <HelperText type="error" visible>
                {fieldError?.message}
              </HelperText>
            )}
          </View>
        );
      }}
    />
  );
}
