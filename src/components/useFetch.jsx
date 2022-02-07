import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Blogs not found.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch request not made.");
          } else {
            setError(err.message);
            setLoading(false);
          }
        });
    }, 1000);
    return () => abortController.abort(); //aborts the request
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
