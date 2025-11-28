// components/notifications/NotificationSection.jsx
import { Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";

import NotificationItem from "./NotificationItem";
import NotificationSwipeActions from "./NotificationSwipeAction";


export default function NotificationSection({
  title,
  items,
  colors,
  markRead,
  removeItem,
}) {
  if (!items.length) return null;

  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-bold mb-2">{title}</Text>

      {items.map((n, i) => (
        <Animated.View key={n.id} entering={FadeInDown.delay(i * 100)}>
          <Swipeable
            renderRightActions={() => (
              <NotificationSwipeActions
                item={n}
                markRead={markRead}
                removeItem={removeItem}
              />
            )}
          >
            <NotificationItem n={n} colors={colors} />
          </Swipeable>
        </Animated.View>
      ))}
    </View>
  );
}
