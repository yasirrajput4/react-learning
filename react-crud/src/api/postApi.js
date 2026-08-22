import axios from "axios";

// Axios Instance
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

// POST Method
export function postData(post) {
  return api.post("/posts", post);
}

// PUT Method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
