import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function FeeStructureCard({ colors }) {
  return (
    <View className="mb-4">
      <Text className="text-[17px] font-semibold text-gray-900 mb-3">
        Fee Structure
      </Text>

      <View className="flex-row justify-between">

        {/* -------------------- CASH SALES -------------------- */}
        <View
          className="w-[48%] p-4 rounded-2xl"
          style={{
            backgroundColor: colors.light,
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          {/* Icon Row */}
          <View className="flex-row items-center mb-2">
            <View
              className="w-9 h-9 rounded-xl items-center justify-center mr-2"
              style={{
               
                backgroundColor: colors.primaryLight,
              }}
            >
              <Ionicons
                name="cash-outline"
                size={18}
                color={colors.primaryDark}
              />
            </View>

            <Text className="text-gray-700 font-semibold text-[14px]">
              Cash Sales
            </Text>
          </View>

          {/* Value */}
          <Text
            className="text-[22px] font-bold"
            style={{ color: colors.primaryDark }}
          >
            2.0%
          </Text>

          {/* Sub label */}
          <Text className="text-[11px] text-gray-500 mt-1">
            Fee Scale • 3 mos
          </Text>
        </View>

        {/* -------------------- CREDIT SALES -------------------- */}
        <View
          className="w-[48%] p-4 rounded-2xl"
          style={{
            backgroundColor: colors.light,
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          {/* Icon Row */}
          <View className="flex-row items-center mb-2">
            <View
              className="w-9 h-9 rounded-xl items-center justify-center mr-2"
              style={{
               
                
                backgroundColor: colors.secondaryLight,
              }}
            >
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={18}
                color={colors.secondaryDark}
              />
            </View>

            <Text className="text-gray-700 font-semibold text-[14px]">
              Credit Sales
            </Text>
          </View>

          {/* Value */}
          <Text
            className="text-[22px] font-bold"
            style={{ color: colors.secondaryDark }}
          >
            4.0%
          </Text>

          {/* Sub label */}
          <Text className="text-[11px] text-gray-500 mt-1">
            Fee Scale • 5 mos
          </Text>
        </View>

      </View>
    </View>
  );
}
