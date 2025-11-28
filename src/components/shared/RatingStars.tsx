import { RatingStarsProps } from "@/src/types/rating-stars.types";
import { Star } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";

export default function RatingStars({
  rating,
  size = 16,
  editable = false,
  onChange,
}: RatingStarsProps) {

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <View className="flex-row items-center">
      {[...Array(5)].map((_, i) => {
        const handlePress = () => {
          if (editable && onChange) onChange(i + 1);
        };

        const isFull = i < fullStars;
        const isHalf = i === fullStars && hasHalfStar;

        return (
          <TouchableOpacity
            key={i}
            activeOpacity={0.7}
            onPress={handlePress}
            disabled={!editable}
          >
            {isFull ? (
              <Star
                size={size}
                color={colors.secondary}
                fill={colors.secondary}
                className="mr-0.5"
              />
            ) : isHalf ? (
              <View className="relative mr-0.5">
                <Star size={size} color={colors.secondary} fill="none" />
                <View
                  className="absolute left-0 top-0 h-full overflow-hidden"
                  style={{ width: size / 2 }}
                >
                  <Star
                    size={size}
                    color={colors.secondary}
                    fill={colors.secondary}
                  />
                </View>
              </View>
            ) : (
              <Star
                size={size}
                color={colors.secondary}
                fill="none"
                className="mr-0.5"
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
