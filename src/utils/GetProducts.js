import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});
const getAllProducts = () =>
  axiosClient.get("/products").then((resp) => resp.data);

export { getAllProducts };
