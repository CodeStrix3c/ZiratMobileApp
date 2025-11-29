// import { CloudLightning, Droplets, View, Wind } from "lucide-react-native";
// import { ImageBackground, Text } from "react-native";

// export default function WeatherCard() {

//     const current = {
//         location: "Srinagar",
//         tempC: 22,
//         feelsLikeC: 21,
//         condition: "Partly Cloudy",
//         humidity: 72,
//         windKph: 12,
//         windDir: "NE",
//         visibility: 9,
//         pressure: 1012,
//         uv: 6,
//         aqi: 52,
//         lastUpdated: "11:30 AM",
//         alerts: [
//             "Frost risk tonight (low)",
//             "Heatwave watch 3 days from now",
//             "Moderate pest risk detected"
//         ],
//         degreeDays: { gdd: 85, chillHours: 120 },
//         hailFrequency: "Rare",
//         soilTemp: 18,
//         soilMoisture: "Medium",
//     };


//     return (
//         <ImageBackground
//             source={require("@/assets/images/weatherBg.png")} // <--- your background image
//             resizeMode="cover"
//             className="flex-1 justify-center"
//         >
//             <View className="mx-4 mt-6 p-6 rounded-[32px]
//                 bg-white/15 backdrop-blur-3xl
//                 border border-white/40 shadow-2xl
//                 items-center"
//             >
//                 <Text className="text-white/90 text-lg font-semibold">
//                     Feels like {current.feelsLikeC}°
//                 </Text>
//                 <Text className="text-white text-2xl font-bold mt-1">
//                     {current.condition}
//                 </Text>

//                 <View className="w-full h-[1px] bg-white/20 my-4" />

//                 <View className="flex-row justify-between w-full mt-1">
//                     <View className="items-center gap-2">
//                         <View className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-2xl items-center justify-center border border-white/30">
//                             <Droplets size={22} color="white" />
//                         </View>
//                         <Text className="text-white font-semibold">{current.humidity}%</Text>
//                         <Text className="text-white/70 text-xs">Humidity</Text>
//                     </View>

//                     <View className="items-center gap-2">
//                         <View className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-2xl items-center justify-center border border-white/30">
//                             <Wind size={22} color="white" />
//                         </View>
//                         <Text className="text-white font-semibold">{current.windKph} km/h</Text>
//                         <Text className="text-white/70 text-xs">{current.windDir}</Text>
//                     </View>

//                     <View className="items-center gap-2">
//                         <View className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-2xl items-center justify-center border border-white/30">
//                             <CloudLightning size={22} color="white" />
//                         </View>
//                         <Text className="text-white font-semibold">Low</Text>
//                         <Text className="text-white/70 text-xs">Hail risk</Text>
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }
