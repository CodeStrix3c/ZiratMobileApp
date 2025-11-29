import CustomBarChart from "@/src/components/charts/CustomBarChart";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

const EnhancedCard = ({ title, value, icon, gradient }: any) => (
    <View
        className="w-full rounded-2xl p-5 mb-5 shadow-lg"
        style={{
            backgroundColor: "ffffff",
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
        }}
    >
        <View className="flex-row items-center bg-white p-3">
            <View
                className="w-14 h-14 rounded-2xl justify-center items-center mr-4"
                style={{
                    backgroundColor: gradient || "#4CAF50",
                }}
            >
                {icon}
            </View>

            <View className="flex-1">
                <Text className="text-gray-600 text-sm">{title}</Text>
                <Text className="text-2xl font-extrabold text-gray-900">{value}</Text>
            </View>
        </View>
    </View>
);

export default function SoilWaterNutrientScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [fertigationInput, setFertigationInput] = useState("");

    return (
        <ScrollView className="flex-1 bg-white p-4">


            <Text className="text-3xl font-extrabold text-black mb-2">
                Soil, Water & Nutrient
            </Text>
            <Text className="text-gray-500 mb-6 leading-5">
                Real-time insight into soil health, nutrient flow, fertigation adherence,
                water use efficiency and overall orchard nourishment.
            </Text>



            <EnhancedCard
                title="Soil pH & EC Status"
                value="pH 6.5 • EC 0.8 dS/m"
                gradient="#c7611f"
                icon={<Ionicons name="leaf-outline" size={30} color="white" />}
            />

            <EnhancedCard
                title="Organic Matter %"
                value="2.3%"
                gradient="#c7611f"
                icon={<MaterialCommunityIcons name="compost" size={34} color="white" />}
            />

            <EnhancedCard
                title="N-P-K Levels"
                value="N: Low • P: Medium • K: High"
                gradient="#c7611f"
                icon={<Entypo name="bar-graph" size={28} color="white" />}
            />

            <Pressable onPress={() => setModalVisible(true)}>
                <EnhancedCard
                    title="Fertigation Compliance (%)"
                    value="Tap to Update"
                    gradient="#c7611f"
                    icon={<Ionicons name="water" size={30} color="white" />}
                />
            </Pressable>

            <EnhancedCard
                title="Irrigation Volume Applied"
                value="4,200 L/ha"
                gradient="#c7611f"
                icon={<MaterialCommunityIcons name="watering-can" size={34} color="white" />}
            />

            <EnhancedCard
                title="Water Use Efficiency"
                value="78%"
                gradient="#c7611f"
                icon={<Ionicons name="analytics-outline" size={32} color="white" />}
            />

            <EnhancedCard
                title="Deficiency Symptoms"
                value="5 issues detected"
                gradient="#c7611f"
                icon={<Ionicons name="warning" size={32} color="white" />}
            />
            <Text className="text-xl font-bold mt-8 mb-3 text-gray-800">
                Soil Health Trend
            </Text>

            <View
                className="rounded-3xl p-6 mb-8"
                style={{
                    backgroundColor: "#8888883b",
                    borderWidth: 1,
                    borderColor: "#8888883b",
                }}
            >
                <Text className="text-center text-black font-bold text-lg">

                    <CustomBarChart />
                </Text>
                <Text className="text-center text-xs text-black mt-1">
                    (pH, EC & NPK line chart)
                </Text>
            </View>
            <Text className="text-xl font-bold mb-3 text-gray-800">
                Nutrient Analysis
            </Text>

            <View className="bg-white rounded-2xl p-5 shadow mb-4">
                <Text className="font-bold text-lg text-black">Nitrogen (N)</Text>
                <Text className="text-neutral/100 mt-1 mb-1">
                    Low — may cause weak vegetative growth.
                </Text>
                <Text className="text- text-xs font-semibold">
                    Recommendation: Compost, Urea, Green Manure
                </Text>
            </View>

            <View className="bg-white rounded-2xl p-5 shadow mb-4">
                <Text className="font-bold text-lg text-black">Phosphorus (P)</Text>
                <Text className="text-neutral/100 mt-1 mb-1">
                    Medium — plants are absorbing adequately.
                </Text>
                <Text className="text-error text-xs font-semibold">
                    Recommendation: DAP, Rock Phosphate
                </Text>
            </View>

            <View className="bg-white rounded-2xl p-5 shadow mb-4">
                <Text className="font-bold text-lg text-black">Potassium (K)</Text>
                <Text className="text-neutral/100 mt-1 mb-1">
                    High — good for fruit quality and shelf life.
                </Text>
                <Text className="text-secondary text-xs font-semibold">
                    Recommendation: Reduce potassium application
                </Text>
            </View>

            <Text className="text-xl font-bold mt-8 mb-3 text-black">
                Irrigation Insights
            </Text>

            <View className="bg-white rounded-2xl p-5 shadow mb-4">
                <Text className="font-semibold text-lg text-black mb-1">
                    Water Distribution Balance
                </Text>
                <Text className="text-neutral/100">
                    Blocks A & C require slightly higher flow.
                    Improve emitter maintenance for uniformity.
                </Text>
            </View>

            <View className="bg-white rounded-2xl p-5 shadow mb-4">
                <Text className="font-semibold text-lg text-black mb-1">
                    Soil Moisture Variability
                </Text>
                <Text className="text-neutral/100">
                    Moisture levels are moderate but decreasing.
                    Increase irrigation frequency by 10% next week.
                </Text>
            </View>

            <Text className="text-xl font-bold mt-8 mb-3 text-black">
                Deficiency Photo Records
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[1, 2, 3, 4].map((i) => (
                    <Image
                        key={i}
                        source={{ uri: "https://images.pexels.com/photos/33303307/pexels-photo-33303307.jpeg" }}
                        className="w-32 h-32 rounded-xl bg-gray-300 mr-3"
                    />
                ))}
            </ScrollView>

            <Text className="text-xl font-bold mt-8 mb-2 text-gray-800">
                Improvement Suggestions
            </Text>

            <View className="bg-white rounded-2xl p-5 shadow mb-10">
                <Text className="text-black mb-2">• Increase organic matter using compost or biomass.</Text>
                <Text className="text-black mb-2">• Improve fertigation timing for better absorption.</Text>
                <Text className="text-black mb-2">• Monitor EC weekly to avoid salt accumulation.</Text>
                <Text className="text-black mb-2">• Apply balanced NPK based on season demand.</Text>
                <Text className="text-black">• Maintain pH 6.0–7.0 for optimal nutrient uptake.</Text>
            </View>


            <Modal visible={modalVisible} transparent>
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white w-80 p-6 rounded-2xl shadow-xl">
                        <Text className="text-lg font-bold text-center mb-4">
                            Update Fertigation Compliance (%)
                        </Text>

                        <TextInput
                            className="border p-3 rounded-xl mb-6"
                            placeholder="Enter %"
                            keyboardType="numeric"
                            value={fertigationInput}
                            onChangeText={setFertigationInput}
                        />

                        <View className="flex-row justify-between">
                            <Pressable
                                className="bg-gray-300 px-4 py-2 rounded-xl"
                                onPress={() => setModalVisible(false)}
                            >
                                <Text>Cancel</Text>
                            </Pressable>

                            <Pressable
                                className="bg-white px-4 py-2 rounded-xl"
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <Text className="text-black font-semibold">Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
}
