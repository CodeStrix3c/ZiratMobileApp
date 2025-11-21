import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { imageMapper } from "../../Data/imageMapper";
import products from "../../Data/products.json";

const { width } = Dimensions.get("window");

export default function ProductDetails() {
  const { productId } = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!productId) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-gray-700">Please provide a product ID</Text>
      </View>
    );
  }

  const product = products.find((p) => p._id === productId);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-gray-700">Product not found</Text>
      </View>
    );
  }

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentImageIndex(index);
  };

  return (
    <View className="flex-1 bg-light">
      <ScrollView>
        {/* Image Carousel */}
        <View className="mt-4 relative">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {product.photos.map((photoKey, index) => {
              const imgSource = imageMapper[photoKey];
              if (!imgSource) return null; // ignore missing
              return (
                <Image
                  key={index}
                  source={imgSource}
                  className="w-full h-72"
                  resizeMode="cover"
                />
              );
            })}
          </ScrollView>

          {/* Badge */}
          {product.label && (
            <View className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary z-10">
              <Text className="text-white font-semibold text-sm">{product.label}</Text>
            </View>
          )}

          {/* Image Number */}
          <View className="absolute bottom-4 right-4 px-2 py-1 rounded-full bg-black/50 z-10">
            <Text className="text-white text-xs font-semibold">
              {currentImageIndex + 1} / {product.photos.length}
            </Text>
          </View>
        </View>

        {/* Product Info */}
        <View className="p-4 space-y-4">
          <Text className="text-2xl font-bold text-dark">{product.title}</Text>
          <Text className="text-sm text-dark">Category: {product.category}</Text>

          <View className="flex-row items-center space-x-4">
            <Text className="text-2xl font-bold text-dark">₹{product.price}</Text>
            {product.discountPrice && (
              <Text className="text-sm line-through text-neutral">₹{product.discountPrice}</Text>
            )}
            <Text className={`text-sm font-medium ${product.inStock ? "text-primary" : "text-error"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Text>
          </View>

          {/* Description */}
          <View className="bg-white p-4 rounded-lg shadow-sm">
            <Text className="font-semibold mb-2 text-dark text-base">Product Description</Text>
            {Array.isArray(product.description)
              ? product.description.map((desc, index) => (
                  <Text key={index} className="text-dark mb-1 text-sm leading-6">
                    • {desc}
                  </Text>
                ))
              : <Text className="text-dark text-sm leading-6">{product.description}</Text>}
          </View>

          {/* Packaging */}
          {product.packaging && (
            <View className="bg-white p-4 rounded-lg shadow-sm">
              <Text className="font-semibold mb-2 text-dark text-base">Packaging</Text>
              {product.packaging.map((pack, index) => (
                <Text key={index} className="text-dark mb-1 text-sm">
                  • {pack.type}: {pack.size} {pack.weight ? `(${pack.weight})` : ""}
                  {pack.packOf ? ` - Pack of ${pack.packOf}` : ""}
                </Text>
              ))}
            </View>
          )}

          {/* Tags */}
          {product.tag && (
            <View className="flex-row flex-wrap items-center space-x-2 mt-2">
              <Text className="text-dark text-sm font-medium">Tags:</Text>
              <Text className="text-primary text-sm font-semibold">{product.tag}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Sticky Buttons */}
      <View className="flex-row p-4 space-x-3 bg-light border-t border-gray-200">
        <TouchableOpacity className="flex-1 py-3 rounded-lg items-center shadow" style={{ backgroundColor: colors.secondary }}>
          <Text className="font-bold text-light text-lg">Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 py-3 rounded-lg items-center shadow" style={{ backgroundColor: colors.neutral }}>
          <Text className="font-bold text-dark text-lg">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
