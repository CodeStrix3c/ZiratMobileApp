// components/notifications/NotificationSwipeActions.jsx
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function NotificationSwipeActions({
  item,
  markRead,
  removeItem,
}) {
  return (
    <View className="flex-row items-center">
      {!item.read && (
        <Pressable
          onPress={() => markRead(item.id)}
          className="bg-green-600 px-4 justify-center"
        >
          <Ionicons name="checkmark-done-outline" size={22} color="#fff" />
        </Pressable>
      )}

      <Pressable
        onPress={() => removeItem(item.id)}
        className="bg-red-600 px-4 justify-center"
      >
        <Ionicons name="trash-outline" size={22} color="#fff" />
      </Pressable>
    </View>
  );
}
