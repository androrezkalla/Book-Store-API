import { useState, useEffect } from "react";

const useBookData = (id) => {
  const [status, setStatus] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.matgargano.com/api/books/${id}`;
      setStatus({ loading: true, error: null, data: null });
      try {
        const request = await fetch(url);
        const response = await request.json();
        setStatus({ loading: false, error: null, data: response });
      } catch (e) {
        setStatus({ loading: false, error: "Error: " + e.message, data: null });
      }
    }

    fetchData();
  }, [id]);

  return [status.loading, status.error, status.data];
};

export default useBookData;
