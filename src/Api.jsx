import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const key = import.meta.env.VITE_BACKEND_KEY;

export const getData = async (user = "wearymench") => {
  try {
    const response = await axios.get(`${url}/${user}`, {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error while loading info:", error);
  }
};
