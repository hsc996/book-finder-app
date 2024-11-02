// export const fetchBooksFromAPI = async (query) => {
//     const apiKey = import.meta.env.GOOGLE_BOOKS_API_KEY
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAGU4dxKU2QytvpHNMGO8hudqexDYHVPqw`);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// };