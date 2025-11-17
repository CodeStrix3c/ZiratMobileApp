// app/components/ui/OptionalLabel.tsx
import { Text } from "react-native";

export default function OptionalLabel({ label }: { label: string }) {
  return (
    <Text>
      {label} <Text style={{ opacity: 0.6 }}>(Optional)</Text>
    </Text>
  );
}
