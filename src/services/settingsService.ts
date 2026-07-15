import api from "./api";

export const updateProfile = (data: any) => api.put("/profile", data);

export const changePassword = (data: any) => api.put("/change-password", data);

export const logoutAll = () => api.post("/logout-all");

export const deleteAccount = () => api.delete("/account");
