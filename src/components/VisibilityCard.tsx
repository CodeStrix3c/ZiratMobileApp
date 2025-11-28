import { Text, View } from "react-native";

export default function VisibilityCard({ visibility }) {
    return (
        <View className="bg-white rounded-2xl p-4 w-[48%] mb-4 border border-white shadow-sm">
            <Text className="text-black text-md font-semibold mb-2">Visibility</Text>
            <Text className="text-black text-2xl font-semibold">{visibility} km</Text>
            <Text className="text-black/60 mt-2 text-xs">Clear conditions</Text>
        </View>
    );
}
