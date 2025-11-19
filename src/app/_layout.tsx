import { Stack } from "expo-router";
import React from "react";
import { PaperProvider } from "react-native-paper";
import "../../styles/global.css";
import { theme } from "../constants/theme";
import AppProvider from "../contexts/AppProvider";

function RouteGuard({ children }: { children: React.ReactNode }) {
  // const { user, loading } = useAuth();
  // console.log(user, "user...");

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.replace("/auth");
  //   }
  // }, [user, loading]);

  // if (loading) return null;

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AppProvider>
      {/* <RouteGuard> */}
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
      {/* </RouteGuard> */}
    </AppProvider>
  );
}
