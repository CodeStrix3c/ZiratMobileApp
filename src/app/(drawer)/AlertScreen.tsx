import {
    Activity,
    AlertTriangle,
    BarChart2,
    Bell,
    Calendar,
    CheckCircle,
    ClipboardList,
    PieChart
} from "lucide-react-native";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const kpiCards = [
    { id: 1, title: "Total Alerts Triggered", value: "128", icon: Bell },
    { id: 2, title: "Alerts Acknowledged", value: "76%", icon: CheckCircle },
    { id: 3, title: "Tickets Resolved", value: "64%", icon: ClipboardList },
    { id: 4, title: "Pending Actions", value: "12", icon: AlertTriangle },
    { id: 5, title: "Services Booked", value: "09", icon: Calendar },
    { id: 6, title: "Avg Response Time", value: "2.1 hrs", icon: Activity },
];

const recentAlerts = [
    { id: "A-201", type: "Weather", status: "Resolved" },
    { id: "A-202", type: "Pest", status: "Acknowledged" },
    { id: "A-203", type: "Nutrient Deficiency", status: "Pending" },
    { id: "A-204", type: "Weather", status: "Pending" },
];

export default function AlertsTrackingScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                contentContainerStyle={{ paddingBottom: 50 }}
                className="px-4 py-6"
            >
                <Text className="text-3xl font-bold text-black mb-4">
                    Alerts & Notifications Tracking
                </Text>
                <View className="flex flex-wrap flex-row justify-between">
                    {kpiCards.map((item) => {
                        const Icon = item.icon;
                        return (
                            <View
                                key={item.id}
                                className="w-[48%] bg-white p-4 mt-3 rounded-2xl shadow-lg"
                            >
                                <View className="flex-row items-center">
                                    <Icon size={22} className="text-secondary" />
                                    <Text className="ml-2 text-black font-semibold flex-1">
                                        {item.title}
                                    </Text>
                                </View>
                                <Text className="text-3xl font-extrabold text-black mt-3">
                                    {item.value}
                                </Text>
                            </View>
                        );
                    })}
                </View>
                <View className="mt-6 bg-white p-5 rounded-2xl shadow-md">
                    <View className="flex-row items-center mb-3">
                        <BarChart2 size={24} className="text-secondary" />
                        <Text className="ml-2 text-lg font-bold text-secondary">
                            Alerts Trend (Last 7 Days)
                        </Text>
                    </View>
                    <View className="h-40 bg-gray-200 rounded-xl items-center justify-center">
                        <Text className="text-gray-600">Bar Chart Here</Text>
                    </View>
                </View>
                <View className="mt-6 bg-white p-5 rounded-2xl shadow-md">
                    <View className="flex-row items-center mb-3">
                        <PieChart size={24} className="text-primary" />
                        <Text className="ml-2 text-lg font-bold text-primary">
                            Alert Type Distribution
                        </Text>
                    </View>
                    <View className="h-40 bg-gray-200 rounded-xl items-center justify-center">
                        <Text className="text-gray-600">Pie Chart Here</Text>
                    </View>
                </View>
                <View className="mt-6 bg-white p-5 rounded-2xl shadow-md">
                    <Text className="text-lg font-bold text-black mb-4">
                        Recent Alerts
                    </Text>
                    {recentAlerts.map((alert) => (
                        <View
                            key={alert.id}
                            className="flex-row justify-between border-b border-gray-200 pb-3 mb-3"
                        >
                            <Text className="font-semibold text-gray-800">{alert.id}</Text>
                            <Text className="text-gray-600">{alert.type}</Text>
                            <Text
                                className={`${alert.status === "Resolved"
                                    ? "text-primary"
                                    : alert.status === "Acknowledged"
                                        ? "text-neutral"
                                        : "text-secondary"
                                    } font-medium`}
                            >
                                {alert.status}
                            </Text>
                        </View>
                    ))}
                </View>
                <View className="mt-6 bg-neutral/100 p-5 rounded-2xl shadow-md">
                    <Text className="text-xl font-bold text-black mb-2">
                        Action Required 🚜
                    </Text>
                    <Text className="text-black opacity-90">
                        You have pending tasks related to fertigation, spray & pruning.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
