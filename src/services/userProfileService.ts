// src/services/userProfileService.js

import axiosUser from "../api/client/axiosUser";

// ----------------------------------------------------
// 🔐 LOGIN
// ----------------------------------------------------
export const login = async (credentials) => {
  const { data } = await axiosUser.post(
    "/api/core/account/login",
    credentials,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return data;
};

// ----------------------------------------------------
// 👤 PROFILE SECTION
// ----------------------------------------------------
export const saveProfileSection = async (data) => {
  const response = await axiosUser.post("/api/core/userProfile", data);
  return response.data;
};

export const updateProfileSection = async (data) => {
  const response = await axiosUser.put(
    `/api/core/userProfile/${data.profileId}`,
    data
  );
  return response.data;
};

export const deleteProfileSection = async (profileId) => {
  const response = await axiosUser.delete(`/api/core/address/${profileId}`);
  return response.data;
};

export const getProfileSection = async (userId) => {
  const response = await axiosUser.get(
    `/api/core/userProfile/GetProfileByUserId?userId=${userId}`
  );
  return response.data;
};

// ----------------------------------------------------
// 🔢 OTP VERIFY
// ----------------------------------------------------
export const verifyUserOtp = async (data) => {
  const response = await axiosUser.post(
    "/api/core/otpverification/verify",
    data
  );
  return response.data;
};

// ----------------------------------------------------
// 🏠 ADDRESS SECTION
// ----------------------------------------------------
export const saveAddressSection = async (data) => {
  const response = await axiosUser.post("/api/core/address/create", data);
  return response.data;
};

export const updateAddressSection = async (data) => {
  const response = await axiosUser.put(
    `/api/core/address/${data.profileId}`,
    data
  );
  return response.data;
};

export const deleteAddressSection = async (addressId) => {
  const response = await axiosUser.delete(`/api/core/address/${addressId}`);
  return response.data;
};

export const getAddressSection = async (profileId) => {
  const response = await axiosUser.get(
    `/api/core/address/by-profile/${profileId}`
  );
  return response.data;
};

// ----------------------------------------------------
// 🎓 EDUCATION SECTION
// ----------------------------------------------------
export const saveEducationSection = async (data) => {
  const response = await axiosUser.post("/api/core/education/Create", data);
  return response.data;
};

export const updateEducationSection = async (data) => {
  const response = await axiosUser.put(
    `api/core/education/${data.profileId}`,
    data
  );
  return response.data;
};

export const deleteEducationSection = async (educationId) => {
  const response = await axiosUser.delete(`/api/core/education/${educationId}`);
  return response.data;
};

export const getEducationSection = async (profileId) => {
  const response = await axiosUser.get(
    `/api/core/education/by-profile/${profileId}`
  );
  return response.data;
};

// ----------------------------------------------------
// 💼 PROFESSION SECTION
// ----------------------------------------------------
export const saveProfessionSection = async (data) => {
  const response = await axiosUser.post(
    "/api/core/professional-profile/Create",
    data
  );
  return response.data;
};

export const updateProfessionSection = async (data) => {
  const response = await axiosUser.put(
    `/api/core/professional-profile/${data.profileId}`,
    data
  );
  return response.data;
};

export const deleteProfessionSection = async (professionId) => {
  const response = await axiosUser.delete(
    `/api/core/professional-profile/${professionId}`
  );
  return response.data;
};

export const getProfessionSection = async (profileId) => {
  const response = await axiosUser.get(
    `/api/core/professional-profile/GetByProfileId?profileId=${profileId}`
  );
  return response.data;
};
