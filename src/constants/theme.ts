import { DefaultTheme } from "react-native-paper";
import { colors } from "./colors";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.light,
    text: colors.dark,
    placeholder: colors.neutral,
    error: colors.error,
  },
};
