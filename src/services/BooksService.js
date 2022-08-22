import axios from "axios";
const baseUrl = "https://localhost:7017/api";

const serverPostRoute = `${baseUrl}/Books`;

const token = localStorage.getItem('authToken');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};


const BookService = {
    async getAllBook() {
        let myBooks = [];
        const tempResult = (await axios.get(`${serverPostRoute}`)).data;
        tempResult.map((book) => myBooks.push(book))
        return myBooks;
    },

    async addBook(object) {
        return (await axios.post(`${serverPostRoute}`, object, 
        { headers: { Authorization: `Bearer ${token}` } })).data;
    }

}



export default BookService;
