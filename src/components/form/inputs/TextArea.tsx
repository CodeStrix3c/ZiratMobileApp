// app/components/form/RNTextArea.tsx
import { Text, TextInput, View } from "react-native";
import OptionalLabel from "../ui/OptionalLabel";
import RequiredLabel from "../ui/RequiredLabel";

export default function TextArea({
  label,
  name,
  required,
  errors,
  ...props
}: any) {
  return (
    <View style={{ marginBottom: 12 }}>
      {required ? (
        <RequiredLabel label={label} />
      ) : (
        <OptionalLabel label={label} />
      )}

      <TextInput
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: errors?.[name] ? "red" : "#ccc",
          borderRadius: 8,
          padding: 10,
          marginTop: 4,
        }}
        {...props}
      />

      {errors?.[name] && (
        <Text style={{ color: "red", marginTop: 4 }}>
          {errors[name]?.message}
        </Text>
      )}
    </View>
  );
}
