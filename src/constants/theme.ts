import { DefaultTheme } from "react-native-paper";
import { colors } from "./colors";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
    text: colors.black,
    placeholder: colors.gray,
    error: colors.error,
  },
};
