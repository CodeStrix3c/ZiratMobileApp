import { Text, View } from "react-native";

export default function PressureCard({ pressure }) {
    return (
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4 border border-white shadow-sm">
            <Text className="text-black text-md font-semibold mb-2">Pressure</Text>
            <Text className="text-black text-2xl font-semibold">{pressure} hPa</Text>
            <Text className="text-black mt-2 text-xs">Normal range</Text>
        </View>
    );
}
