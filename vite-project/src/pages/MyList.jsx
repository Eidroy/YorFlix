import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import SerieList from "../components/SerieList";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4539e789e1113b8e26ac23fdc6cfe03d&page=2"
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

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=4539e789e1113b8e26ac23fdc6cfe03d&page=2"
      )
      .then((response) => {
        setSeries(response.data.results);
      });
  }, []);

  return (
    <div className="Homepage">
      <h1>Series</h1>
      <SerieList series={series} />
    </div>
  );
}

function MyList() {
  return (
    <div>
      {Movies()}
      {Series()}
    </div>
  );
}
export default MyList;
