import { colors } from "@/src/constants/colors";
import React from "react";
import { Text, View } from "react-native";

export default function CreditAgingCard({ items }) {
  return (
    <View
      className="p-4 rounded-2xl shadow mb-4"
      style={{
        backgroundColor: colors.light,
      }}
    >
      <Text className="text-lg font-semibold text-gray-900 mb-4">
        Credit Aging Summary
      </Text>

      {items.map((item, i) => (
        <View
          key={i}
          className="flex-row justify-between items-center p-4 mb-4 rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.65)",
            borderRadius: 18,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            borderLeftWidth: 0,
          }}
        >

          {/* LEFT GRADIENT STRIP */}
          <View
            style={{
              width: 6,
              height: "100%",
              backgroundColor: item.color,
              borderRadius: 6,
              marginRight: 14,
            }}
          />

          {/* LABEL + SUBTEXT */}
          <View className="flex-1">
            <Text
              className="text-sm font-semibold"
              style={{ color: colors.dark }}
            >
              {item.label}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              Outstanding Amount
            </Text>
          </View>

          {/* AMOUNT */}
          <Text
            className="text-xl font-bold"
            style={{ color: colors.primary }}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
}
