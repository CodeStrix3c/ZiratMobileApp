import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
    FadeInLeft,
    FadeInUp,
    Layout,
} from "react-native-reanimated";


const team = [
  {
    name: "Mehmet Can",
    role: "Driver",
    status: "Active",
    vehicle: {
      type: "Mini Truck",
      model: "Tata Ace",
      regNo: "MH 12 AB 4455",
    },
    manpower: 1,
  },
  {
    name: "Sevun",
    role: "Delivery Helper",
    status: "Active",
    vehicle: null,
    manpower: 1,
  },
  {
    name: "Ali Khan",
    role: "Fleet Manager",
    status: "Active",
    vehicle: {
      type: "Pickup Van",
      model: "Mahindra Bolero",
      regNo: "DL 09 XY 2291",
    },
    manpower: 3,
  },
  {
    name: "Rohan Singh",
    role: "Driver",
    status: "Inactive",
    vehicle: {
      type: "E-Scooter",
      model: "Ola S1",
      regNo: "UP 14 MN 9031",
    },
    manpower: 0,
  },
];

// STATUS BADGE
function StatusBadge({ status }) {
  const isActive = status === "Active";

  return (
    <View className="flex-row items-center">
      <Ionicons
        name={isActive ? "checkmark-circle" : "close-circle"}
        size={16}
        color={isActive ? colors.primary : colors.error}
      />
      <Text
        className="ml-1 text-[11px] font-semibold"
        style={{
          color: isActive ? colors.primary : colors.error,
        }}
      >
        {status}
      </Text>
    </View>
  );
}

// ROLE ICON MAP
const roleIcons = {
  Driver: "car-outline",
  "Delivery Helper": "person-outline",
  "Fleet Manager": "briefcase-outline",
};

export default function TeamCard() {
  return (
    <Animated.View
      entering={FadeInUp.duration(600)}
      layout={Layout.springify()}
      className="rounded-2xl p-5 mb-6"
      style={{
        backgroundColor: colors.light,
        borderColor: colors.neutral,
        borderWidth: 1,
        shadowColor: colors.dark,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      }}
    >
      
      <View className="flex-row items-center justify-between">
        <View>
          <Text
            className="text-lg font-extrabold"
            style={{ color: colors.dark }}
          >
            Delivery Team Overview
          </Text>
          <Text
            className="text-[11px] mt-[2px]"
            style={{ color: colors.dark }}
          >
            Drivers • Helpers • Fleet & Assignments
          </Text>
        </View>

        <Ionicons name="people-circle" size={28} color={colors.primary} />
      </View>

      {/* TEAM LIST */}
      <View className="mt-5">
        {team.map((member, index) => {
          const isActive = member.status === "Active";

          return (
            <Animated.View
              key={index}
              entering={FadeInLeft.delay(120 * index)}
              className="p-4 rounded-xl mb-3"
              style={{
                backgroundColor: colors.darkHover,
                borderColor: colors.neutral,
                borderWidth: 1,
              }}
            >
              {/* ROW 1 — BASIC PROFILE */}
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View
                    className="w-11 h-11 rounded-full items-center justify-center mr-3"
                    style={{
                      backgroundColor: isActive
                        ? colors.primary + "20"
                        : colors.error + "20",
                    }}
                  >
                    <Ionicons
                      name={roleIcons[member.role] || "person-circle-outline"}
                      size={22}
                      color={isActive ? colors.primary : colors.error}
                    />
                  </View>

                  <View>
                    <Text
                      className="font-semibold text-sm"
                      style={{ color: colors.dark }}
                    >
                      {member.name}
                    </Text>
                    <Text
                      className="text-[11px] mt-[2px]"
                      style={{ color: colors.darkHover }}
                    >
                      {member.role}
                    </Text>
                  </View>
                </View>

                <StatusBadge status={member.status} />
              </View>

              {/* ROW 2 — ASSIGNMENTS (Vehicles + Manpower) */}
              <View className="mt-3 ml-1">
                {/* VEHICLE DETAILS */}
                {member.vehicle && (
                  <View className="flex-row items-center mt-1">
                    <Ionicons
                      name="car-sport-outline"
                      size={16}
                      color={colors.secondary}
                    />
                    <Text
                      className="ml-2 text-xs"
                      style={{ color: colors.dark }}
                    >
                      {member.vehicle.type} — {member.vehicle.model}
                    </Text>
                  </View>
                )}

                {member.vehicle && (
                  <Text
                    className="ml-8 text-[11px]"
                    style={{ color: colors.darkHover }}
                  >
                    Reg No: {member.vehicle.regNo}
                  </Text>
                )}

                {/* MANPOWER DETAILS */}
                <View className="flex-row items-center mt-2">
                  <Ionicons
                    name="people-outline"
                    size={16}
                    color={colors.primary}
                  />
                  <Text className="ml-2 text-xs" style={{ color: colors.dark }}>
                    Assigned Manpower: {member.manpower}
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        })}
      </View>

      {/* ADD MEMBER BTN */}
      <TouchableOpacity
        activeOpacity={0.85}
        className="mt-4 py-3 rounded-xl flex-row items-center justify-center"
        style={{
          backgroundColor: colors.secondary,
          shadowColor: colors.secondary,
          shadowOpacity: 0.2,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        <Ionicons name="person-add-outline" size={18} color="#fff" />
        <Text className="text-white font-semibold text-sm ml-2">
          Add Member
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
