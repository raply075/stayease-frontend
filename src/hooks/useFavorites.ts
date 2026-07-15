import { useEffect, useState } from "react";
import {
  getFavorites,
  createFavorite,
  deleteFavorite,
} from "../services/favoriteService";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const loadFavorites = () => {
    getFavorites().then((res) => setFavorites(res.data));
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const addFavorite = async (data: any) => {
    await createFavorite(data);
    loadFavorites();
  };

  const removeFavorite = async (id: number) => {
    await deleteFavorite(id);
    loadFavorites();
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};
