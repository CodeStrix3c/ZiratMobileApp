import { Text, TextInput, View } from "react-native";

export default function InputField({ label, value, onChange }) {
  return (
    <View className="mb-3">
      <Text className="text-xs text-gray-600 mb-1 capitalize">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </View>
  );
}
