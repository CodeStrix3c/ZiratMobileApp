import { FilterProps } from "@/src/types/filter.type";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const FILTERS = {
  LATEST: "Latest",
  HELPFUL: "Most Helpful",
  HIGH_RATING: "Highest Rating",
  LOW_RATING: "Lowest Rating",
};

export default function Filter({ filter, setFilter }: FilterProps) {
  return (
    <View className="flex-row mt-3 mb-4 flex-wrap">
      {Object.values(FILTERS).map((f) => (
        <TouchableOpacity
          key={f}
          onPress={() => setFilter(f)}
          className={`px-3 py-2 rounded-xl mr-2 mb-2 shadow rounded border border-neutral ${
            filter === f ? "bg-secondary": "bg-white"
          }`}
        >
          <Text
            className={`text-sm ${
              filter === f ? "text-white" : "text-dark"
            }`}
          >
            {f}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
