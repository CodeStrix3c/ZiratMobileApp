import { colors } from "@/src/constants/colors";
import React from "react";
import { Text, View } from "react-native";

export default function SalesCard({ activeFilter }) {
  return (
    <View
      className="p-4 rounded-2xl shadow mb-4"
      style={{ backgroundColor: colors.light }}
    >
      <Text className="text-sm font-semibold text-gray-700 mb-1">
        Filter Applied: {activeFilter}
      </Text>
      <Text className="text-3xl font-extrabold text-gray-900">₹2,94,500</Text>
      <Text className="text-gray-500 text-xs mt-1">
        Total Sales This Period
      </Text>
    </View>
  );
}
