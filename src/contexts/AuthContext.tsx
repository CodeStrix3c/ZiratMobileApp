import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = { id: string; name: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (username: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from AsyncStorage on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Failed to load user", e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (username: string, password: string) => {
    setLoading(true);
    const fakeUser = { id: "1", name: username };
    await AsyncStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setLoading(false);
  };

  const signUp = async (username: string, password: string) => {
    setLoading(true);
    const fakeUser = { id: "1", name: username };
    await AsyncStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem("user");
    setUser(null);
    setLoading(false);
    router.replace("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
