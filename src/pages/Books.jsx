import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://api.matgargano.com/api/books";

    const fetchBooks = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {loading && (
        <div className="max-w-[230px]">
          <Skeleton count={10} />
        </div>
      )}
      {!loading && (
        <>
          {books.map((book) => (
            <div key={book.id}>
              <Link className="hover:underline" to={`/books/${book.id}`}>
                {book.title}
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Books;
