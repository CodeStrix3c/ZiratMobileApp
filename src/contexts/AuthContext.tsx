import React, { createContext, useContext, useEffect, useState } from "react";
import { clearAuth, getAuth, saveAuth } from "../utils/authStorage";

interface AuthContextType {
  user: number | null;
  token: string | null;
  initialized: boolean;
  login: (token: string, userId: number) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  initialized: false,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadAuth = async () => {
      const data = await getAuth();
      if (data.token && data.userId) {
        setToken(data.token);
        setUser(data.userId);
      }
      setInitialized(true); // mark auth as loaded
    };
    loadAuth();
  }, []);

  const login = async (token: string, userId: number) => {
    await saveAuth(token, userId);
    setToken(token);
    setUser(userId);
  };

  const logout = async () => {
    await clearAuth();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, initialized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
