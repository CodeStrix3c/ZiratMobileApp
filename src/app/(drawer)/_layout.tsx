import { Drawer } from "expo-router/drawer";
import { HomeIcon, Settings } from "lucide-react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ drawerActiveTintColor: "#22c55e" }}>

        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
          }}
        />



        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => <Settings color={color} size={size} />,
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
