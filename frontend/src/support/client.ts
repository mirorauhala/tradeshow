import axios from "axios";

export const client = axios.create({
  baseURL: process.env.STRAPI_ENDPOINT_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
});
