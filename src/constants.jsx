export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.API_ADDRESS;