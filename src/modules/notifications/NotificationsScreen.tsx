import { colors } from "@/src/constants/colors";
import { useRouter } from "expo-router";
import { ArrowLeft, Bell, Droplet, Leaf } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen() {
  const router = useRouter();

  // Sample notifications
  const notifications = [
    {
      id: 1,
      icon: <Leaf color={colors.secondary} size={28} />,
      message: "Apple trees need watering today.",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <Droplet color={colors.secondary} size={28} />,
      message: "Irrigation system completed cycle.",
      time: "5 hours ago",
    },
    {
      id: 3,
      icon: <Bell color={colors.secondary} size={28} />,
      message: "Harvest is ready for 12 trees.",
      time: "1 day ago",
    },
  ];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.white }}>
      {/* Header */}
      <View
        className="flex-row items-center py-5 px-4 border-b"
        style={{ borderBottomColor: colors.gray }}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ArrowLeft color={colors.black} size={28} />
        </TouchableOpacity>

        <Text className="text-2xl font-bold" style={{ color: colors.black }}>
          Notifications
        </Text>
      </View>

      {/* Notifications List */}
      <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 20 }}>
        {notifications.length === 0 ? (
          <View className="flex-1 justify-center items-center mt-20">
            <Bell color={colors.gray} size={48} />
            <Text
              className="mt-4 text-lg font-medium"
              style={{ color: colors.gray }}
            >
              No new notifications
            </Text>
          </View>
        ) : (
          notifications.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center p-4 mb-3 rounded-xl"
              style={{ backgroundColor: colors.blackHover }}
            >
              <View className="mr-4">{item.icon}</View>
              <View className="flex-1">
                <Text
                  className="text-base font-medium"
                  style={{ color: colors.black }}
                >
                  {item.message}
                </Text>
                <Text className="text-sm mt-1" style={{ color: colors.gray }}>
                  {item.time}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
