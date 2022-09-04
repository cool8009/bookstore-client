import axios from "axios";
const baseUrl = "http://49.12.240.169:7017/api";

const serverPostRoute = `${baseUrl}/Books`;

const getToken = () => {
    return localStorage.getItem('token');
}
// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };


const BookService = {
    async getAllBook() {
        let token = getToken();
        let myBooks = [];
        const tempResult = (await axios.get(`${serverPostRoute}`)).data;
        tempResult.map((book) => myBooks.push(book))
        return myBooks;
    },

    async addBook(object) {
        let token = getToken();
        return (await axios.post(`${serverPostRoute}`, object, 
        { headers: { 'Authorization': `Bearer ${token}` } })).data;
    },

    async buyBook(id) {
        let token = getToken();
        let result = await axios.put(`${serverPostRoute}/purchase/${id}`, null, 
        { headers: { 'Authorization': `Bearer ${token}` } });
        return result;
    },

    async getBooksForAuthorId(authorid) {
        let myBooks = [];
        const tempResult = (await axios.get(`${serverPostRoute}/findauthor/${authorid}`)).data
        tempResult.map((book) => myBooks.push(book))
        return myBooks;
    },

    async searchBooks(text) {
        let token = getToken();
        let myBooks = [];
        const tempResult = (await axios.get(`${serverPostRoute}/search/${text}`)).data;
        tempResult.map((book) => myBooks.push(book))
        return myBooks;
    },
    

}



export default BookService;
