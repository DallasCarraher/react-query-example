export const ROOT = "https://the-one-api.dev/v2";

export const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

export const fetchWrapper = async (endpoint, config = defaultConfig) => {
  return fetch(endpoint, config);
};

export default fetchWrapper;
