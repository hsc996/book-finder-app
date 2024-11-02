// import { useEffect, useState } from "react";

// export function SearchBook(){
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         fetchBooks();
//     })
    
//     const fetchBooks = async () => {
//         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAGU4dxKU2QytvpHNMGO8hudqexDYHVPqw`)
//         const data = await response.json();
//         console.log(data)
//     };

//     return(
//         <div>

//         </div>
//     );
// };