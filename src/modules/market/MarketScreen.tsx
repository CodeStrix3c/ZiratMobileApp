import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function MarketScreen() {
  return (
    <ScrollView className="flex-1 bg-lightGreen p-5">
      <Text className="text-xl font-bold mb-4">Market Overview</Text>
      <View className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <View className="flex-row items-center mb-3">
          <Ionicons name="pricetag-outline" size={22} color={colors.primary} />
          <Text className="ml-2 font-semibold text-lg">Apple Price</Text>
        </View>
        <Text className="text-grayText text-sm">
          Current: ₹120/kg | Last Week: ₹110/kg
        </Text>
      </View>

      <View className="bg-white rounded-2xl p-5 shadow-sm">
        <View className="flex-row items-center mb-3">
          <Ionicons name="trending-up" size={22} color={colors.secondary} />
          <Text className="ml-2 font-semibold text-lg">Market Trends</Text>
        </View>
        <Text className="text-grayText text-sm">
          Apples expected to rise 8% due to festive demand.
        </Text>
      </View>
    </ScrollView>
  );
}
