import { Star } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { colors } from "../../constants/colors";

export default function RatingStars({ rating, size = 16 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <View className="flex-row items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {

          return (
            <Star
              key={i}
              size={size}
              color={colors.secondary}
              fill={colors.secondary}
              className="mr-0.5"
            />
          );
        }

        if (i === fullStars && hasHalfStar) {
        
          return (
            <View key={i} className="relative mr-0.5">
            
              <Star size={size} color={colors.nuetral} fill="none" />


              <View
                className="absolute left-0 top-0 h-full overflow-hidden"
                style={{ width: size / 2 }}
              >
                <Star size={size} color={colors.secondary} fill={colors.secondary} />
              </View>
            </View>
          );
        }


        return (
          <Star
            key={i}
            size={size}
            color={colors.nuetral}
            fill="none"
            className="mr-0.5"
          />
        );
      })}
    </View>
  );
}
