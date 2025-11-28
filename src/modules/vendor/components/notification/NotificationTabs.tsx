// components/notifications/NotificationTabs.jsx
import { Pressable, ScrollView, Text, View } from "react-native";

export default function NotificationTabs({
  tabs,
  activeTab,
  setActiveTab,
  colors,
}) {
  return (
    <View className="mt-3 px-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {tabs.map((tab) => (
          <Pressable
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 7,
              marginRight: 10,
              borderRadius: 30,
              backgroundColor:
                activeTab === tab.key ? colors.secondaryLight : "#e5e7eb",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color:
                  activeTab === tab.key ? colors.secondary : "#4b5563",
              }}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
