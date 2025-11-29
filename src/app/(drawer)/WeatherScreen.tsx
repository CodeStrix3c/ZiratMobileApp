import AveragesCard from "@/src/components/AveragesCard";
import HumidityCard from "@/src/components/HumidityCard";
import MoonCard from "@/src/components/MoonCard";
import PrecipitationCard from "@/src/components/PrecipitationCard";
import PressureCard from "@/src/components/PressureCard";
import SearchBar from "@/src/components/shared/SearchBar";
import SunriseCard from "@/src/components/SunriseCard";
import VisibilityCard from "@/src/components/VisibilityCard";
import WindCard from "@/src/components/WindCard";


import {
    CloudLightning,
    CloudRain,
    Droplets,
    Sun,
    Wind
} from "lucide-react-native";
import { useCallback, useState } from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    RefreshControl,
    ScrollView,
    Text,
    View,
} from "react-native";
type Hourly = { time: string; temp: number; precipProb?: number; icon: string };

const { width } = Dimensions.get("window");

export default function WeatherScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const current = {
        location: "Srinagar",
        tempT: "Sunny",
        tempC: 22,
        feelsLikeC: 21,
        condition: "Partly Cloudy",
        humidity: 72,
        windKph: 12,
        windDir: "NE",
        windGustKph: 18,
        visibility: 9,
        pressure: 1012,
        uv: 6,
        aqi: 52,
        lastUpdated: "11:30 AM",
        sunrise: "06:42",
        sunset: "17:18",
        moonPhase: "Waxing Gibbous",
        avgTemp: 22,
    };
    const hourly: Hourly[] = Array.from({ length: 12 }).map((_, i) => ({
        time: `${(6 + i) % 24}:00`,
        temp: 18 + (i % 5),
        precipProb: Math.round(Math.abs(Math.sin(i / 2)) * 40),
        icon: i % 3 === 0 ? "sun" : i % 3 === 1 ? "rain" : "cloud",
    }));
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    }, []);
    const iconSwitch = (icon: string) => {
        switch (icon) {
            case "sun":
                return <Sun size={24} color="#c7611f" />;
            case "rain":
                return <CloudRain size={24} color="#c7611f" />;
            default:
                return <Wind size={24} color="#8888883b" />;
        }
    };
    return (
        <ScrollView
            className="flex-1 bg-white"
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View className="px-6 pt-6 pb-10">

                <SearchBar search={search} setSearch={setSearch} />

                <View className="flex-row justify-between items-center">
                    <View>
                        <Text className="text-black text-3xl font-bold">{current.location}</Text>
                        <Text className="text-black/70 mt-1 text-sm">
                            Updated: {current.lastUpdated}
                        </Text>
                    </View>
                </View>
                <View className="mt-6 rounded-3xl overflow-hidden shadow-lg">
                    <ImageBackground
                        source={require("@/assets/images/weatherBg.png")}
                        resizeMode="cover"
                        className="w-full rounded-3xl overflow-hidden"
                    >
                        <View className="p-6 bg-black/25 backdrop-blur-3xl rounded-3xl">
                            <View className="flex-row items-end justify-between">
                                <Text className="text-white text-7xl font-bold">
                                    {current.tempC}°
                                </Text>
                                <Sun size={70} color="yellow" />
                            </View>

                            <Text className="text-white/90 text-lg font-medium mt-1">
                                Feels like {current.feelsLikeC}° — {current.condition}
                            </Text>
                            <View className="w-full h-[1px] bg-white/30 my-5" />
                            <View className="flex-row justify-between">
                                <View className="items-center gap-1">
                                    <View className="w-14 h-14 rounded-full bg-white/30 items-center justify-center border border-white/40">
                                        <Droplets size={22} color="white" />
                                    </View>
                                    <Text className="text-white font-bold">{current.humidity}%</Text>
                                    <Text className="text-white/70 text-xs">Humidity</Text>
                                </View>

                                <View className="items-center gap-1">
                                    <View className="w-14 h-14 rounded-full bg-white/30 items-center justify-center border border-white/40">
                                        <Wind size={22} color="white" />
                                    </View>
                                    <Text className="text-white font-bold">{current.windKph} km/h</Text>
                                    <Text className="text-white/70 text-xs">{current.windDir}</Text>
                                </View>

                                <View className="items-center gap-1">
                                    <View className="w-14 h-14 rounded-full bg-white/30 items-center justify-center border border-white/40">
                                        <CloudLightning size={22} color="white" />
                                    </View>
                                    <Text className="text-white font-bold">Low</Text>
                                    <Text className="text-white/70 text-xs">Hail risk</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <Text className="text-black mt-6 mb-4 text-xl font-bold">Hourly Forecast</Text>

                <View className="mt-3">
                    <FlatList
                        data={hourly}
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                        renderItem={({ item }) => (
                            <View className="backdrop-blur-xl bg-white border  rounded-3xl p-4 w-28 items-center">
                                <Text className="text-black font-medium">{item.time}</Text>

                                <View className="mt-2">{iconSwitch(item.icon)}</View>

                                <Text className="text-black text-xl font-semibold mt-1">
                                    {item.temp}°
                                </Text>

                                <Text className="text-black/70 text-xs mt-1">
                                    {item.precipProb}%
                                </Text>
                            </View>
                        )}
                    />
                </View>
                <View className="h-10" />

                <WindCard speed={current.windKph} gust={current.windGustKph} dir={current.windDir} />
                <SunriseCard sunrise={current.sunrise} sunset={current.sunset} />
                <PrecipitationCard />

                <View className="flex-row justify-between">
                    <VisibilityCard visibility={current.visibility} />
                    <HumidityCard humidity={current.humidity} />
                </View>

                <MoonCard phase={current.moonPhase} />
                <View className="flex-row justify-between">
                    <AveragesCard />
                    <PressureCard pressure={current.pressure} />
                </View>
                <View className="h-20" />
                <Text className="text-black text-center text-sm mb-6">
                    Data provided by Zirat Weather Services.

                </Text>
            </View>
        </ScrollView>
    );
}
