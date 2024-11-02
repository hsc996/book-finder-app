import { useEffect, useState } from "react";
import { BookList } from "./BookList.jsx";
import '../styles/BookSearch.css';

export function Main(){
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        setQuery(search);
    }

    useEffect(() => {
        if (query){
            fetchBooks();
        }
    }, [query]);
    
    const fetchBooks = async () => {
        try {
            const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`);
            const data = await response.json();
            if (data.items){
                setBooks(data.items)
            } else {
                setBooks([]);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    return(
        <>
            <div className="search-bar">
                <input
                className="user-input"
                type="text"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>
                <BookList books={books}/>
            </div>
        </>
    );
};


export default Main;
