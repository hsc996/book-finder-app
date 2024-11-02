// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const BooksContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export function useBooksContext(){
//     return useContext(BooksContext);
// }

// // eslint-disable-next-line react/prop-types
// export function BooksProvider({children}){
//     const [search, setSearch] = useState('');
//     const [bookData, setBookData] = useState([]);

//     const updateSearch = (query) => {
//         setSearch(query);
//     };

//     useEffect(() => {
//         fetchBooks();
//     })
    
//     const fetchBooks = async () => {
//         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAGU4dxKU2QytvpHNMGO8hudqexDYHVPqw`)
//         const data = await response.json();
//         console.log(data)
//     };

//     return(
//         <BooksContext.Provider value={{ search, updateSearch, bookData, fetchBooks }}>
//             {children}
//         </BooksContext.Provider>
//     );
// };