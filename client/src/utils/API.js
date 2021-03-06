import axios from "axios";

export default {
    // Gets all books
    saveBook: function(book) {
        console.log("utils", book);
        return axios.post("/api/books", book);
    },
    googlebooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
};