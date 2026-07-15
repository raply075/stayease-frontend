import api from "./api";

export const getReviews = (hotelId: number) => {
  return api.get(`/reviews?hotel_id=${hotelId}`);
};

export const createReview = (data: any) => {
  return api.post("/reviews", data);
};
export const updateReview = (id: number, data: any) =>
  api.put(`/reviews/${id}`, data);

export const deleteReview = (id: number) => api.delete(`/reviews/${id}`);
