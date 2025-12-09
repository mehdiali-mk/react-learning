import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const apiKey = "6aecaa87";

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoading(true);
          setErrorMessage("");
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
            { signal: controller.signal }
          );

          if (!response.ok)
            throw new Error("Something went wrong while fetching Movies.");

          const data = await response.json();

          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
          setErrorMessage("");
        } catch (error) {
          if (error.name !== "AbortError") setErrorMessage(error.message);
        } finally {
          setLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setErrorMessage("");
        return;
      }

      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, errorMessage };
}
