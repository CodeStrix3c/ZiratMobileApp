import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function ProductPerformanceCard({ data }) {
  return (
    <View
      className="p-5 rounded-2xl shadow mb-4"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
      }}
    >
      <Text className="text-lg font-semibold text-gray-900 mb-4">
        Pesticide Performance
      </Text>

      {data.map((p, i) => {
        // Trend Logic
        let trendIcon = "arrow-up";
        let trendColor = colors.primary;

        if (p.units < 200) {
          trendIcon = "arrow-down";
          trendColor = colors.secondary;
        } else if (p.units < 320) {
          trendIcon = "remove";
          trendColor = colors.dark;
        }

        return (
          <View
            key={i}
            className="flex-row items-center justify-between p-4 rounded-2xl mb-3"
            style={{
              backgroundColor: colors.darkHover,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            {/* LEFT ACCENT STRIP */}
            <View
              style={{
                width: 6,
                height: "100%",
                backgroundColor: colors.primary,
                borderRadius: 10,
                marginRight: 14,
              }}
            />

            {/* PRODUCT + CATEGORY ICON */}
            <View className="flex-row items-center flex-1">
              <Ionicons
                name="leaf-outline"
                size={22}
                color={colors.primary}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text className="text-gray-900 font-semibold text-sm">
                  {p.name}
                </Text>
                <Text className="text-xs text-gray-500">
                  {p.units} units sold
                </Text>
              </View>
            </View>

            {/* RATING + TREND */}
            <View className="items-end">
              <View
                className="px-3 py-1 rounded-full mb-1"
                style={{
                  backgroundColor: colors.light,
                  borderWidth: 1,
                  borderColor: colors.neutral,
                }}
              >
                <Text
                  className="text-sm font-semibold"
                  style={{ color: colors.primary }}
                >
                  ★ {p.rating}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons
                  name={trendIcon}
                  size={16}
                  color={trendColor}
                  style={{ marginRight: 4 }}
                />
                <Text
                  className="text-xs font-semibold"
                  style={{ color: trendColor }}
                >
                  {p.units > 320
                    ? "High Demand"
                    : p.units > 200
                    ? "Stable"
                    : "Low Demand"}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
