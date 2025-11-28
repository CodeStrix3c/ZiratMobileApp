import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function SummaryCard({ item }) {
  return (
    <View
      className="w-[48%] p-4 mb-4 rounded-xl"
      style={{
        backgroundColor: colors.light,
        borderWidth: 1,
        borderColor: colors.neutral,
      }}
    >
      {/* ICON + LABEL */}
      <View className="flex-row items-center mb-2">
        <View
          className="w-8 h-8 rounded-lg items-center justify-center"
          style={{ backgroundColor: `${colors.primary}15` }}
        >
          <Ionicons name={item.icon} size={18} color={colors.primary} />
        </View>

        <Text
          className="ml-2 text-[13px] font-semibold"
          style={{ color: colors.dark }}
        >
          {item.label}
        </Text>
      </View>

      {/* VALUE */}
      <Text
        className="text-[20px] font-bold"
        style={{ color: colors.secondaryHover }}
      >
        ₹{item.value.toLocaleString()}
      </Text>

      {/* SUBTEXT */}
      <Text className="text-[11px] mt-1" style={{ color: colors.dark }}>
        Updated Today
      </Text>
    </View>
  );
}
