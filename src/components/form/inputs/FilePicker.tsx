// app/components/form/RNFilePicker.tsx
import * as DocumentPicker from "expo-document-picker";
import { Text, TouchableOpacity, View } from "react-native";
import OptionalLabel from "../../ui/OptionalLabel";
import RequiredLabel from "../../ui/RequiredLabel";

export default function FilePicker({
  label,
  name,
  required,
  errors,
  onChange,
}: any) {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled) {
      onChange(result.assets[0]);
    }
  };

  return (
    <View style={{ marginBottom: 12 }}>
      {required ? (
        <RequiredLabel label={label} />
      ) : (
        <OptionalLabel label={label} />
      )}

      <TouchableOpacity
        onPress={pickFile}
        style={{
          borderWidth: 1,
          borderColor: errors?.[name] ? "red" : "#ccc",
          borderRadius: 8,
          padding: 12,
          marginTop: 4,
        }}
      >
        <Text>Select File</Text>
      </TouchableOpacity>

      {errors?.[name] && (
        <Text style={{ color: "red", marginTop: 4 }}>
          {errors[name]?.message}
        </Text>
      )}
    </View>
  );
}
