import api from "./api";

export const getFavorites = () => {
  return api.get("/favorites");
};

export const createFavorite = (data: any) => {
  return api.post("/favorites", data);
};

export const deleteFavorite = (id: number) => {
  return api.delete(`/favorites/${id}`);
};
