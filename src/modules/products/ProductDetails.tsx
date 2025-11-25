import AddToCartButton from "@/src/components/shared/AddToCartButton";
import BuyNowButton from "@/src/components/shared/BuyNowButton";
import ProductDetailCarousel from "@/src/components/shared/ProductDetailCarousel";
import RatingStars from "@/src/components/shared/RatingStars";
import { colors } from "@/src/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { IndianRupee } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { imageMapper } from "../../Data/imageMapper";
import products from "../../Data/products.json";

export default function ProductDetails() {
  const { productId } = useLocalSearchParams();

  if (!productId) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-dark">Please provide a product ID</Text>
      </View>
    );
  }

  const product = products.find((p) => p._id === productId);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-dark">Product not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ScrollView>

        <ProductDetailCarousel
          photos={product.photos}
          imageMapper={imageMapper}
          label={product.label}
        />

        <View className="px-6 mt-8 items-start">
           <Text className="text-4xl font-bold text-dark mb-2 text-left">
            {product.title}
          </Text>
          <Text className="text-xl mb-1 text-left">
            Category: {product.category}
          </Text>
          {product.saltComposition && (
            <Text className="text-xl mb-2 text-dark text-left">
              <Text className="font-semibold text-primary">
                {product.saltComposition}
              </Text>
            </Text>
          )}

          <View className="flex-row items-center mb-2 w-full">

            <View className="flex-row items-center">
              <IndianRupee size={28} color={colors.dark} />
              <Text className="text-3xl line-through font-bold text-dark ">
                {product.price}
              </Text>
            </View>

            {product.discountPrice && (
              <View className="flex-row items-center ml-1">
                <IndianRupee size={16} color={colors.dark} />
                <Text className="text-xl text-dark ">
                  {product.discountPrice}
                </Text>
              </View>
            )}
            <Text
              className={`text-sm px-2 py-1 bg-primary rounded-xl ml-3 ${
                product.inStock ? "text-light" : "text-error"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Text>
          </View>
          <View className="flex-row justify-start mb-6">
            <RatingStars rating={product.rating} />
          </View>

          <Text className="font-semibold text-xl text-dark text-left mb-2">
            Product Description:
          </Text>

          {Array.isArray(product.description)
            ? product.description.map((desc, index) => (
                <Text key={index} className="text-dark text-lg text-left mb-2">
                  {desc}
                </Text>
              ))
            : (
              <Text className="text-dark text-lg text-left">
                {product.description}
              </Text>
            )}

          {product.dosage && (
            <Text className="text-xl text-dark text-left mb-4">
              <Text className="font-semibold text-dark">Dosage: </Text>
              {product.dosage}
            </Text>
          )}

          {product.packaging && (
            <>
              <Text className="font-semibold text-xl text-dark text-left mb-2">
                Packaging:
              </Text>

              {product.packaging.map((pack, index) => (
                <Text key={index} className="text-dark text-lg text-left mb-1">
                  • {pack.type}: {pack.size}{" "}
                  {pack.weight ? `(${pack.weight})` : ""}
                  {pack.packOf ? ` - Pack of ${pack.packOf}` : ""}
                </Text>
              ))}
            </>
          )}
          {product.tag && (
            <Text className="text-dark text-lg font-medium text-left mt-4">
              Tags: <Text className="text-primary font-semibold">{product.tag}</Text>
            </Text>
          )}
        </View>
      </ScrollView>

      <View className="flex-row p-4 my-2">
        <BuyNowButton onPress={() => console.log("Buy Now Clicked")} />
        <AddToCartButton onPress={() => console.log("Added to Cart")} />
      </View>
    </View>
  );
}
