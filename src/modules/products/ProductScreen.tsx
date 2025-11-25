import { ChevronRight } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { imageMapper } from "../../Data/imageMapper";
import products from "../../Data/products.json";
import ProductCarousel from "../../components/shared/ProductCarousel";
import { colors } from "../../constants/colors";

export default function ProductScreen() {
  const sections = [
    { title: "Popular pesticide for Crop Production", slice: [0, 8] },
    { title: "Upcoming Pesticide Solution for Next Season", slice: [8, 15] },
    { title: "Herbicide For effective Weed Control", slice: [15, 22] },
    { title: "Fungicide For safeguard Your Crops", slice: [22, 29] },
  ];

  return (
    <ScrollView className="p-4 bg-light">
      {sections.map((section, index) => (
        <View key={index}>
  
          <View className="flex-row items-center mt-6 mb-4">
            <Text className="text-xl font-bold text-dark">
              {section.title}
            </Text>
            <ChevronRight size={20} color={colors.dark} className="ml-1" />
          </View>

          <ProductCarousel
            items={products.slice(...section.slice)}
            imageMapper={imageMapper}
          />
        </View>
      ))}
    </ScrollView>
  );
}
