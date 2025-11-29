import { Text, View } from "react-native";
import PrecipitationMap from "./PrecipitationMap";

export default function PrecipitationCard() {
    return (
        <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200 shadow-sm">
            <Text className="text-black text-md font-semibold mb-3">Precipitation</Text>
            <PrecipitationMap />
        </View>
    );
}
