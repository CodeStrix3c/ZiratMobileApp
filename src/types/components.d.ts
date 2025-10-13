import { Ionicons } from "@expo/vector-icons";

export interface InfoCardProps {
  title: string;
  value: string | number;
  icon: keyof typeof Ionicons.glyphMap;
}
