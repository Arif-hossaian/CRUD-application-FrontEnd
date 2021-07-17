import Axios from "axios";

const URL = "https://mern-crud-application.herokuapp.com/user";

export const getUsers = async (id) => {
  id = id || "";
  return await Axios.get(`${URL}/${id}`);
};
//Post request
export const addUsers = async (user) => {
  return await Axios.post(`${URL}/add`, user);
};
//Edit user
export const editUser = async (id, user) => {
  return await Axios.put(`${URL}/${id}`, user);
};
//delete user
export const deleteUser = async (id) => {
  return await Axios.delete(`${URL}/${id}`);
};
