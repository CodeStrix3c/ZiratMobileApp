import { colors } from "@/src/constants/colors";
import React from "react";
import { Text, View } from "react-native";

export default function TaxReportCard() {
  return (
    <View
      className="p-5 rounded-2xl shadow mb-4"
      style={{
        backgroundColor: "rgba(255,255,255,0.75)",
        shadowColor: "#000",
        shadowOpacity: 0.07,
        shadowRadius: 10,
      }}
    >
      {/* TITLE */}
      <Text className="text-lg font-semibold text-gray-900 mb-4">
        Tax Report (GST)
      </Text>

      {/* ROW 1 */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-sm text-black">Taxable Amount</Text>
        <Text className="text-base font-semibold text-gray-900">
          ₹2,40,200
        </Text>
      </View>

      {/* ROW 2 */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-sm text-black">GST (5%)</Text>
        <Text className="text-base font-semibold text-gray-900">
          ₹12,010
        </Text>
      </View>

      {/* TOTAL SECTION – PREMIUM STRIP */}
      <View
        className="flex-row justify-between items-center p-4 rounded-xl"
        style={{
          backgroundColor: colors.darkHover,
          borderLeftWidth: 5,
          borderLeftColor: colors.secondary,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 5,
        }}
      >
        <Text className="text-sm font-semibold text-gray-800">
          Total After GST
        </Text>

        <Text
          className="text-xl font-bold"
          style={{ color: colors.primary }}
        >
          ₹2,52,210
        </Text>
      </View>
    </View>
  );
}
