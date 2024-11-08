
// export function Modal({ show, hide, book }){

//     if (!show) return null;

//     return(
//         <>
//             <div className="modal-overlay" onClick={hide}>
//                 <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                     <button className="close-button" onClick={hide}>
//                         &times;
//                     </button>
//                     <div className="modal-body">
//                         <img
//                             className="modal-image"
//                             src={book.volumeInfo.imageLinks?.thumbnail}
//                             alt={book.volumeInfo.title}
//                         />
//                         <h2 className="modal-title">{book.volumeInfo.title}</h2>
//                         <p className="modal-author">By {book.volumeInfo.authors?.join(', ')}</p>
//                         <p className="modal-description">{book.volumeInfo.description || "No description available."}</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Modal;