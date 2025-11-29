import ReviewFilters, { FILTERS } from "@/src/components/shared/Filter";
import RatingStars from "@/src/components/shared/RatingStars";
import WriteReview from "@/src/components/shared/WriteReview";
import { colors } from "@/src/constants/colors";
import { ThumbsUp, User, X } from "lucide-react-native";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import data from "../../Data/Review.json";

export default function Review() {
  const { summary, reviews: initialReviews } = data;
  const [reviews, setReviews] = useState(initialReviews);

  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(FILTERS.LATEST);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    setModalVisible(false);
  };
  const sortedReviews = React.useMemo(() => {
    let sorted = [...reviews];

    switch (filter) {
      case FILTERS.HELPFUL:
        sorted.sort((a, b) => b.helpful - a.helpful);
        break;

      case FILTERS.HIGH_RATING:
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      case FILTERS.LOW_RATING:
        sorted.sort((a, b) => a.rating - b.rating);
        break;

      case FILTERS.LATEST:
      default:
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return sorted;
  }, [reviews, filter]);

  return (
    <View className="bg-light">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-secondary p-3 rounded-xl mt-4"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Write a Review
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-white rounded-2xl p-5 w-11/12 shadow-lg">
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="self-end mb-2"
            >
              <X size={26} color="black" />
            </TouchableOpacity>

            <WriteReview onSubmit={addReview} />
          </View>
        </View>
      </Modal>

      <Text className="text-3xl font-bold pt-6 mt-4 border-t border-dark">
        Customer Reviews
      </Text>

      <View className="mb-4 mt-2">
        <Text className="text-2xl font-semibold flex-row items-center">
          {summary.averageRating}{" "}
          <RatingStars rating={summary.averageRating} size={14} />
        </Text>

        <Text className="text-dark mt-1">
          {summary.totalReviews} Reviews
        </Text>
      </View>

     
      <ReviewFilters filter={filter} setFilter={setFilter} />

 
      {sortedReviews.map((r) => (
        <View
          key={r.id}
          className="mb-4 pb-4 p-4 rounded-2xl border border-neutral shadow-lg bg-white "
        >
          <View className="flex-row items-center justify-between mb-1">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-neutral justify-center items-center mr-3 border border-neutral">
                <User size={20} color={colors.dark} />
              </View>

              <View>
                <Text className="font-semibold text-xl">{r.user}</Text>
                <Text className="text-md text-dark">{r.date}</Text>
              </View>
            </View>

            <RatingStars rating={r.rating} size={16} />
          </View>

          <Text className="text-dark mt-1">{r.comment}</Text>

          <View className="flex-row items-center mt-3 mb-1">
            <ThumbsUp
              size={20}
              color={colors.secondary}
              fill={colors.secondary}
            />
            <Text className="text-dark ml-1 text-sm">
              {r.helpful} People found it helpful
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
