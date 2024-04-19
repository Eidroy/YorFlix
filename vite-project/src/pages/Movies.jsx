import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=4539e789e1113b8e26ac23fdc6cfe03d"
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="Homepage">
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
export default Movies;
