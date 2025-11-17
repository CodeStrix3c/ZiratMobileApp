import * as SecureStore from "expo-secure-store";

const isWeb =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const setItem = async (key: string, value: string) => {
  if (isWeb) {
    window.localStorage.setItem(key, value);
    return;
  }
  await SecureStore.setItemAsync(key, value);
};

export const getItem = async (key: string) => {
  if (isWeb) {
    return window.localStorage.getItem(key);
  }
  return await SecureStore.getItemAsync(key);
};

export const deleteItem = async (key: string) => {
  if (isWeb) {
    window.localStorage.removeItem(key);
    return;
  }
  await SecureStore.deleteItemAsync(key);
};
