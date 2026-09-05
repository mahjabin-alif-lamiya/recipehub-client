import axios from "axios";

// A single axios instance for all backend calls. withCredentials
// lets the browser send/receive the httpOnly JWT cookie set by the
// server, so no token handling is needed on the client.
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export default api;