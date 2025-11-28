import { router } from "expo-router";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

interface RouteGuardProps {
  children: ReactNode;
}

export default function RouteGuard({ children }: RouteGuardProps) {
  const { initialized, userId } = useAuth();

  useEffect(() => {
    if (!initialized) return;

    if (!userId) {
      router.replace("/auth");
    }
  }, [initialized, userId]);

  if (!initialized) return null;

  return <>{children}</>;
}
