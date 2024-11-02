
export function BookList({books}){

    return(
        <div>
            {books.map((book) => (
                <div className="book-cont" key={book.id}>
                    {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title || "Book thumbnail"} />}
                </div>
            ))}
        </div>
    )
}

export default BookList;