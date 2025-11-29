import RatingStars from "@/src/components/shared/RatingStars";
import { colors } from "@/src/constants/colors";
import { WriteReviewProps } from "@/src/types/write-review.type";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function WriteReview({ onSubmit }:WriteReviewProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!rating || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      user: "Anonymous",
      date: new Date().toLocaleDateString(),
      rating,
      comment,
      helpful: 0,
    };

    onSubmit(newReview);
    setRating(0);
    setComment("");
  };

  return (
    <View className="p-4 mt-4 bg-white rounded-2xl shadow border border-neutral">

      <Text className="text-2xl font-bold mb-2">Write a Review</Text>

      <TextInput
        className="border border-dark rounded-xl p-3 text-dark h-28"
        placeholder="Share your experience..."
        placeholderTextColor={colors.dark}
        multiline
        value={comment}
        onChangeText={setComment}
      />
   
      <View className="flex-row items-center my-4">
        <Text className="text-lg mr-1">Your Rating:</Text>
 
        <RatingStars
          rating={rating}
          size={22}
          editable={true}
          onChange={(value) => setRating(value)}
        />
      </View>
    
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-secondary mt-1 p-3 rounded-xl"
      >
        <Text className="text-center text-white font-semibold">
          Submit Review
        </Text>
      </TouchableOpacity>
    </View>
  );
}
