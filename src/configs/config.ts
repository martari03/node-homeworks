import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL || " ", //your db_url

  ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "aaa",
  REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "bbb",
};
