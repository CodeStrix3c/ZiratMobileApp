import { deleteItem, getItem, setItem } from "./universalSecureToken";

export const saveAuth = async (token: string, userId: number) => {
  await setItem("auth_token", token);
  await setItem("auth_userId", String(userId));
};

export const getAuth = async () => {
  const token = await getItem("auth_token");
  const userId = await getItem("auth_userId");
  return { token, userId: userId ? Number(userId) : null };
};

export const clearAuth = async () => {
  await deleteItem("auth_token");
  await deleteItem("auth_userId");
};
