import { AddToCartButtonProps } from "@/src/types/cart.type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function AddToCartButton({
  onPress,
  title = "Add to Cart",
} :AddToCartButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 py-3 mx-4 rounded-lg items-center bg-neutral`}
    >
      <Text className="font-bold text-dark text-lg text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
