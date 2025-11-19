import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CropsScreen() {

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <View className="flex-row items-center justify-between mb-5">
        <View>
          <Text className="text-3xl font-bold text-black">Crop Management</Text>
          <Text className="text-gray-500">Monitor your fields</Text>
        </View>
        <TouchableOpacity className="bg-white p-3 rounded-full">
          <Ionicons name="add" size={22} color={colors.secondary || "text-secondary"} />
        </TouchableOpacity>
      </View>


      <View className="flex-row bg-white rounded-full p-1 mb-6">
        <TouchableOpacity className="flex-1 bg-primary py-2 rounded-full">
          <Text className="text-center text-white font-semibold">Active Crops</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 py-2">
          <Text className="text-center text-black font-semibold">Farm Tasks</Text>
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

          <View className="absolute top-3 left-3 bg-[#ffffff] px-2 py-1 rounded-full flex-row items-center">
            <Ionicons name="location-outline" size={17} color="#c7611f" />
          </View>
          <View className="absolute top-3 right-3 bg-white  px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-black">Flowering</Text>
          </View>
        </View>


        <View className="p-5">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xl font-semibold text-">Apple Orchard A</Text>
            <Text className="text-gray-500">2.5 acres</Text>
          </View>

          <Text className="text-gray-600">Gala Apple</Text>
          <View className="flex-row items-center mb-2 mt-1">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
            <Text className="text-gray-600 ml-1">North Field, Farm Section A</Text>
          </View>


          <Text className="text-gray-500 mb-1">Growth Progress</Text>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
            <View
              className="h-full bg-primary"
              style={{ width: "95%" }}
            />
          </View>
          <Text className="text-right text-gray-600 mb-2">95%</Text>


          <View className="flex-row justify-between mt-1">
            <View>
              <Text className="text-gray-400 text-sm">Planted</Text>
              <Text className="font-semibold text-black">15 March 2022</Text>
            </View>
            <View>
              <Text className="text-gray-400 text-sm">Expected Harvest</Text>
              <Text className="font-semibold text-black]">20 Oct 2024</Text>
            </View>
          </View>

          <TouchableOpacity
            className="bg-primary mt-5 py-3 rounded-xl"
            onPress={() => router.push("/crops/CropViewDetails")}
          >
            <Text className="text-center text-white font-semibold">
              View Details
            </Text>
          </TouchableOpacity>

        </View>
      </View>

      <View className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <View className="relative">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/5529519/pexels-photo-5529519.jpeg",
            }}
            className="w-full h-40"
          />

          <View className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
          </View>
          <View className="absolute top-3 right-3 bg-white  px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-black">Growing</Text>
          </View>
        </View>


        <View className="p-5">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xl font-semibold text-black">Young Apple Trees</Text>
            <Text className="text-gray-500">1.2 acres</Text>
          </View>

          <Text className="text-gray-600">Honeycrisp Apple</Text>
          <View className="flex-row items-center mb-2 mt-1">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
            <Text className="text-gray-600 ml-1">East Field, Farm Section B</Text>
          </View>


          <Text className="text-gray-500 mb-1">Growth Progress</Text>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
            <View
              className="h-full bg-primary"
              style={{ width: "45%" }}
            />
          </View>
          <Text className="text-right text-gray-600 mb-2">45%</Text>


          <View className="flex-row justify-between mt-1">
            <View>
              <Text className="text-gray-400 text-sm">Planted</Text>
              <Text className="font-semibold text-black">1 May 2023</Text>
            </View>
            <View>
              <Text className="text-gray-400 text-sm">Expected Harvest</Text>
              <Text className="font-semibold text-black">20 Sep 2024</Text>
            </View>
          </View>


          <TouchableOpacity className="bg-primary mt-5 py-3 rounded-xl">
            <Text className="text-center text-white font-semibold">
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <View className="relative">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/5528996/pexels-photo-5528996.jpeg",
            }}
            className="w-full h-40"
          />

          <View className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
          </View>
          <View className="absolute top-3 right-3 bg-white  px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-black">Ready to Harvest</Text>
          </View>
        </View>


        <View className="p-5">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xl font-semibold text-black">Heritage Apple Grove</Text>
            <Text className="text-gray-500">3 acres</Text>
          </View>

          <Text className="text-gray-600">Red Delicious</Text>
          <View className="flex-row items-center mb-2 mt-1">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
            <Text className="text-gray-600 ml-1">South Field, Farm Section C</Text>
          </View>


          <Text className="text-gray-500 mb-1">Growth Progress</Text>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
            <View
              className="h-full bg-primary"
              style={{ width: "95%" }}
            />
          </View>
          <Text className="text-right text-gray-600 mb-2">95%</Text>


          <View className="flex-row justify-between mt-1">
            <View>
              <Text className="text-gray-400 text-sm">Planted</Text>
              <Text className="font-semibold text-black">15 Mar 2022</Text>
            </View>
            <View>
              <Text className="text-gray-400 text-sm">Expected Harvest</Text>
              <Text className="font-semibold text-black">20 Sep 2024</Text>
            </View>
          </View>


          <TouchableOpacity className="bg-primary mt-8 py-3 rounded-xl">
            <Text className="text-center text-white font-semibold">
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <View className="relative">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/2257407/pexels-photo-2257407.jpeg",
            }}
            className="w-full h-40"
          />

          <View className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#c7611f" />
          </View>
          <View className="absolute top-3 right-3 bg-white  px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-black">Flowering</Text>
          </View>
        </View>


        <View className="p-5">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xl font-semibold text-black">Apple Orchard A</Text>
            <Text className="text-gray-500">2.5 acres</Text>
          </View>

          <Text className="text-gray-600">Gala Apple</Text>
          <View className="flex-row items-center mb-2 mt-1">
            <Ionicons name="location-outline" size={16} color="#c7611foiuytrewq" />
            <Text className="text-gray-600 ml-1">North Field, Farm Section A</Text>
          </View>


          <Text className="text-gray-500 mb-1">Growth Progress</Text>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
            <View
              className="  h-full bg-secondary"
              style={{ width: "95%" }}
            />
          </View>
          <Text className="text-right text-gray-600 mb-2">95%</Text>


          <View className="flex-row justify-between mt-1">
            <View>
              <Text className="text-gray-400 text-sm">Planted</Text>
              <Text className="font-semibold text-black">15 Mar 2022</Text>
            </View>
            <View>
              <Text className="text-gray-400 text-sm">Expected Harvest</Text>
              <Text className="font-semibold text-black">20 Oct 2024</Text>
            </View>
          </View>


          <TouchableOpacity className="  bg-secondary mt-8  py-3 rounded-xl">
            <Text className="text-center text-white font-semibold">
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
