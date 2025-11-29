import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ExpandableTransactionRow({ tx, colors }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setExpanded(!expanded)}
      style={{
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 2,
      }}
    >
      {/* Main Row */}
      <View className="flex-row items-center">
        <Text className="w-[25%] text-[13px] text-gray-900">{tx.id}</Text>
        <Text className="w-[20%] text-[13px] text-gray-700">{tx.type}</Text>
        <Text className="w-[25%] text-[13px] text-gray-800">{tx.amount}</Text>

        <View className="w-[30%] flex-row items-center justify-between">
          <Text className="text-[13px] font-medium text-gray-900">
            {tx.charged}
          </Text>
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={16}
            color="#9CA3AF"
          />
        </View>
      </View>

      {/* Expanded Details */}
      {expanded && (
        <View
          className="rounded-xl p-3 mt-2"
          style={{
            backgroundColor: colors.bg,
            borderColor: colors.border,
            borderWidth: 1,
          }}
        >
          <View className="flex-row justify-between mb-1">
            <Text className="text-[12px] text-gray-500">Fee Rate</Text>
            <Text
              className="text-[12px] font-semibold"
              style={{ color: colors.primaryDark }}
            >
              {tx.feeRate}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[12px] text-gray-500">Date</Text>
            <Text className="text-[12px] text-gray-700">{tx.date}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
