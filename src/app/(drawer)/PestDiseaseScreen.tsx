import CustomBarChart from "@/src/components/charts/CustomBarChart";
import React, { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

const MetricCard = ({ title, value, footer }: any) => (
    <View className="w-full rounded-xl p-4 bg-white shadow mb-4">
        <Text className="text-gray-600 text-sm font-medium">{title}</Text>
        <Text className="text-2xl font-bold mt-1">{value}</Text>
        {footer && (
            <Text className="text-xs text-gray-500 mt-2">{footer}</Text>
        )}
    </View>
);

export default function PestDiseaseScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [sprayInput, setSprayInput] = useState("");

    return (
        <ScrollView className="flex-1 bg-white p-4">

            <Text className="text-3xl font-extrabold mb-3">Pest & Disease Management</Text>
            <Text className="text-black mb-4">
                Monitor, track, and manage orchard pest & disease activities with
                real-time insights, advisory schedule compliance, and expert reporting.
            </Text>


            <View className="flex flex-wrap flex-row justify-between">

                <View className="w-[48%]">
                    <MetricCard
                        title="Pest Incidence (per 100 trees)"
                        value="23"
                        footer="Admin fed"
                    />
                </View>

                <View className="w-[48%]">
                    <MetricCard
                        title="Disease Incidence Rate (%)"
                        value="12%"
                        footer="Admin / RimPro API"
                    />
                </View>

                <Pressable
                    onPress={() => setModalVisible(true)}
                    className="w-[48%]"
                >
                    <MetricCard
                        title="Spray Compliance (%)"
                        value="Tap to Update"
                        footer="User input required"
                    />
                </Pressable>

                <View className="w-[48%]">
                    <MetricCard
                        title="Pest/Disease Risk Level"
                        value="Medium"
                        footer="Based on last 7 days"
                    />
                </View>

                <View className="w-[48%]">
                    <MetricCard
                        title="Resistance Developed?"
                        value="Possible"
                        footer="Due to repeated pesticide usage"
                    />
                </View>

                <View className="w-[48%]">
                    <MetricCard
                        title="Photo Diagnoses Submitted"
                        value="18"
                    />
                </View>

                <View className="w-[48%]">
                    <MetricCard
                        title="Avg Response Time"
                        value="4.5 hrs"
                        footer="Expert Team"
                    />
                </View>

            </View>



            <Text className="text-xl font-bold mt-6 mb-2">Pest & Disease Trend (Last 30 Days)</Text>
            <View className="bg-white rounded-xl p-5 shadow mb-6">
                <Text className="text-center text-gray-500">Graph Placeholder</Text>
                <CustomBarChart />
                <Text className="text-center text-xs text-gray-400 mt-1">
                    (Integrate chart library / API later)
                </Text>
            </View>


            <Text className="text-xl font-bold mb-2">High-Risk Pests Identified</Text>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-semibold">1. Codling Moth</Text>
                <Text className="text-neutral/100 mt-1">
                    High humidity and temperature favour rapid development. Trap counts indicate elevated activity.
                </Text>
                <Text className="text-xs text-primary mt-2">Recommended Spray: Chlorantraniliprole</Text>
            </View>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-semibold">2. Aphid Colonies</Text>
                <Text className="text-neutral/100 mt-1">
                    Fresh leaf curling observed. Infestation spreading in dense canopy areas.
                </Text>
                <Text className="text-xs text-error mt-2">Recommended Spray: Neem Oil / Imidacloprid</Text>
            </View>


            <Text className="text-xl font-bold mb-2 mt-4">Disease Observations</Text>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-semibold">Apple Scab</Text>
                <Text className="text-neutral/100 mt-1">
                    Early lesions detected on lower canopy leaves. Moisture conditions ideal for spread.
                </Text>
            </View>

            <View className="bg-white rounded-xl p-4 shadow mb-4">
                <Text className="text-lg font-semibold">Powdery Mildew</Text>
                <Text className="text-neutral/100 mt-1">
                    White patches observed on tender shoots. Risk moderate but rising.
                </Text>
            </View>


            <Text className="text-xl font-bold mt-5 mb-2">Spray Schedule & History</Text>
            <View className="bg-white p-4 rounded-xl shadow mb-4">
                <View className="mb-3">
                    <Text className="font-semibold">Last Applied Spray</Text>
                    <Text className="text-neutral/100">Chlorantraniliprole — 3 days ago</Text>
                </View>

                <View className="border-t my-2"></View>

                <View className="mb-3">
                    <Text className="font-semibold">Next Scheduled Spray</Text>
                    <Text className="text-neutral/100">Neem Oil — In 5 days (Advisory)</Text>
                </View>

                <View className="border-t my-2"></View>

                <View>
                    <Text className="font-semibold">Missed Sprays</Text>
                    <Text className="text-error">
                        2 missed sprays this month
                    </Text>
                </View>
            </View>
            <Text className="text-xl font-bold mt-5 mb-2">Photo Diagnoses</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[1, 2, 3, 4].map((i) => (
                    <Image
                        key={i}
                        source={{ uri: "https://images.pexels.com/photos/1119582/pexels-photo-1119582.jpeg" }}
                        className="w-32 h-32 bg-gray-200 rounded-xl mr-3"
                    />
                ))}
            </ScrollView>


            <Text className="text-xl font-bold mt-6 mb-2">Prevention & Recommendations</Text>

            <View className="bg-white rounded-xl p-4 shadow mb-6">
                <Text className="text-gray-700 mb-1">• Maintain proper pruning to reduce canopy density.</Text>
                <Text className="text-gray-700 mb-1">• Avoid repeated use of same pesticides to prevent resistance.</Text>
                <Text className="text-gray-700 mb-1">• Improve irrigation spacing to prevent fungal infections.</Text>
                <Text className="text-gray-700 mb-1">• Monitor humidity closely during rainy periods.</Text>
                <Text className="text-gray-700">• Follow advisory spray schedule strictly.</Text>
            </View>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white w-80 p-5 rounded-xl">

                        <Text className="text-lg font-bold text-center mb-3">
                            Update Spray Compliance
                        </Text>

                        <TextInput
                            className="border p-3 rounded-lg mb-4"
                            keyboardType="numeric"
                            placeholder="Enter %"
                            value={sprayInput}
                            onChangeText={setSprayInput}
                        />

                        <View className="flex-row justify-between">
                            <Pressable
                                className="bg-gray-300 px-4 py-2 rounded-lg"
                                onPress={() => setModalVisible(false)}
                            >
                                <Text>Cancel</Text>
                            </Pressable>

                            <Pressable
                                className="bg-primary px-4 py-2 rounded-lg"
                                onPress={() => {

                                    setModalVisible(false);
                                }}
                            >
                                <Text className="text-secondary font-semibold">Save</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
}
