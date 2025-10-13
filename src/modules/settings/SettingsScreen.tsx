import { colors } from "@/src/constants/colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { Info, User } from "lucide-react-native";
import React from "react";
import {
  Alert,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const { signOut, user } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await signOut();
        },
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.white }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="px-4"
      >
        {/* Account Info */}
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
          <Text style={{ color: colors.gray }}>
            Username: {user?.name || "N/A"}
          </Text>
          <Text style={{ color: colors.gray }}>
            Email: {user ? `${user.name.toLowerCase()}@example.com` : "N/A"}
          </Text>
        </View>

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
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
