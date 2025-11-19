import axiosInstance from "../api/client/axiosInstance";

// 🔐 LOGIN
export const login = async (credentials) => {
  const { data } = await axiosInstance.post(
    "/api/core/account/login",
    credentials,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return data;
};

// 👤 USER PROFILE SECTION
export const saveProfileSection = async (data) => {
  const response = await axiosInstance.post("/api/core/userProfile", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// ✅ GET profile section by userId (or userId if applicable)
export const getProfileSection = async (userId) => {
  const response = await axiosInstance.get(
    `/api/core/userProfile/GetProfileByUserId?userId=${userId}`
    // {
    //   headers: { accept: "application/json" },
    // }
  );
  return response.data;
};

// 🔢 VERIFY OTP
export const verifyUserOtp = async (data) => {
  const response = await axiosInstance.post("/api/core/verifyOtp", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// 🏠 ADDRESS SECTION
export const saveAddressSection = async (data) => {
  const response = await axiosInstance.post("/api/farmer/address", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// ✅ GET address section by profileId
export const getAddressSection = async (profileId) => {
  const response = await axiosInstance.get(
    `/api/farmer/address/GetAddressByProfileId?profileId=${profileId}`
  );
  return response.data;
};

// 🎓 EDUCATION SECTION
export const saveEducationSection = async (data) => {
  const response = await axiosInstance.post("/api/farmer/education", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// ✅ GET education section by profileId
export const getEducationSection = async (profileId) => {
  const response = await axiosInstance.get(
    `/api/farmer/education/GetEducationByProfileId?profileId=${profileId}`
  );
  return response.data;
};

// 💼 PROFESSION SECTION
export const saveProfessionSection = async (data) => {
  const response = await axiosInstance.post("/api/farmer/profession", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// ✅ GET profession section by profileId
export const getProfessionSection = async (profileId) => {
  const response = await axiosInstance.get(
    `/api/farmer/profession/GetProfessionByProfileId?profileId=${profileId}`
  );
  return response.data;
};

// 👤 OVERALL USER PROFILE (if used elsewhere)
export const getUserProfile = async (userId) => {
  const response = await axiosInstance.get(
    `/api/core/userProfile/GetProfileByUserId?userId=${userId}`
  );
  return response.data;
};
