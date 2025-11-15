import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import marketNews from "../../Data/MarketNews.json";
import marketData from "../../Data/MarketPrice.json";

export default function MarketScreen() {
  const [activeTab, setActiveTab] = useState("prices");
  const displayedData = activeTab === "prices" ? marketData : marketNews;

  return (
    <ScrollView className="flex-1 p-5">
      <Text className="text-3xl font-bold">Market Prices</Text>
      <Text className="text-md mt-1 mb-5 ">
        {activeTab === "prices" ? "Live commodity prices" : "Latest market news"}
      </Text>

     
      <View className="flex flex-row justify-between items-center mb-4 bg-white px-8 py-2 rounded-full shadow-sm">
        <Pressable
          onPress={() => setActiveTab("prices")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "prices" ? "bg-primary" : "bg-transparent"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeTab === "prices" ? "text-white" : "text-gray-600"
            }`}
          >
            Current Prices
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("news")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "news" ? "bg-primary" : "bg-transparent"
          }`}
        >
          <Text
            className={`font-semibold ${
              activeTab === "news" ? "text-white" : "text-black"
            }`}
          >
            Market News
          </Text>
        </Pressable>
      </View>

      {activeTab === "prices" && (
        <View className="bg-white mt-3 rounded-lg px-2 py-3">
          <Text className="text-xl font-bold mb-1">Market Summary</Text>

          <View className="flex flex-row justify-between items-center bg-white p-2 rounded-lg">
            <View className="flex items-center">
              <Text className="text-primary font-bold text-xl">5</Text>
              <Text className="text-black text-md">Rising</Text>
            </View>

            <View className="flex items-center">
              <Text className="text-red-500 font-bold text-xl">1</Text>
              <Text className="text-gray-500 text-md">Falling</Text>
            </View>

            <View className="flex items-center">
              <Text className="text-blue-500 font-bold text-xl">6</Text>
              <Text className="text-gray-500 text-md">Total Items</Text>
            </View>
          </View>
        </View>
      )}

    
      {displayedData.map((item) => (
        <View
          key={item.id}
          className="bg-white rounded-xl p-0 mt-3 mb-2 shadow-sm flex flex-row overflow-hidden"
        >
          {activeTab === "prices" ? (
            
            <View className="flex-1 p-6">
              <View className="flex-row justify-between items-center">
                <Text className="text-xl font-semibold">{item.name}</Text>
                <Text className="font-semibold text-lg">{item.price}</Text>
              </View>

              <View className="flex-row justify-between items-center mt-2">
                <Text className=" font-medium text-gray-600">
                  {item.unit}
                </Text>
                <Text
                  className={`text-sm flex items-center ${
                    item.changeType === "up" ? "text-primary" : "text-red-700"
                  }`}
                >
                  <Ionicons
                    name={item.changeType === "up" ? "arrow-up" : "arrow-down"}
                    size={18}
                    color={item.changeType === "up" ? "green" : "red"}
                  />{" "}
                  {item.change}
                </Text>
              </View>

              <View className="h-[1px] bg-black my-3" />

              <View className="flex flex-row justify-between items-center">
                <Text className="text-[15px] text-black">
                  Last updated: {item.lastUpdated}
                </Text>
                <Text className="text-primary text-[15px] font-medium">
                  View chart
                </Text>
              </View>
            </View>
          ) : (
       
            <>
             
              <View className=" items-center justify-center px-4 py-4 w-[70px]">
                <Ionicons name="newspaper-outline" size={36} color="blue" />
              </View>

             
              <View className="flex-1 p-4">
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-[13px] text-white bg-primary px-3 py-1 rounded-full mr-2">
                    {item.name}
                  </Text>
                  <Text className="text-[12px] text-gray-400">
                   {item.lastUpdated}
                  </Text>
                </View>

                <Text className="text-lg font-semibold mb-1">{item.title}</Text>
                <Text className="text-gray-600 text-[14px] mb-2">
                  {item.description}
                </Text>

                <View className="flex flex-row justify-between items-center">
                  <Text className="text-primary text-[14px] font-medium">
                    Read more
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      ))}

      
      <View className="items-center mt-4 mb-10">
        <Pressable className="bg-primary px-6 py-3 rounded-full shadow-md active:scale-95 flex-row items-center justify-center">
          <Ionicons
            name="reload"
            size={18}
            color="white"
            style={{ marginRight: 6 }}
          />
          <Text className="text-white text-[16px] font-semibold">
            Load More
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
