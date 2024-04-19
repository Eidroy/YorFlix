import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

function MovieList({ movies }) {
  return (
    <div className="Movielist">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
