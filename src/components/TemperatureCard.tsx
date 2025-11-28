import { Text, View } from "react-native";

export default function TemperatureCard({ temp, feels, icon }) {
    return (
        <View className="rounded-3xl overflow-hidden mb-6">
            <View className="p-6 bg-white backdrop-blur-2xl rounded-3xl flex-row items-end justify-between  border border-gray-200 shadow-sm">
                <View>
                    <Text className="text-secondary text-7xl font-bold">{temp}°</Text>
                    <Text className="text-black/80 mt-2">Feels like {feels}°</Text>
                </View>
                {icon}
            </View>
        </View>
    );
}
