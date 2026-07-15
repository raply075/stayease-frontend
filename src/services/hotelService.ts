import api from "./api";

export const createHotel = (data: FormData) => {
  return api.post("/hotels", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateHotel = (id: number, data: FormData) => {
  data.append("_method", "PUT");

  return api.post(`/hotels/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteHotel = (id: number) => {
  return api.delete(`/hotels/${id}`);
};
