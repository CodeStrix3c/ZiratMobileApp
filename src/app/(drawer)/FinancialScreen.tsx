import {
    BarChart2,
    DollarSign,
    LineChart,
    Percent,
    PieChart,
    TrendingUp,
    Wallet,
    Wheat
} from "lucide-react-native";
import React from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";
import { BarChart, LineChart as CurveChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width - 40;

const kpis = [
    { id: 35, title: "Cost of Cultivation", value: "₹ 28,500", subtitle: "Per Acre / Season", icon: Wallet },
    { id: 36, title: "Gross Revenue", value: "₹ 52,000", subtitle: "Per Acre", icon: DollarSign },
    { id: 37, title: "Net Profit", value: "₹ 23,500", subtitle: "Per Acre", icon: TrendingUp },
    { id: 38, title: "ROI", value: "82%", subtitle: "Return on Investment", icon: Percent },
    { id: 39, title: "Break-Even Yield", value: "920 kg", subtitle: "Per Acre", icon: Wheat },
];

const recentInsights = [
    { id: "FY-101", type: "Yield Update", status: "Improved" },
    { id: "FY-102", type: "Market Price Change", status: "Positive" },
    { id: "FY-103", type: "Cost Increase", status: "Attention Needed" },
];

const revenueVsCostData = {
    labels: ["Cost", "Revenue"],
    datasets: [
        { data: [28500, 52000] },
    ],
};

const netProfitTrendData = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
        {
            data: [19000, 20500, 21500, 22600, 23000, 23500],
            strokeWidth: 3,
        },
    ],
};

export default function FinancialPerformanceScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                contentContainerStyle={{ paddingBottom: 60 }}
                className="px-4 py-4"
            >


                <View className="flex-row items-center gap-3 mb-4">
                    <PieChart size={28} color="#c7611f" />
                    <Text className="text-xl font-bold text-black">
                        Financial & Yield Performance
                    </Text>
                </View>

                <Text className="text-gray-700 text-sm mb-4">
                    Visualize earnings, expenses & yield progress for smarter decisions.
                </Text>


                <View className="flex-row flex-wrap justify-between gap-y-4">
                    {kpis.map((item) => {
                        const Icon = item.icon;
                        return (
                            <View
                                key={item.id}
                                className="w-[48%] bg-white p-4 rounded-xl shadow-md"
                            >
                                <View className="flex-row items-center">
                                    <Icon size={20} color="#c7611f" />
                                    <Text className="ml-2 text-black font-semibold">
                                        {item.title}
                                    </Text>
                                </View>

                                <Text className="text-2xl font-bold text-black mt-3">
                                    {item.value}
                                </Text>

                                <Text className="text-xs text-gray-600 mt-1">
                                    {item.subtitle}
                                </Text>
                            </View>
                        );
                    })}
                </View>


                <View className="mt-8 bg-white rounded-xl p-5 shadow-md">
                    <View className="flex-row items-center mb-3">
                        <BarChart2 size={24} color="#c7611f" />
                        <Text className="ml-2 text-lg font-bold text-black">
                            Revenue vs Cost
                        </Text>
                    </View>

                    <BarChart
                        data={revenueVsCostData}
                        width={screenWidth}
                        height={200}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 0,
                            color: () => "#2e7d32",
                        }}
                        style={{ borderRadius: 12 }}
                    />
                </View>

                {/* Line Chart */}
                <View className="mt-8 bg-white rounded-xl p-5 shadow-md">
                    <View className="flex-row items-center mb-3">
                        <LineChart size={24} color="#c7611f" />
                        <Text className="ml-2 text-lg font-bold text-black">
                            Net Profit Trend (6 Months)
                        </Text>
                    </View>

                    <CurveChart
                        data={netProfitTrendData}
                        width={screenWidth}
                        height={200}
                        bezier
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 0,
                            color: () => "#c7611f",
                        }}
                        style={{ borderRadius: 12 }}
                    />
                </View>

                {/* Recent Insights */}
                <View className="mt-8 bg-white p-5 rounded-xl shadow-md">
                    <Text className="font-bold text-black text-lg mb-4">
                        Recent Financial Insights
                    </Text>

                    {recentInsights.map((item) => (
                        <View
                            key={item.id}
                            className="flex-row justify-between items-center border-b border-gray-200 pb-3 mb-3"
                        >
                            <Text className="font-semibold text-gray-800 w-[30%]">
                                {item.id}
                            </Text>

                            <Text className="text-gray-600 w-[45%]">
                                {item.type}
                            </Text>

                            <Text
                                className={`w-[25%] text-right font-medium ${item.status === "Improved"
                                    ? "text-green-700"
                                    : item.status === "Positive"
                                        ? "text-blue-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {item.status}
                            </Text>
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
