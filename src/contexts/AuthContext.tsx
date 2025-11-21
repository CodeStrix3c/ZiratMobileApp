import React, { createContext, useContext, useEffect, useState } from "react";
import { setUserAxiosToken } from "../api/client/axiosUser";
import { setVendorAxiosToken } from "../api/client/axiosVendor";
import { clear, load, save } from "../utils/authStorage";

interface AuthContextType {
  userToken: string | null;
  vendorToken: string | null;

  userId: number | null;
  vendorId: number | null;

  userProfileId: number | null;
  vendorProfileId: number | null;

  initialized: boolean;

  setUserToken: (v: string | null) => Promise<void>;
  setVendorToken: (v: string | null) => Promise<void>;

  setUserId: (v: number | null) => Promise<void>;
  setVendorId: (v: number | null) => Promise<void>;

  setUserProfileId: (v: number | null) => Promise<void>;
  setVendorProfileId: (v: number | null) => Promise<void>;

  logoutUser: () => Promise<void>;
  logoutVendor: () => Promise<void>;
  logoutAll: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [userToken, setUserTokenState] = useState<string | null>(null);
  const [vendorToken, setVendorTokenState] = useState<string | null>(null);

  const [userId, setUserIdState] = useState<number | null>(null);
  const [vendorId, setVendorIdState] = useState<number | null>(null);

  const [userProfileId, setUserProfileIdState] = useState<number | null>(null);
  const [vendorProfileId, setVendorProfileIdState] = useState<number | null>(
    null
  );

  const [initialized, setInitialized] = useState(false);

  // Load on app start
  useEffect(() => {
    (async () => {
      const uToken = await load("user_token");
      const vToken = await load("vendor_token");

      setUserTokenState(uToken);
      setVendorTokenState(vToken);

      setUserAxiosToken(uToken);
      setVendorAxiosToken(vToken);

      setUserIdState(Number(await load("user_id")) || null);
      setVendorIdState(Number(await load("vendor_id")) || null);

      setUserProfileIdState(Number(await load("user_profileId")) || null);
      setVendorProfileIdState(Number(await load("vendor_profileId")) || null);

      setInitialized(true);
    })();
  }, []);

  // ---------------- SIMPLE SETTERS ----------------

  const setUserToken = async (token: string | null) => {
    await save("user_token", token);
    setUserTokenState(token);
    setUserAxiosToken(token);
  };

  const setVendorToken = async (token: string | null) => {
    await save("vendor_token", token);
    setVendorTokenState(token);
    setVendorAxiosToken(token);
  };

  const setUserId = async (v: number | null) => {
    await save("user_id", v);
    setUserIdState(v);
  };

  const setVendorId = async (v: number | null) => {
    await save("vendor_id", v);
    setVendorIdState(v);
  };

  const setUserProfileId = async (v: number | null) => {
    await save("user_profileId", v);
    setUserProfileIdState(v);
  };

  const setVendorProfileId = async (v: number | null) => {
    await save("vendor_profileId", v);
    setVendorProfileIdState(v);
  };

  // ---------------- LOGOUT ----------------

  const logoutUser = async () => {
    await clear("user_token");
    await clear("user_id");
    await clear("user_profileId");

    setUserTokenState(null);
    setUserIdState(null);
    setUserProfileIdState(null);

    setUserAxiosToken(null);
  };

  const logoutVendor = async () => {
    await clear("vendor_token");
    await clear("vendor_id");
    await clear("vendor_profileId");

    setVendorTokenState(null);
    setVendorIdState(null);
    setVendorProfileIdState(null);

    setVendorAxiosToken(null);
  };

  const logoutAll = async () => {
    await logoutUser();
    await logoutVendor();
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        vendorToken,
        userId,
        vendorId,
        userProfileId,
        vendorProfileId,
        initialized,
        setUserToken,
        setVendorToken,
        setUserId,
        setVendorId,
        setUserProfileId,
        setVendorProfileId,
        logoutUser,
        logoutVendor,
        logoutAll,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
