import { useQuery } from "@tanstack/react-query";
import { api } from "../config/api";

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const useProducts = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isFetching, error };
};
