// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const API_ENDPOINTS = {
  SAVE_URL: `${API_BASE_URL}/save`,
  GET_URLS: `${API_BASE_URL}/urls`,
  DELETE_URL: (shortId) => `${API_BASE_URL}/urls/${shortId}`,
  REDIRECT_URL: (shortId) => `${API_BASE_URL}/${shortId}`,
};

export default API_BASE_URL;
