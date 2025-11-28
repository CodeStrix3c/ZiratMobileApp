import { Moon } from "lucide-react-native";
import { Text, View } from "react-native";

export default function MoonCard({ phase }) {
    return (
        <View className="bg-white rounded-2xl p-4 mb-4 border border-white shadow-sm">
            <Text className="text-black text-md font-semibold mb-2">Moon</Text>

            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="text-black text-lg font-semibold">{phase}</Text>
                    <Text className="text-black/60 mt-2 text-md">Illumination: 25%</Text>
                </View>

                <Moon size={40} color="#c6711f" />


            </View>
        </View>
    );
}
