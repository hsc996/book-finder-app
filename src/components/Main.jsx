import { useEffect, useState } from "react";
import { BookList } from "../components/BookList.jsx"

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
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAGU4dxKU2QytvpHNMGO8hudqexDYHVPqw`);
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
            <div>
                <input type="text"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>
                <BookList books={books}/>
            </div>
        </>
    );
};


export default Main;

