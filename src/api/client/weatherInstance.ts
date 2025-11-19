import axios from "axios";

const weatherInstance = axios.create({
  baseURL: process.env.WEATHER_BASE_URL,

  params: {
    key: process.env.WEATHER_API_KEY,
  },
});

export default weatherInstance;
