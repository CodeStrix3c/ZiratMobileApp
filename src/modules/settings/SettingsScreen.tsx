import { colors } from "@/src/constants/colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { showSuccessToast } from "@/src/utils/toast";
import { router } from "expo-router";
import { Info, User } from "lucide-react-native";
import React from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const { logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
    router.replace("/auth");
    showSuccessToast("logged out");
  };

  const goToProfileCompletion = () => {
    router.push("/userProfileCompletion");
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.light }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="px-4"
      >
        <View
          className="p-4 mb-4 rounded-xl"
          style={{ backgroundColor: colors.blackHover }}
        >
          <View className="flex-row items-center mb-2">
            <User color={colors.secondary} size={24} className="mr-2" />
            <Text
              className="text-lg font-semibold"
              style={{ color: colors.black }}
            >
              Account Info
            </Text>
          </View>
          <Text style={{ color: colors.gray }}>Username: {"N/A"}</Text>
          <Text style={{ color: colors.gray }}>Email: {"N/A"}</Text>
        </View>

        {/* 🔵 COMPLETE PROFILE BUTTON */}
        <TouchableOpacity
          onPress={goToProfileCompletion}
          className="p-4 mb-4 rounded-xl"
          style={{
            backgroundColor: colors.secondaryHover,
          }}
        >
          <Text
            className="text-base font-semibold"
            style={{ color: colors.black }}
          >
            Complete Your Profile →
          </Text>
          <Text style={{ color: colors.gray, marginTop: 4 }}>
            Fill missing details like address, education, and profession.
          </Text>
        </TouchableOpacity>

        {/* Preferences */}
        <View
          className="p-4 mb-4 rounded-xl"
          style={{ backgroundColor: colors.blackHover }}
        >
          <View className="flex-row items-center justify-between mb-3">
            <Text
              className="text-base font-medium"
              style={{ color: colors.black }}
            >
              Enable Notifications
            </Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              thumbColor={notificationsEnabled ? colors.secondary : colors.gray}
              trackColor={{ true: colors.secondaryHover, false: colors.gray }}
            />
          </View>

          <View className="flex-row items-center justify-between">
            <Text
              className="text-base font-medium"
              style={{ color: colors.black }}
            >
              Dark Mode
            </Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              thumbColor={darkModeEnabled ? colors.secondary : colors.gray}
              trackColor={{ true: colors.secondaryHover, false: colors.gray }}
            />
          </View>
        </View>

        {/* App Info */}
        <View
          className="p-4 mb-4 rounded-xl"
          style={{ backgroundColor: colors.blackHover }}
        >
          <View className="flex-row items-center mb-2">
            <Info color={colors.secondary} size={24} className="mr-2" />
            <Text
              className="text-lg font-semibold"
              style={{ color: colors.black }}
            >
              App Info
            </Text>
          </View>
          <Text style={{ color: colors.gray }}>Version: 1.0.0</Text>
          <Text style={{ color: colors.gray }}>Build: 2025</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="p-4 rounded-xl items-center"
          style={{ backgroundColor: colors.secondary }}
          onPress={handleLogout}
        >
          <Text className="text-light font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
