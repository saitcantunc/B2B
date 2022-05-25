export function setUserList(state, list) {
  state.userList = list;
}

export function setUser(state, user) {
  state.user = user;
}

export function setUsername(state, username) {
  state.user.name = username;
}

export function setPassword(state, password) {
  state.user.password = password;
}

export function setEmail(state, email) {
  state.user.email = email;
}

export function setGender(state, gender) {
  state.user.gender = gender;
}

export function emptyUser(state, username) {
  state.user = {};
}
