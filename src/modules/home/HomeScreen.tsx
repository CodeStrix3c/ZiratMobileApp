import InfoCard from "@/src/components/shared/InfoCard";
import SectionCard from "@/src/components/shared/SectionCard";
import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useProductsQuery } from "../../hooks/useProductsQuery";

export default function HomeScreen() {
  const { data } = useProductsQuery();
  console.log(data, " products data");
  return (
    <ScrollView className="flex-1 bg-lightGreen px-5 pt-10">
      <Text className="text-primary text-lg mb-3">Ziraat</Text>

      <LinearGradient
        colors={[colors.blackHover, colors.black]}
        className="flex-row justify-between items-center p-5 rounded-2xl mb-5"
      >
        <View>
          <Text className="text-white text-base">Today&apos;s Weather</Text>
          <Text className="text-white text-4xl font-bold">28°C</Text>
          <Text className="text-white text-lg">Sunny</Text>
          <Text className="text-white mt-1 text-sm">
            Humidity: 65% Rain: 0mm
          </Text>
        </View>
        <Ionicons name="sunny" size={50} color={colors.white} />
      </LinearGradient>

      <View className="flex-row justify-between mb-5">
        <InfoCard title="Apple Trees" value="248" icon="leaf-outline" />
        <InfoCard title="Irrigation" value="85%" icon="water-outline" />
        <InfoCard title="Harvest Ready" value="12" icon="nutrition-outline" />
      </View>

      <Text className="text-lg font-bold mb-3">Farm Management</Text>
      <View className="flex-row justify-between">
        <SectionCard
          title="Crop Management"
          desc="Track apple trees, growth"
          icon="analytics-outline"
        />
        <SectionCard
          title="Weather Monitoring"
          desc="Real-time weather updates"
          icon="partly-sunny-outline"
        />
      </View>
    </ScrollView>
  );
}
