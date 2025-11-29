import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Searchandfilter() {
  const FILTERS = ["Published", "Low Stock", "Expiring Soon"];
  const [active, setActive] = useState("");

  return (
    <View
      className="rounded-2xl p-4 mb-4 shadow-sm"
      style={{
        backgroundColor: colors.light,
        borderColor: "#e5e7eb",
        borderWidth: 1,
      }}
    >
      {/* Search Bar */}
      <View
        className="flex-row items-center rounded-xl px-3 py-2 shadow-sm"
        style={{
          backgroundColor: "#ffffff",
          borderWidth: 1,
          borderColor: "#e2e8f0",
        }}
      >
        <Ionicons name="search" size={18} color={colors.primaryDark} />
        <TextInput
          placeholder="Search product..."
          placeholderTextColor="#9ca3af"
          className="ml-2 flex-1 text-gray-800"
        />
      </View>

      {/* Filters */}
      <View className="flex-row mt-3">
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <TouchableOpacity
              key={f}
              onPress={() => setActive(isActive ? "" : f)}
              activeOpacity={0.7}
              className="px-3 py-[6px] rounded-full mr-2"
              style={{
                backgroundColor: isActive
                  ? `${colors.primary}1A`
                  : "#f3f4f6",
                borderColor: isActive ? colors.primary : "#d1d5db",
                borderWidth: 1,
              }}
            >
              <Text
                className="text-xs font-semibold"
                style={{
                  color: isActive ? colors.primaryDark : "#4b5563",
                }}
              >
                {f}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
