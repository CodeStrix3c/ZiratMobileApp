import { Text, TouchableOpacity } from "react-native";

export default function SubmitButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-primary p-3 rounded mt-3">
      <Text className="text-center text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
