import { ProductDetailCarouselProps } from "@/src/types/product-detail-carousel.type";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductDetailCarousel({
  photos = [],
  imageMapper = {},
  label,
}:ProductDetailCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View className="relative mt-12">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {photos.map((photoKey, index) => {
          const imgSource = imageMapper[photoKey];
          if (!imgSource) return null;

          const source =
            typeof imgSource === "string" ? { uri: imgSource } : imgSource;

          return (
            <View
              key={index}
              className="justify-center items-center w-screen"
            >
              <View className="rounded-xl overflow-hidden mx-5 h-[400px] w-[90%]">
                <Image
                  source={source}
                  resizeMode="cover"
                  className="w-full h-full"
                />

                {label && (
                  <View className="absolute bottom-3 left-3 bg-primary px-3 py-1 rounded-full">
                    <Text className="text-light font-semibold text-sm">
                      {label}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>

    
      <View className="absolute bottom-4 w-full flex-row justify-center items-center">
        {photos.map((_, i) => (
          <View
            key={i}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === i ? "bg-neutral" : "bg-dark"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
