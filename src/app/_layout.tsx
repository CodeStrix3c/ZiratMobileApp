import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "../../styles/global.css";
import RouteGuard from "../components/RouteGuard";
import { theme } from "../constants/theme";
import AppProvider from "../contexts/AppProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <RouteGuard>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }}/>
        </Stack>
      </PaperProvider>
      </RouteGuard>
    </AppProvider>
  );
}
