import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function CropsScreen() {
  return (
    <ScrollView className="flex-1 bg-lightGreen p-5">
      <Text className="text-xl font-bold mb-4">Crop Management</Text>
      <View className="bg-white rounded-2xl p-5 shadow-sm">
        <View className="flex-row items-center mb-3">
          <Ionicons name="leaf-outline" size={24} color={colors.primary} />
          <Text className="text-lg font-semibold ml-2">Apple Trees</Text>
        </View>
        <Text className="text-grayText text-sm mb-2">Total Trees: 248</Text>
        <Text className="text-grayText text-sm mb-2">
          Growth Stage: Flowering
        </Text>
        <Text className="text-grayText text-sm">
          Next Inspection: 12 Oct 2025
        </Text>
      </View>
    </ScrollView>
  );
}
