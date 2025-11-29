import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";

const warehouses = [
  {
    title: "Main Warehouse — Store #993",
    place: "Brooklyn, NY — 8000 sq.ft.",
    details: [
      { icon: "home-outline", label: "Primary Storage" },
      { icon: "call-outline", label: "+90 555 345 7890" },
      { icon: "car-sport-outline", label: "4 Delivery Vehicles" },
    ],
  },
  {
    title: "Secondary Cold Storage",
    place: "Queens, NY — 3000 sq.ft.",
    details: [
      { icon: "snow-outline", label: "Refrigerated Facility" },
      { icon: "call-outline", label: "+90 555 657 1123" },
      { icon: "bus-outline", label: "2 Refrigerated Vans" },
    ],
  },
];

export default function WarehouseCard() {
  return (
    <Animated.View
      entering={FadeInUp.duration(650)}
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: colors.light,
        borderWidth: 1,
        borderColor: colors.neutral,
        shadowColor: colors.dark,
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
      }}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center pb-2">
        <View>
          <Text className="text-lg font-extrabold" style={{ color: colors.dark }}>
            Warehouses & Contacts
          </Text>
          <Text className="text-[11px] mt-[3px]" style={{ color: colors.dark }}>
            Total Facilities: {warehouses.length}
          </Text>
        </View>

        <Ionicons name="business-outline" size={26} color={colors.primary} />
      </View>

      {/* Warehouse Cards */}
      {warehouses.map((w, index) => (
        <Animated.View
          key={index}
          entering={FadeInLeft.delay(index * 120)}
          className="mt-5 p-4 rounded-xl"
          style={{
            backgroundColor: colors.darkHover,
            borderColor: colors.neutral,
            borderWidth: 1,
          }}
        >
          {/* Title */}
          <Text
            className="font-bold text-base"
            style={{ color: colors.dark }}
          >
            {w.title}
          </Text>

          {/* Place */}
          <Text
            className="text-sm mt-[4px]"
            style={{ color: colors.dark }}
          >
            {w.place}
          </Text>

          {/* Details */}
          <View className="mt-3">
            {w.details.map((item, i) => (
              <View key={i} className="flex-row items-center mt-2">
                <Ionicons name={item.icon} size={18} color={colors.secondary} />
                <Text className="ml-3 text-sm" style={{ color: colors.dark }}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
        </Animated.View>
      ))}

      {/* Add Warehouse BTN */}
      <TouchableOpacity
        activeOpacity={0.85}
        className="mt-5 py-3 rounded-xl flex-row items-center justify-center"
        style={{
          backgroundColor: colors.secondary,
          shadowColor: colors.secondary,
          shadowOpacity: 0.15,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 3 },
        }}
      >
        <Ionicons name="add-circle-outline" size={18} color="#fff" />
        <Text className="text-white font-semibold text-sm ml-2">
          Add Warehouse
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
