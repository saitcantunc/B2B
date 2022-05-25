import axios from "axios";

export function getData({ commit }) {
  return axios.get("http://localhost:3000/users").then((response) => {
    commit("setUserList", response.data);
  });
}

export function getUser({ commit }, id) {
  return axios.get(`http://localhost:3000/users/${id}`).then((response) => {
    commit("setUser", response.data);
  });
}

export function addUser({ commit }, user) {
  return axios
    .post("http://localhost:3000/users", {
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender,
    })
    .then((response) => {
      commit("setUserList", response.data);
    });
}

export function editUser({ commit }, user) {
  return new Promise(function (resolve, reject) {
    axios
      .put(`http://localhost:3000/users/${user.id}`, {
        name: user.name,
        email: user.email,
        password: user.password,
        gender: user.gender,
      })
      .then((response) => {
        commit("setUserList", response.data);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
