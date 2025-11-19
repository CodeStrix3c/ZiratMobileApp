import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CropViewDetails() {


  return (
    <ScrollView className="flex-1 bg-white p-5">

      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold text-black">Crop Details</Text>

        <TouchableOpacity
          className="bg-primary mt-5 py-3 rounded-xl"
          onPress={() => router.push("/crops/CropsScreen")}
        >
          <Ionicons
            name="close"
            size={22}
            color={colors.secondary || "#c7611f"}
          />
        </TouchableOpacity>
      </View>



      <View className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <View className="relative">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg",
            }}
            className="w-full h-40"
          />
          <View className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-sm">
            <Text className="text-xs font-semibold text-black">Flowering</Text>
          </View>
        </View>


        <View className="p-5">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xl font-semibold text-black">
              Apple Orchard A
            </Text>
            <Text className="text-gray-500">2.5 acres</Text>
          </View>
          <Text className="text-gray-600 mb-2">Gala Apple</Text>


          <Text className="text-gray-500 mb-1">Growth Progress</Text>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
            <View className="h-full bg-primary" style={{ width: "95%" }} />
          </View>
          <Text className="text-right text-gray-600 mb-3">95%</Text>


          <View className="flex-row items-center mb-2 mt-1">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
            <Text className="text-gray-600 ml-1">Location Details</Text>
          </View>
          <Text className="text-base font-semibold text-black mb-1">
            Address: North Field, Farm Section A
          </Text>
          <Text className="text-gray-500 mb-1">Latitude: 40.7128</Text>
          <Text className="text-gray-500 mb-3">Longitude: -74.006</Text>


          <TouchableOpacity className="bg-primary mt-3 py-3 rounded-xl">
            <Text className="text-center text-white font-semibold">
              View on Map
            </Text>
          </TouchableOpacity>
        </View>


        <View className="px-5 space-y-3 mt-5 mb-5">
          <View className="bg-white border border-gray-200 rounded-2xl p-3">
            <Text className="text-black text-lg font-normal">AREA</Text>
            <Text className="text-xl font-medium text-black">2.5 acres</Text>
          </View>

          <View className="bg-white border border-gray-200 rounded-2xl p-3">
            <Text className="text-black text-lg font-normal">SOIL TYPE</Text>
            <Text className="text-xl font-medium text-black">
              Well-drained Loamy
            </Text>
          </View>

          <View className="bg-white border border-gray-200 rounded-2xl p-3">
            <Text className="text-black text-lg font-normal">PLANTED</Text>
            <Text className="text-xl font-medium text-black">15 Mar 2022</Text>
          </View>

          <View className="bg-white border border-gray-200 rounded-2xl p-3">
            <Text className="text-black text-lg font-normal">HARVEST DATE</Text>
            <Text className="text-xl font-medium text-black">20 Oct 2024</Text>
          </View>
        </View>


        <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-3">
          <Text className="font-semibold text-xl mb-2">Farming Details</Text>
          <Text className="text-gray-700">Irrigation System: Drip Irrigation</Text>
          <Text className="text-gray-700">Fertilizer: Organic Compost</Text>
          <Text className="text-gray-700">
            Pest Control: Integrated Pest Management
          </Text>
        </View>


        <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-3">
          <Text className="font-semibold text-xl mb-2">Performance Metrics</Text>
          <Text className="text-gray-700">Expected Yield: 25 tons/acre</Text>
          <Text className="text-gray-700">Water Usage: 20 inches/season</Text>
          <Text className="text-gray-700">
            Optimal Temperature: 15–20°C (optimal)
          </Text>
        </View>


        <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-5">
          <Text className="font-semibold text-xl mb-2">
            Notes & Observations
          </Text>
          <Text className="text-gray-700">
            Excellent flowering this season. Monitor for apple scab during wet
            periods.
          </Text>
        </View>

        <View className="flex-row bg-white rounded-full p-1 mb-6">
          <TouchableOpacity className="flex-1 bg-primary py-2 rounded-full">
            <Text className="text-center text-white font-semibold">Edit Details</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2">
            <Text className="text-center text-black font-semibold">Add Photo</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}
