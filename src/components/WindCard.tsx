import { Wind } from "lucide-react-native";
import { Animated, Text, View } from "react-native";

export default function WindCard({ speed, gust, dir }) {
    const degMap: Record<string, number> = {
        N: 0, NE: 45, E: 90, SE: 135,
        S: 180, SW: 225, W: 270, NW: 315
    };

    const deg = degMap[dir] ?? 0;

    return (
        <View className="bg-white rounded-2xl p-5 mb-4 border border-gray-200 shadow-sm">


            <Text className="text-black text-base font-semibold mb-3">Wind</Text>

            <View className="flex-row justify-between items-center">

                <View>
                    <Text className="text-black text-3xl font-bold">{speed} kph</Text>

                    <Text className="text-black/60 mt-1 text-sm">
                        Gusts: {gust} kph
                    </Text>

                    <Text className="text-black/60 mt-1 text-sm">
                        Direction: {dir} ({deg}°)
                    </Text>
                </View>

                <View className="items-center justify-center">


                    <View className="w-28 h-28 rounded-full border-2 border-gray-300 items-center justify-center relative">

                        <Text className="absolute top-1 text-[10px] text-black/60">N</Text>
                        <Text className="absolute bottom-1 text-[10px] text-black/60">S</Text>
                        <Text className="absolute left-1 text-[10px] text-black/60">W</Text>
                        <Text className="absolute right-1 text-[10px] text-black/60">E</Text>


                        <Animated.View style={{ transform: [{ rotate: `${deg}deg` }] }}>
                            <Wind size={42} color="black" />
                        </Animated.View>
                    </View>


                    <Text className="text-black/70 text-xs mt-2">
                        {speed} kph • {dir}
                    </Text>
                </View>
            </View>
        </View>
    );
}
