import axios from "axios";

const api = axios.create({
  baseURL: "https://api.gbif.org/v1",
});

export default api;