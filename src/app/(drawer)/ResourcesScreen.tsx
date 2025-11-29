import {
    AlertTriangle,
    BarChart2,
    GaugeCircle,
    Leaf,
    PiggyBank,
    Shield,
    Tractor,
    Wallet
} from "lucide-react-native";
import React, { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function InputResourceUsageScreen() {
    const [fertilizer, setFertilizer] = useState("");
    const [laborHours, setLaborHours] = useState("");
    const [costInputs, setCostInputs] = useState("");

    const pesticideUsage = "620 ml/ha";
    const machineryRate = "72%";
    const pesticideCondition = "Slight Overuse";

    const screenWidth = Dimensions.get("window").width;

    const totalCost = costInputs ? parseInt(costInputs) : 0;
    const laborCost = laborHours ? parseInt(laborHours) * 85 : 0; // example calc
    const fertilizerCost = fertilizer ? parseInt(fertilizer) * 12 : 0;

    const overallInputCost = totalCost + laborCost + fertilizerCost;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4 py-6">


                <Text className="text-3xl font-extrabold text-black mb-1">
                    Input & Resource Usage
                </Text>
                <Text className="text-neutral/100 leading-5 mb-6">
                    Log field operations, monitor input performance, assess resource
                    efficiency & detect over-use or wastage instantly.
                </Text>

                <View className="bg-white p-5 rounded-3xl shadow-sm mb-7">
                    <Text className="text-xl font-bold text-black mb-4">
                        Enter Field Inputs
                    </Text>


                    <InputField
                        label="Fertilizer Consumption (kg/ha)"
                        placeholder="e.g. 120"
                        value={fertilizer}
                        onChangeText={setFertilizer}
                    />


                    <InputField
                        label="Labor Hours Logged (per operation)"
                        placeholder="e.g. 45"
                        value={laborHours}
                        onChangeText={setLaborHours}
                    />


                    <InputField
                        label="Cost of Inputs (₹/acre)"
                        placeholder="e.g. 3500"
                        value={costInputs}
                        onChangeText={setCostInputs}
                    />

                    <TouchableOpacity className="bg-secondary rounded-xl p-4 mt-3">
                        <Text className="text-center text-white text-lg font-semibold">
                            Calculate Efficiency
                        </Text>
                    </TouchableOpacity>
                </View>


                <View className="flex flex-row flex-wrap justify-between">

                    <MetricCard
                        title="Pesticide Usage"
                        value={pesticideUsage}
                        icon={<Shield size={28} color="#c7611f" />}
                    />

                    <MetricCard
                        title="Usage Condition"
                        value={pesticideCondition}
                        icon={<AlertTriangle size={28} color="#c7611f" />}
                    />

                    <MetricCard
                        title="Machinery Utilization"
                        value={machineryRate}
                        icon={<Tractor size={28} color="#c7611f" />}
                    />

                    <MetricCard
                        title="Total Input Cost"
                        value={overallInputCost ? `₹ ${overallInputCost}` : "₹ -"}
                        icon={<Wallet size={28} color="#c7611f" />}
                    />
                </View>


                <Text className="text-xl font-bold text-black mt-8 mb-3">
                    Resource Summary
                </Text>

                <View className="bg-white p-5 rounded-3xl shadow mb-4">
                    <SummaryRow label="Fertilizer Cost" value={`₹ ${fertilizerCost}`} />
                    <SummaryRow label="Labor Cost Estimate" value={`₹ ${laborCost}`} />
                    <SummaryRow label="Material Cost" value={`₹ ${totalCost}`} />
                    <SummaryRow label="Overall Expenditure" value={`₹ ${overallInputCost}`} bold />
                </View>

                <Text className="text-xl font-bold mt-6 mb-2">Input Efficiency Overview</Text>
                <View className="bg-white p-5 rounded-3xl shadow-md mb-6">
                    <View className="flex-row items-center mb-3">
                        <BarChart2 size={26} color="#c7611f" />
                        <Text className="ml-2 text-lg font-bold text-black">
                            Efficiency Score
                        </Text>
                    </View>

                    <View className="bg-gray-100 rounded-xl p-4 mt-2">
                        <Text className="text-gray-700 font-medium">
                            Based on current inputs:
                        </Text>

                        <EfficiencyTag label="Fertilizer Use" score={fertilizer} />
                        <EfficiencyTag label="Labor Productivity" score={laborHours} />
                        <EfficiencyTag label="Cost Efficiency" score={totalCost} />
                    </View>
                </View>


                <Text className="text-xl font-bold mt-8 mb-2">Performance Insights</Text>

                <View className="bg-white p-5 rounded-3xl shadow mb-4">
                    <InsightItem
                        icon={Leaf}
                        text="Fertilizer usage slightly below ideal; consider adjusting dose based on crop cycle."
                    />
                    <InsightItem
                        icon={GaugeCircle}
                        text="Machinery is underutilized; field operations can be optimized."
                    />
                    <InsightItem
                        icon={PiggyBank}
                        text="Input costs are high—opportunity for bulk purchase discounts."
                    />
                </View>


                <Text className="text-xl font-bold mt-8 mb-2 text-black">
                    Recommendations
                </Text>

                <View className="bg-white rounded-3xl p-5 shadow mb-20">
                    <Text className="text-neutral/100 mb-2">
                        • Optimize fertilizer timing and split application for better absorption.
                    </Text>
                    <Text className="text-neutral/100 mb-2">
                        • Train labor to improve operational efficiency.
                    </Text>
                    <Text className="text-neutral/100 mb-2">
                        • Rotate pesticide groups to avoid resistance buildup.
                    </Text>
                    <Text className="text-neutral/100 mb-2">
                        • Maintain a logbook of machine usage and downtime.
                    </Text>
                    <Text className="text-neutral/100">
                        • Run monthly cost audits to reduce unnecessary inputs.
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const InputField = ({ label, ...props }) => (
    <View className="mb-4">
        <Text className="text-black font-medium">{label}</Text>
        <TextInput
            {...props}
            className="bg-gray-100 mt-2 p-3 rounded-xl border border-gray-300 text-black"
        />
    </View>
);

const MetricCard = ({ title, value, icon }) => (
    <View
        className="w-[46%] mt-3 p-4 rounded-2xl bg-white shadow"
        style={{
            shadowColor: "#000",
            shadowOpacity: 0.07,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 5 },
            elevation: 3
        }}
    >
        <View className="flex-row items-center">
            {icon}
            <Text className="ml-2 text-sm font-semibold text-gray-800">{title}</Text>
        </View>

        <Text className="text-2xl font-extrabold text-black mt-3">{value}</Text>
    </View>
);

const SummaryRow = ({ label, value, bold }) => (
    <View className="flex-row justify-between py-2">
        <Text className={`text-gray-700 ${bold ? "font-bold text-lg" : "font-medium"}`}>
            {label}
        </Text>
        <Text className={`text-gray-900 ${bold ? "font-bold text-lg" : ""}`}>{value}</Text>
    </View>
);

const EfficiencyTag = ({ label, score }) => (
    <View className="bg-white rounded-xl p-3 mt-3 border border-gray-200">
        <Text className="text-gray-700 font-semibold">{label}</Text>
        <Text className="text-black font-bold text-xl mt-1">{score || "0"}</Text>
    </View>
);

const InsightItem = ({ icon: Icon, text }) => (
    <View className="flex-row items-start mb-4">
        <Icon size={22} color="#1E3A8A" />
        <Text className="ml-2 flex-1 text-gray-700">{text}</Text>
    </View>
);