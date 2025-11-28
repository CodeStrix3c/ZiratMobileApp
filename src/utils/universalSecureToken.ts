import * as SecureStore from "expo-secure-store";

const isWeb =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

// SAVE ITEM
export const setItem = async (key: string, value: string) => {
  if (isWeb) {
    window.localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};

// GET ITEM
export const getItem = async (key: string) => {
  if (isWeb) {
    return window.localStorage.getItem(key);
  }
  return await SecureStore.getItemAsync(key);
};

// DELETE ITEM
export const deleteItem = async (key: string) => {
  if (isWeb) {
    window.localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
};
