import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
// import { router } from "expo-router"; // comment out if not redirecting

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, initialized } = useAuth();

  const isClient = typeof window !== "undefined";

  useEffect(() => {
    if (!isClient) return; // skip SSR

    // ❌ Skip auth page for now
    // if (initialized && user === null) {
    //   router.replace("/auth"); // temporarily comment redirect
    // }
  }, [user, initialized, isClient]);

  // render nothing until auth is initialized
  if (!isClient || !initialized) return null;

  return <>{children}</>;
}
