import "dotenv/config";
import axios from "axios";

export const api = axios.create({
  baseURL: 'https://mcxzevnyid.execute-api.us-east-1.amazonaws.com/',
  headers: {
    "Content-Type": "application/json",
  },
});
