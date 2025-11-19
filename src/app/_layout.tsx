import { Stack, router } from "expo-router";
import React, { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import "../../styles/global.css";
import { theme } from "../constants/theme";

import { AuthProvider, useAuth } from "../contexts/AuthContext";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user]);

  // if (loading || !user) return null;

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <PaperProvider theme={theme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </Stack>
        </PaperProvider>
      </RouteGuard>
    </AuthProvider>
  );
}
