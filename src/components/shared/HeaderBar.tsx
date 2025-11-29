import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderBar({ title, icon }) {
  return (
    <View className="flex-row items-center justify-between px-4 py-4 bg-primary">
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text className="text-white font-semibold text-lg">{title}</Text>

      <Ionicons name={icon} size={28} color="#fff" />
    </View>
  );
}
