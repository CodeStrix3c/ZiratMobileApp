import { Text } from "react-native";
export default function RequiredLabel({ label }: { label: string }) {
  return (
    <Text>
      {label} <Text style={{ color: "red" }}>*</Text>
    </Text>
  );
}
