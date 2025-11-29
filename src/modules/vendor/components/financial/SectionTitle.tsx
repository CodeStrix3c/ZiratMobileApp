import { Text } from "react-native";

export default function SectionTitle({ title }) {
  return (
    <Text className="text-gray-800 font-semibold text-[16px] mb-2 mt-4">
      {title}
    </Text>
  );
}
