import axios from "axios";

function getTodos() {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then(({ data }) => data);
}

function getTodo(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(({ data }) => data);
}

export { getTodo, getTodos };
