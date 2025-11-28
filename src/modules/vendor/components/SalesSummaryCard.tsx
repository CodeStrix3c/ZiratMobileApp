import { colors } from "@/src/constants/colors";
import { Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function SalesSummaryCard({ data, net }) {
  return (
    <Animated.View
      entering={FadeInUp.duration(400)}
      className="rounded-2xl p-4 mb-4"
      style={{
        backgroundColor: colors.light,
        borderColor: colors.neutral,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
      }}
    >
      {/* TITLE */}
      <Text className="text-[15px] font-semibold text-gray-900 mb-3">
        Summary Breakdown
      </Text>

      {/* ROWS */}
      <Row label="Cash Sales" value={`₹${data.cash}`} color={colors.primary} />
      <Row label="Credit Sales" value={`₹${data.credit}`} color={colors.secondary} />
      <Row label="Platform Fee" value={`₹${data.fee}`} color={colors.primaryHover} />
      <Row label="Discounts Given" value={`₹${data.discount}`} color={colors.secondaryHover} />

      {/* NET RECEIVABLE */}
      <View
        className="mt-4 pt-3 border-t"
        style={{ borderColor: colors.neutral }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-[14px] font-bold text-gray-900">
            Net Receivable
          </Text>

          <View
            className="px-3 py-[4px] rounded-full"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <Text
              className="text-[13px] font-bold"
              style={{ color: colors.primary }}
            >
              ₹{net}
            </Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}


function Row({ label, value, color }) {
  return (
    <View className="flex-row justify-between items-center mb-[10px]">
      <Text className="text-[13px] text-gray-700 font-medium">
        {label}
      </Text>

      <Text
        className="text-[13px] font-semibold"
        style={{ color }}
      >
        {value}
      </Text>
    </View>
  );
}
