import { deleteItem, getItem, setItem } from "./universalSecureToken";

// Generic helpers
export const save = (key: string, value: any) =>
  value !== null ? setItem(key, String(value)) : deleteItem(key);

export const load = async (key: string) => await getItem(key);

export const clear = async (key: string) => await deleteItem(key);
