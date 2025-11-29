import { useRef } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const ACTIVE_SCALE = 1.12;

export default function TabBar({ tabs, activeTab, onChange }) {
  const indicatorX = useSharedValue(0);
  const indicatorW = useSharedValue(0);
  const pressScale = useSharedValue(1);

  const containerWidth = useRef(0);

  const onLayout = (e) => {
    containerWidth.current = e.nativeEvent.layout.width;
    const tabWidth = containerWidth.current / tabs.length;

    indicatorW.value = tabWidth;
    indicatorX.value = tabWidth * tabs.indexOf(activeTab);
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: indicatorX.value },
      {
        scaleX: interpolate(
          pressScale.value,
          [1, 1.07, 1],
          [1, 1.25, 1]
        ),
      },
      {
        scaleY: interpolate(
          pressScale.value,
          [1, 1.07, 1],
          [1, 0.85, 1]
        ),
      },
    ],
    width: indicatorW.value,
  }));

  return (
    <View
      className="bg-white shadow-md border-b border-gray-100"
    >
      <View className="flex-row relative" onLayout={onLayout}>

        {/* Liquid Morphing Indicator */}
        <Animated.View
          className="absolute bottom-0 h-[4px] bg-primary rounded-full shadow-lg"
          style={indicatorStyle}
        />

        {tabs.map((t, index) => {
          const isActive = activeTab === t;

          const animatedText = useAnimatedStyle(() => ({
            transform: [
              {
                scale: withTiming(isActive ? ACTIVE_SCALE : 1, {
                  duration: 300,
                }),
              },
            ],
            opacity: withTiming(isActive ? 1 : 0.6, {
              duration: 250,
            }),
          }));

          return (
            <Pressable
              key={index}
              className="flex-1 items-center py-4"
              onPress={() => {
                const tabWidth = containerWidth.current / tabs.length;

                // ripple > elastic > settle effect
                pressScale.value = withTiming(1.07, { duration: 110 });
                setTimeout(() => {
                  pressScale.value = withSpring(1, { damping: 10 });
                }, 110);

                // indicator animation
                indicatorX.value = withTiming(tabWidth * index, {
                  duration: 550,
                  easing: Easing.bezier(0.22, 1, 0.36, 1),
                });

                onChange(t);
              }}
            >
              <Animated.Text
                className={`text-sm font-semibold ${
                  isActive ? "text-primary" : "text-gray-600"
                }`}
                style={animatedText}
              >
                {t.toUpperCase()}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
