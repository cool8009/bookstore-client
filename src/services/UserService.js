import axios from "axios";
const baseUrl = "http://localhost:7017/api";

const serverAuthRoute = `${baseUrl}/Account`;



const UserService = {
  async LogIn(creds) {
    return await axios.post(serverAuthRoute + "/login", creds);
  },

  async Register(creds) {
    return await axios.post(serverAuthRoute + "/register", creds);
  },


};

export default UserService;
