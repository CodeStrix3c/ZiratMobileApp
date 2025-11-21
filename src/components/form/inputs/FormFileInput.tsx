import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default function FormFileInput({
  control,
  name,
  label,
  optional = false,
  error,
}) {
  const pickFile = async (onChange) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        onChange(result.assets[0]);
      }
    } catch (err) {
      console.log("Picker Error:", err);
    }
  };

  const viewFile = async (file) => {
    if (!file?.uri) return;

    try {
      await Sharing.shareAsync(file.uri, {
        mimeType: file.mimeType,
      });
    } catch (e) {
      console.log("Preview Error:", e);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error: fieldError },
      }) => {
        const showError = !!(fieldError || error);
        const hasFile = !!value?.uri;

        return (
          <View style={{ marginBottom: 20 }}>
            <TextInput
              label={optional ? `${label} (Optional)` : label}
              mode="outlined"
              value={value?.name || ""}
              editable={false}
              error={showError}
              // LEFT: remove button when file exists
              left={
                hasFile ? (
                  <TextInput.Icon
                    icon="close"
                    onPress={() => onChange(null)}
                    forceTextInputFocus={false}
                  />
                ) : undefined
              }
              // RIGHT: file picker when no file, view when file exists
              right={
                hasFile ? (
                  <TextInput.Icon
                    // show "View" text
                    icon={() => <Text style={{ color: "#1e88e5" }}>View</Text>}
                    onPress={() => viewFile(value)}
                    forceTextInputFocus={false}
                  />
                ) : (
                  <TextInput.Icon
                    icon="file"
                    onPress={() => pickFile(onChange)}
                    forceTextInputFocus={false}
                  />
                )
              }
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
