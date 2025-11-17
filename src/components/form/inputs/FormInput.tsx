// app/components/form/RNPaperFormInput.tsx
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default function FormInput({
  control,
  name,
  label,
  secure = false,
  optional = false, // <-- NEW
  icon,
  onPressIcon,
  defaultValue = "",
  ...props
}: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        // 👇 IF optional, do NOT show errors
        const showError = !optional && !!error;

        return (
          <View style={{ marginBottom: 20 }}>
            <TextInput
              label={optional ? `${label} (Optional)` : label}
              mode="outlined"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secure && !showPassword}
              error={showError}
              right={
                secure ? (
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword((p) => !p)}
                  />
                ) : icon ? (
                  <TextInput.Icon icon={icon} onPress={onPressIcon} />
                ) : undefined
              }
              style={{ backgroundColor: "white" }}
              {...props}
            />

            {showError && (
              <HelperText type="error" visible>
                {error.message}
              </HelperText>
            )}
          </View>
        );
      }}
    />
  );
}
