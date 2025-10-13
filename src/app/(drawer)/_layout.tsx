import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Bell, HomeIcon, Settings } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          // headerShown: false,
          drawerActiveTintColor: "#22c55e",
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => router.push("/Notifications")}
              >
                <Bell color="#22c55e" size={24} />
              </TouchableOpacity>
            ),
          }}
        />

        <Drawer.Screen
          name="Settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => (
              <Settings color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
