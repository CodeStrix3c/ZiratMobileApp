import { Text, View } from "react-native";

export default function HumidityCard({ humidity }) {
    return (
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4 border border-white shadow-sm">
            <Text className="text-black text-md font-semibold mb-2">Humidity</Text>
            <Text className="text-black text-2xl font-semibold">{humidity}%</Text>
            <Text className="text-black/60 mt-2 text-xs">Dew point −6°</Text>
        </View>
    );
}
