import { Link } from "react-router-dom";

function BookInformation({ bookData }) {
  return (
    <>
      <section className="book-info-container grid min-w-full border-4 border-solid bg-gradient-to-r from-pink-100 to-grey-100 ">
        <Link
          className="book-info-btn m-2 absolute inline-block rounded-full border border-indigo-600 bg-white p-3 text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          to="/books"
        >
          <span className="sr-only"> Go back </span>

          <svg
            className="book-info-btn-icon h-5 w-5 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="book-info-text text-center">
          <h2 className="book-info-title text-5xl p-5 font-black">
            {!bookData ? "Loading" : bookData.title}
          </h2>
          <h3 className="book-info-author-publisher text-lg p-5 font-bold">
            {!bookData ? "Loading" : <><span>👤 <b>Author:</b> {bookData.author}</span><br/><span>📚 <b>Publisher:</b> {bookData.publisher}</span></>}
          </h3>
        </div>

        <div>
          <img
            alt={!bookData ? "" : bookData.imageURL}
            className="book-info-img my-4 mx-auto"
            src={!bookData ? "" : bookData.imageURL}
          />
        </div>

        <div>
          <div className="book-info-details flex justify-center">
            <ul className="book-info-list w-96 justify-self-center">
              <li className="book-info-list-item border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                {!bookData ? "" : `📅 Year Released: ${bookData.year}`}
              </li>
              <li className="book-info-list-item border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                {!bookData ? "" : `📄 Pages: ${bookData.pages}`}
              </li>
              <li className="book-info-list-item border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                {!bookData ? "" : `🌍 Country: ${bookData.country}`}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookInformation;
