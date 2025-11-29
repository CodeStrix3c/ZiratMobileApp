import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export default function StatementBottom({ visible, onClose, statements, colors }) {
  const translateY = useSharedValue(350);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, {
        duration: 280,
        easing: Easing.out(Easing.cubic),
      });
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      translateY.value = withTiming(350, { duration: 250 });
      opacity.value = withTiming(0, { duration: 150 });
    }
  }, [visible]);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  if (!visible) return null;

  return (
    <Animated.View
      className="absolute inset-0 justify-end"
      style={[
        backdropStyle,
        { backgroundColor: "rgba(0,0,0,0.35)" },
      ]}
    >
      {/* BACKDROP */}
      <TouchableOpacity className="flex-1" activeOpacity={1} onPress={onClose} />

      {/* BOTTOM SHEET */}
      <Animated.View
        className="rounded-t-3xl px-4 pt-5 pb-8 bg-white"
        style={[
          sheetStyle,
          {
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 10,
          },
        ]}
      >
        {/* HANDLE BAR */}
        <View className="items-center mb-4">
          <View
            className="w-12 h-1.5 rounded-full"
            style={{ backgroundColor: "#D1D5DB" }}
          />
        </View>

        {/* HEADER */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[17px] font-semibold text-gray-900">
            All Fee Statements
          </Text>

          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close-circle-outline" size={26} color={colors.primaryDark} />
          </TouchableOpacity>
        </View>

        {/* STATEMENT ITEMS */}
        {statements.map((s, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            className="mb-3"
          >
            <View
              className="flex-row items-center justify-between p-4 rounded-2xl"
              style={{
                backgroundColor: colors.light,
                borderColor: colors.border,
                borderWidth: 1,
                shadowColor: "#000",
                shadowOpacity: 0.04,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              {/* LEFT SIDE */}
              <View className="flex-row items-center">
                {/* Icon bubble */}
                <View
                  className="w-10 h-10 rounded-xl items-center justify-center"
                  style={{
                    backgroundColor: `${colors.primaryLight}80`,
                    borderColor: colors.primary,
                    borderWidth: 1,
                  }}
                >
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color={colors.primaryDark}
                  />
                </View>

                {/* Texts */}
                <View className="ml-3">
                  <Text className="text-[15px] font-semibold text-gray-900">
                    {s.week}
                  </Text>
                  <Text className="text-[12px] text-gray-500 mt-[2px]">
                    PDF Statement
                  </Text>
                </View>
              </View>

              {/* Download Button */}
              <View
                className="w-10 h-10 rounded-xl items-center justify-center"
                style={{
                  backgroundColor: `${colors.primaryLight}90`,
                  borderColor: colors.primary,
                  borderWidth: 1,
                }}
              >
                <Ionicons
                  name="download-outline"
                  size={20}
                  color={colors.primaryDark}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Animated.View>
  );
}
