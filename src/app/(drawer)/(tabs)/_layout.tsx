import { colors } from "@/src/constants/colors";
import { Tabs } from "expo-router";
import { Home, ShoppingBag, Trees, TrendingUpIcon, User } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 50 + insets.bottom,
          height: insets.bottom,
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: colors.blackHover,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="Crops"
        options={{
          title: "Crops",
          tabBarIcon: ({ color, size }) => <Trees color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="Product"
        options={{
          title: "Products",
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Market"
        options={{
          title: "Market",
          tabBarIcon: ({ color, size }) => (
            <TrendingUpIcon color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
