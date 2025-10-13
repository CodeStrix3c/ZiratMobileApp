import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-lightGreen p-5 items-center">
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        className="w-24 h-24 rounded-full mb-4"
      />
      <Text className="text-lg font-semibold mb-1">John Doe</Text>
      <Text className="text-grayText mb-5">Farmer | Apple Orchard</Text>

      <View className="w-full bg-white rounded-2xl p-4 shadow-sm">
        <View className="flex-row items-center mb-3">
          <Ionicons name="call-outline" size={22} color={colors.primary} />
          <Text className="ml-2 text-grayText">+91 9876543210</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="mail-outline" size={22} color={colors.primary} />
          <Text className="ml-2 text-grayText">john@farmapp.io</Text>
        </View>
      </View>
    </View>
  );
}
