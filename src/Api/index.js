import Axios from "axios";

const URL = "http://localhost:3002/users";

export const getUsers = async () => {
  return await Axios.get(URL);
};
