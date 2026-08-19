import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export function getPosts() {
  return api.get("/posts");
}

export function deletePost(id) {
  return api.delete(`/posts/${id}`);
}
