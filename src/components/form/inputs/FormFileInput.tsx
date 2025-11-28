import { colors } from "@/src/constants/colors";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import { Eye, Upload, X } from "lucide-react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { HelperText } from "react-native-paper";

export default function FormFileInput({
  control,
  name,
  label = "Upload License Copy",
  optional = false, // if true → no error shown
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
      await Sharing.shareAsync(file.uri, { mimeType: file.mimeType });
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
        const hasFile = !!value?.uri;

        const showError = !optional && !!(fieldError || error);

        return (
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                borderWidth: 1.6,
                borderColor: showError ? colors.error : colors.neutral,
                backgroundColor: colors.light,
                paddingVertical: 16,
                paddingHorizontal: 14,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => !hasFile && pickFile(onChange)}
                activeOpacity={0.7}
                style={{ flex: 1 }}
              >
                <Text
                  style={{
                    color: colors.dark,
                    fontSize: 15,
                    fontWeight: hasFile ? "500" : "400",
                  }}
                  numberOfLines={1}
                >
                  {hasFile
                    ? value?.name.split(" ")[0]
                    : `${label}${optional ? " (Optional)" : ""}`}
                </Text>
              </TouchableOpacity>

              <View style={{ flexDirection: "row", gap: 14 }}>
                {hasFile ? (
                  <>
                    <TouchableOpacity onPress={() => viewFile(value)}>
                      <Eye size={22} color={colors.primary} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onChange(null)}>
                      <X size={22} color={colors.error} />
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity onPress={() => pickFile(onChange)}>
                    <Upload size={22} color={colors.primary} />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* ERROR TEXT (only if required) */}
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
