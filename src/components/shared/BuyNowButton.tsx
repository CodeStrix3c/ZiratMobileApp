import { BuyNowButtonProps } from "@/src/types/buy.type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function BuyNowButton({ onPress, title = "Buy Now" }:BuyNowButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 py-3 mx-4 rounded-lg items-center bg-secondary shadow`}
    >
      <Text className="font-bold text-light text-lg text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
