import { colors } from "@/src/constants/colors";
import { Switch, Text, View } from "react-native";

export default function VendorProductCard({ item }) {
  return (
    <View className="flex-row items-center p-4 bg-white border-b border-gray-100">

      <Text className="flex-1 text-gray-700 font-medium">{item.name}</Text>

      <Text className="w-16 text-center text-gray-700 text-sm">
        ₹{item.price}
      </Text>

      <Text className="w-20 text-gray-700 text-center text-sm">
        {item.expiry}
      </Text>

      <Switch
        value={item.published}
        trackColor={{ false: "#ccc", true: colors.primary }}
        thumbColor="white"
      />
    </View>
  );
}
