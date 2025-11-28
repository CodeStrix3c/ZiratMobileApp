import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function DeliveryPerformanceCard({ stats }) {
  return (
    <View
      className="p-5 rounded-2xl shadow mb-6"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
      }}
    >
      {/* Title */}
      <Text className="text-lg font-semibold text-gray-900 mb-5">
        Delivery Performance
      </Text>

      {/* On-Time Deliveries */}
      <View
        className="flex-row items-center justify-between p-4 rounded-xl mb-3"
        style={{
          backgroundColor: colors.darkHover,
          borderLeftWidth: 5,
          borderLeftColor: colors.primary,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 4,
        }}
      >
        <View className="flex-row items-center">
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={colors.primary}
            style={{ marginRight: 12 }}
          />
          <View>
            <Text className="text-gray-900 font-semibold text-sm">
              On-Time Deliveries
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              Successful & punctual drops
            </Text>
          </View>
        </View>

        <Text
          className="text-xl font-bold"
          style={{ color: colors.primary }}
        >
          {stats.onTime}
        </Text>
      </View>

      {/* Delayed Deliveries */}
      <View
        className="flex-row items-center justify-between p-4 rounded-xl mb-3"
        style={{
          backgroundColor: colors.darkHover,
          borderLeftWidth: 5,
          borderLeftColor: colors.secondary,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 4,
        }}
      >
        <View className="flex-row items-center">
          <Ionicons
            name="alert-circle-outline"
            size={24}
            color={colors.secondary}
            style={{ marginRight: 12 }}
          />
          <View>
            <Text className="text-gray-900 font-semibold text-sm">
              Delayed Deliveries
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              Overdue or late arrivals
            </Text>
          </View>
        </View>

        <Text
          className="text-xl font-bold"
          style={{ color: colors.secondary }}
        >
          {stats.delayed}
        </Text>
      </View>

      {/* Average Delivery Time */}
      <View
        className="flex-row items-center justify-between p-4 rounded-xl"
        style={{
          backgroundColor: colors.darkHover,
          borderLeftWidth: 5,
          borderLeftColor: colors.primaryHover,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 4,
        }}
      >
        <View className="flex-row items-center">
          <Ionicons
            name="time-outline"
            size={24}
            color={colors.primaryHover}
            style={{ marginRight: 12 }}
          />
          <View>
            <Text className="text-gray-900 font-semibold text-sm">
              Avg Delivery Time
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              Calculated per completed trip
            </Text>
          </View>
        </View>

        <Text
          className="text-xl font-bold"
          style={{ color: colors.dark }}
        >
          {stats.avgTime}
        </Text>
      </View>
    </View>
  );
}
