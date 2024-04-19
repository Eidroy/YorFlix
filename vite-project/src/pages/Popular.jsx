import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import SerieList from "../components/SerieList";

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4539e789e1113b8e26ac23fdc6cfe03d"
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

function PopularSeries() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=4539e789e1113b8e26ac23fdc6cfe03d"
      )
      .then((response) => {
        setSeries(response.data.results);
      });
  }, []);

  return (
    <div className="Homepage">
      <h1>TV Shows</h1>
      <SerieList series={series} />
    </div>
  );
}

function Popular() {
  return (
    <div>
      {PopularMovies()}
      {PopularSeries()}
    </div>
  );
}

export default Popular;
