<<<<<<< HEAD
=======


>>>>>>> b49707cc895f99ee182eaa637d94988df3a01812
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { BarChart } from "react-native-chart-kit";

const colors = {
  primary: "#2d6b06",
  primaryHover: "#245805",
  secondary: "#c7611f",
  secondaryHover: "#a64f18",
};

const screenWidth = Dimensions.get("window").width;


const SectionHeader = ({ icon, title }) => (
  <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 20 }}>
    <Ionicons name={icon} size={22} color="#2d6b06" />
    <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 8 }}>{title}</Text>
  </View>
);

const GlassCard = ({ children, style }) => (
  <View
    style={[
      {
        backgroundColor: "rgba(255,255,255,0.5)",
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      },
      style,
    ]}
  >
    {children}
  </View>
);

const IconBadge = ({ name, bg }) => (
  <View
    style={{
      width: 42,
      height: 42,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bg,
    }}
  >
    <Ionicons name={name} size={22} color="#fff" />
  </View>
);



const HomeScreen = () => {
  const chartData = {
    labels: ["Orchards", "Harvest", "Spray"],
    datasets: [{ data: [1, 0.9, 0.8] }],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(45, 107, 6, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.6,
  };

  return (
    <View className="flex-1 bg-white px-5 pt-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Weather Card */}
        <View className="rounded-3xl overflow-hidden mb-6 shadow-md">
          <LinearGradient
            colors={["#4da82d", "#c7611f"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-5"
          >
            <View className="flex-row justify-between items-center p-6">
              <View>
                <Text className="text-white text-4xl font-extrabold">28°C</Text>
                <Text className="text-white text-base opacity-90 mt-1">Sunny</Text>

                <View className="mt-4 space-y-2">
                  <View className="flex-row items-center">
                    <Ionicons name="water-outline" size={18} color="#fff" />
                    <Text className="text-white text-sm opacity-90 ml-2">
                      Humidity: 65%
                    </Text>
                  </View>
                  <View className="flex-row items-center mt-2">
                    <Ionicons name="rainy-outline" size={18} color="#fff" />
                    <Text className="text-white text-sm opacity-90 ml-2">Rain: 0mm</Text>
                  </View>
                </View>
              </View>

              <View className="items-center">
                <Ionicons name="sunny" size={70} color="#fff" />
                <Text className="text-white text-xs mt-2 opacity-90">Clear Sky</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Forecast */}
        <Text className="text-lg font-semibold mb-3 p-2 text-gray-800">
          3-Day Weather Forecast
        </Text>

        <View className="flex-row justify-between mb-8">
          {[
            { day: "Fri", icon: "sunny-outline", temp: "29°C" },
            { day: "Sat", icon: "partly-sunny-outline", temp: "30°C" },
            { day: "Sun", icon: "rainy-outline", temp: "27°C" },
          ].map((item, i) => (
            <View
              key={i}
              className="w-[30%] bg-[#f9fdf8] rounded-2xl p-4 items-center border border-[#dbeed4]"
              style={{
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <Ionicons name={item.icon} size={30} color={colors.secondary} />
              <Text className="text-gray-800 font-semibold mt-2">{item.day}</Text>
              <Text className="text-gray-600 text-sm">{item.temp}</Text>
            </View>
          ))}
        </View>

        

        {/* Quick Actions */}
        <Text className="font-semibold text-lg mb-3 p-2 text-gray-800">
          Quick Actions
        </Text>

        <View className="gap-3 mb-8">
          <TouchableOpacity
            className="rounded-xl flex-row justify-center items-center"
            style={{
              backgroundColor: colors.primary,
              paddingVertical: 14,
              shadowColor: colors.primary,
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Ionicons name="add" size={20} color="#fff" />
            <Text className="text-white font-semibold ml-2 text-base">
              Add New Orchard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-xl flex-row justify-center items-center bg-[#f6faf4]"
            style={{
              paddingVertical: 14,
              borderWidth: 1.2,
              borderColor: colors.primary,
            }}
          >
            <Ionicons name="book-outline" size={20} color={colors.primary} />
            <Text
              className="font-semibold ml-2 text-base"
              style={{ color: colors.primary }}
            >
              Log Harvest
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-xl flex-row justify-center items-center bg-[#fff8f4]"
            style={{
              paddingVertical: 14,
              borderWidth: 1.2,
              borderColor: colors.secondary,
            }}
          >
            <Ionicons name="flask-outline" size={20} color={colors.secondary} />
            <Text
              className="font-semibold ml-2 text-base"
              style={{ color: colors.secondary }}
            >
              Add New Spray
            </Text>
          </TouchableOpacity>
        </View>

        
        <Text className="text-lg font-semibold p-2 mb-3">Featured Pesticides</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          <View className="flex-row gap-4 mb-8">
            {[
              {
                name: "CropGuard 250ml",
                desc: "Protects fruits & vegetables from pests.",
                img: "https://tse1.mm.bing.net/th/id/OIP.EOTkhBwoaG01U60HLEcDuQHaFj?pid=Api&P=0&h=220",
              },
              {
                name: "GreenShield 500ml",
                desc: "Eco-friendly spray for orchard pest control.",
                img: "https://tse3.mm.bing.net/th/id/OIP.lrfsaUXeWZBgBu1ruNE6DwHaEo?pid=Api&P=0&h=220",
              },
              {
                name: "AgroMax 1L",
                desc: "Powerful insecticide for fruit trees.",
                img: "https://tse2.mm.bing.net/th/id/OIP.2vuUUPZEu218Jul7q9XIqwHaF7?pid=Api&P=0&h=220",
              },
            ].map((item, i) => (
              <View
                key={i}
                className="border border-[#e0e0e0] rounded-2xl p-4 w-48 bg-white"
                style={{
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  className="w-full h-28 rounded-xl mb-3"
                  resizeMode="cover"
                />
                <Text className="text-gray-800 font-semibold text-center">
                  {item.name}
                </Text>
                <Text className="text-gray-600 text-xs mt-1 text-center">
                  {item.desc}
                </Text>
                <TouchableOpacity
                  className="mt-3 rounded-full py-1.5"
                  style={{ backgroundColor: colors.secondary }}
                >
                  <Text className="text-center text-white text-sm font-medium">
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Farm Management */}
        <Text className="text-lg font-semibold p-2 mb-3">Farm Management</Text>

        <View className="flex-row flex-wrap justify-between mb-6">
          {[
            { icon: "leaf-outline", title: "Active Orchards", value: "1" },
            { icon: "logo-apple", title: "Boxes", value: "100" },
            { icon: "water-outline", title: "Total Spray", value: "1" },
            { icon: "people-outline", title: "Total Workers", value: "5" },
          ].map((item, i) => (
            <View
              key={i}
              className="w-[48%] bg-[#f9fdf8] border border-[#dbeed4] rounded-xl p-4 mb-3 items-center"
            >
              <Ionicons name={item.icon} size={26} color={colors.secondary} />
              <Text className="text-gray-600 text-sm mt-1">{item.title}</Text>
              <Text className="text-lg font-bold mt-1 text-gray-800">
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Chart */}
        <View className="flex-row items-center mb-3 p-2">
          <Ionicons name="bar-chart-outline" size={24} color={colors.primary} />
          <Text className="font-semibold text-lg ml-2">Farm Overview</Text>
        </View>

        <View
          style={{
            borderRadius: 16,
            paddingVertical: 10,
            marginBottom: 24,
          }}
        >
          <BarChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            fromZero
            showValuesOnTopOfBars
          />
        </View>

        {/* Farmer Tips */}
        <Text className="text-[18px] font-semibold p-2 mb-3">
          Farmer Tips & Awareness
        </Text>

        <View className="rounded-2xl overflow-hidden mb-12 border border-[#e1f1dd] bg-[#f6faf4] ">
          <LinearGradient
            colors={["#4da82d", "#e57b3a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-4 flex-row items-center"
          >
            <View className="p-4 flex-row items-center">
              <Ionicons name="bulb-outline" size={26} color="#fff" />
              <Text className="text-white font-semibold text-lg ml-2">
                Smart Farming Tips
              </Text>
            </View>
          </LinearGradient>

          <View className="p-4 space-y-4">
            {[
              {
                icon: "shield-checkmark-outline",
                title: "Always Wear Protective Gear",
                desc: "Use gloves, masks, and eyewear while spraying pesticides.",
              },
              {
                icon: "water-outline",
                title: "Irrigate During Early Hours",
                desc: "Water crops early to reduce evaporation loss.",
              },
              {
                icon: "leaf-outline",
                title: "Use Organic Fertilizers",
                desc: "Compost helps maintain soil fertility sustainably.",
              },
              {
                icon: "sunny-outline",
                title: "Monitor Weather Before Spraying",
                desc: "Avoid spraying on windy or rainy days.",
              },
            ].map((tip, i) => (
              <View key={i} className="flex-row items-start p-4">
                <Ionicons name={tip.icon} size={20} color={colors.primary} />
                <View className="ml-3 flex-1">
                  <Text className="text-gray-800 font-semibold">{tip.title}</Text>
                  <Text className="text-gray-600 text-xs mt-1">{tip.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


