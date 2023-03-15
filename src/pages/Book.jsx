import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import useBookData from "./BookDataHook";
import BookInformation from "../components/BookInfo.jsx";

const Book = () => {
  const params = useParams();

  const [loading, error, bookData] = useBookData(params.id);

  return (
    <Container>
      {loading && (
        <div className="max-w-[230px]">
          <Skeleton count={5} />
        </div>
      )}
      {!loading && <BookInformation bookData={bookData} />}
    </Container>
  );
};

export default Book;
