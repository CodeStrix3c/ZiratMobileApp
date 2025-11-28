// import { router } from "expo-router";
// import { Drawer } from "expo-router/drawer";
// import { Bell, HomeIcon, Settings } from "lucide-react-native";
// import React from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// export default function DrawerLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer
//         screenOptions={{
//           drawerActiveTintColor: "#22c55e",
//         }}
//       >
//         <Drawer.Screen
//           name="(tabs)"
//           options={{
//             headerTitle: () => (
//               <View>
//                 <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                   Welcome Ziraat
//                 </Text>
//                 <Text style={{ fontSize: 12, color: "gray" }}>
//                   Pulwama
//                 </Text>
//               </View>
//             ),
//             drawerLabel: "Home",
//             drawerIcon: ({ color, size }) => (
//               <HomeIcon color={color} size={size} />
//             ),
//             headerRight: () => (
//               <TouchableOpacity
//                 style={{ marginRight: 15 }}
//                 onPress={() => router.push("/notifications")}
//               >
//                 <Bell color="#22c55e" size={24} />
//               </TouchableOpacity>
//             ),
//           }}
//         />

//         <Drawer.Screen
//           name="settings"
//           options={{
//             title: "Settings",
//             drawerLabel: "Settings",
//             drawerIcon: ({ color, size }) => (
//               <Settings color={color} size={size} />
//             ),
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }


import { CustomDrawer } from "@/src/navigation/CustomDrawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Bell, HomeIcon, Settings } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#22c55e",
        }}
      >
        {/* HOME (unchanged) */}
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Welcome Ziraat
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>Pulwama</Text>
              </View>
            ),
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => router.push("/notifications")}
              >
                <Bell color="#22c55e" size={24} />
              </TouchableOpacity>
            ),
          }}
        />

        {/* SETTINGS (unchanged) */}
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => (
              <Settings color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="ProfileScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="ProductsScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
        
        <Drawer.Screen
          name="SalesScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="CreditScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="PlatformScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="DeliveryScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="FinancialScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="OffersScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="Notification"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="ReportsScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
         <Drawer.Screen
          name="UserScreen"
          options={{ drawerItemStyle: { height: 0 } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
