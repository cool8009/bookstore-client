import axios from "axios";
const baseUrl = "http://localhost:7017/api";

const serverPostRoute = `${baseUrl}/Authors`;

const getToken = () => {
    return localStorage.getItem('token');
}
// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };


const AuthorService = {
    async getAuthor(id) {
        let token = getToken();
        return (await axios.get(`${serverPostRoute}/${id}`)).data;

    },
    async getAuthors() {
        let token = getToken();
        let myAuthors = [];
        const tempResult = (await axios.get(`${serverPostRoute}`)).data;
        tempResult.map((author) => myAuthors.push(author))
        return myAuthors;
    },
    async searchAuthors(text) {
        let token = getToken();
        let myAuthors = [];
        const tempResult = (await axios.get(`${serverPostRoute}/search/${text}`)).data;
        tempResult.map((author) => myAuthors.push(author))
        return myAuthors;
    },
}



export default AuthorService;
