import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET Method
export function getPosts() {
  return api.get("/posts");
}

// DELETE Method
export function deletePost(id) {
  return api.delete(`/posts/${id}`);
}
