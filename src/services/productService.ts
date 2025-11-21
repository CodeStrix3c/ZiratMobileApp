import axiosUser from "../api/client/axiosUser";

export const getProducts = async () => {
  const { data } = await axiosUser.get("/api/products");

  return data;
};

export const getProductById = async (id) => {
  const { data } = await axiosUser.get(`/api/products/${id}`);
  return data;
};
