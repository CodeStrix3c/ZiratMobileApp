import CustomBarChart from "@/src/components/charts/CustomBarChart";
import {
    Activity,
    BookOpen,
    Lightbulb,
    MessageCircle,
    Percent,
    PieChart,
    Sparkles,
    ThumbsUp,
    TrendingUp,
    Users
} from "lucide-react-native";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const kpis = [
    {
        id: 42,
        title: "Articles Read",
        value: "34",
        subtitle: "Knowledge Hub",
        icon: BookOpen,
        color: "#c7611f",
    },
    {
        id: 43,
        title: "Seasonal Compliance",
        value: "82%",
        subtitle: "Advisory Followed",
        icon: Percent,
        color: "#c7611f",
    },
    {
        id: 44,
        title: "Community Participation",
        value: "19",
        subtitle: "Posts & Questions",
        icon: Users,
        color: "#c7611f",
    },
    {
        id: 45,
        title: "Expert Consultations",
        value: "05",
        subtitle: "This Season",
        icon: MessageCircle,
        color: "#c7611f",
    },
    {
        id: 46,
        title: "Knowledge Shared",
        value: "17",
        subtitle: "Contributions",
        icon: Lightbulb,
        color: "#c7611f",
    },
    {
        id: 47,
        title: "Complaints Resolved",
        value: "91%",
        subtitle: "Support Effectiveness",
        icon: ThumbsUp,
        color: "#c7611f",
    },
];


const recentActivities = [
    { id: "P-101", type: "Forum Question", status: "Approved" },
    { id: "C-310", type: "Complaint", status: "Resolved" },
    { id: "A-110", type: "Article Read", status: "Completed" },
    { id: "S-220", type: "Seasonal Advisory", status: "Followed" },
];

export default function KnowledgeEngagementScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-4 py-6" contentContainerStyle={{ paddingBottom: 90 }}>


                <Text className="text-3xl font-extrabold text-black mb-1">
                    Knowledge & Advisory
                </Text>
                <Text className="text-black leading-5 mb-6">
                    Track how actively you're engaging with knowledge, advisory updates,
                    community forums, and expert support.
                </Text>


                <View className="flex flex-row flex-wrap justify-between">
                    {kpis.map((item) => {
                        const Icon = item.icon;
                        return (
                            <View
                                key={item.id}
                                className="w-[48%] bg-white p-5 mt-4 rounded-3xl shadow-md"
                                style={{
                                    shadowColor: "#000",
                                    shadowOpacity: 0.07,
                                    shadowRadius: 10,
                                    shadowOffset: { width: 0, height: 4 },
                                }}
                            >
                                <View className="flex-row items-center">
                                    <View
                                        className="w-12 h-12 rounded-xl justify-center items-center"
                                        style={{ backgroundColor: item.color + "22" }}
                                    >
                                        <Icon size={24} color={item.color} />
                                    </View>

                                    <Text className="ml-3 text-black font-semibold flex-1">
                                        {item.title}
                                    </Text>
                                </View>

                                <Text className="text-3xl font-extrabold text-black mt-3">
                                    {item.value}
                                </Text>
                                <Text className="text-sm text-black mt-1">
                                    {item.subtitle}
                                </Text>
                            </View>
                        );
                    })}
                </View>


                <View className="mt-8 bg-white rounded-3xl p-5 shadow-md">
                    <View className="flex-row items-center mb-3">
                        <TrendingUp size={24} color="#c7611f" />
                        <Text className="ml-2 font-bold text-black text-lg">
                            Overall Engagement Score
                        </Text>
                    </View>

                    <Text className="text-4xl font-extrabold text-black text-center mt-2">
                        87 / 100
                    </Text>

                    <Text className="text-black text-center mt-1">
                        Excellent—your engagement is higher than 92% users.
                    </Text>
                </View>

                <View className="mt-7 bg-white rounded-3xl p-5 shadow-md">
                    <View className="flex-row items-center mb-3">
                        <PieChart size={24} color="#c7611f" />
                        <Text className="ml-2 font-bold text-black text-lg">
                            Engagement Distribution
                        </Text>
                    </View>

                    <View className="h-44 bg-gray-200 rounded-2xl items-center justify-center">
                        <Text className="text-black">
                            <CustomBarChart />
                        </Text>
                    </View>

                    <View className="mt-3">
                        <ScoreRow label="Articles" value="41%" />
                        <ScoreRow label="Community Posts" value="23%" />
                        <ScoreRow label="Advisory Followed" value="36%" />
                    </View>
                </View>


                <View className="mt-7 bg-white rounded-3xl p-5 shadow-md">
                    <View className="flex-row items-center mb-3">
                        <Activity size={24} color="#c7611f" />
                        <Text className="ml-2 font-bold text-black text-lg">
                            Advisory Adoption Trend
                        </Text>
                    </View>

                    <View className="h-44 bg-gray-200 rounded-2xl items-center justify-center">
                        <Text className="text-neutral-600">Line Chart Placeholder</Text>


                        <CustomBarChart />
                    </View>

                    <Text className="text-black mt-3">
                        You followed 82% of advisories this season—higher consistency compared to past months.
                    </Text>
                </View>

                <Text className="text-xl font-bold text-black mt-8 mb-3">
                    Participation Heat
                </Text>

                <View className="flex-row flex-wrap gap-2">
                    <Tag label="Active Reader" color="#3B82F6" />
                    <Tag label="Top Contributor" color="#F97316" />
                    <Tag label="Forum Helper" color="#10B981" />
                    <Tag label="Seasonal Follower" color="#8B5CF6" />
                </View>
                <View className="mt-8 bg-white p-5 rounded-3xl shadow-md">
                    <Text className="font-bold text-black text-lg mb-4">
                        Recent Activities
                    </Text>

                    {recentActivities.map((item) => (
                        <View
                            key={item.id}
                            className="flex-row justify-between items-center border-b border-white pb-3 mb-3"
                        >
                            <Text className="font-semibold text-neutral/100 w-[28%]">{item.id}</Text>
                            <Text className="text-neutral/100 w-[45%]">{item.type}</Text>
                            <Text
                                className={`w-[27%] text-right font-medium ${item.status === "Resolved"
                                    ? "text-primary"
                                    : item.status === "Approved"
                                        ? "text-neutral"
                                        : "text-secondary"
                                    }`}
                            >
                                {item.status}
                            </Text>
                        </View>
                    ))}
                </View>
                <View className="mt-10 bg-neutral/100 p-6 rounded-3xl shadow-lg">
                    <Sparkles size={28} color="#c7611f" />
                    <Text className="text-xl font-extrabold text-black mt-2">
                        Keep Growing Your Knowledge 🌱
                    </Text>
                    <Text className="text-black opacity-90 mt-1">
                        Read more articles, engage in community, and follow seasonal advisories
                        to boost crop productivity & decision-making accuracy.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const ScoreRow = ({ label, value }) => (
    <View className="flex-row justify-between mt-2">
        <Text className="text-black font-medium">{label}</Text>
        <Text className="text-black font-semibold">{value}</Text>
    </View>
);

const Tag = ({ label, color }) => (
    <View
        style={{ backgroundColor: color + "22", borderColor: color }}
        className="px-4 py-2 rounded-xl border"
    >
        <Text style={{ color }} className="font-semibold text-sm">
            {label}
        </Text>
    </View>
);
