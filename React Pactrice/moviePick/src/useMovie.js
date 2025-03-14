import { useEffect, useState } from "react";

const apiKey = "6aecaa87";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
            { signal: controller.signal }
          );

          if (!response.ok) {
            throw new Error("Something Went Wrong with fetching movies.");
          }
          const data = await response.json();

          // console.log(typeof data.Response);
          if (data.Response == "False") {
            setError("Movie not found.");
            // throw new Error("Movie not found");
          }

          setMovies(data.Search);
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      console.log(query);
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   onCloseMovie();
      fetchMovies();

      return function cleanup() {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
