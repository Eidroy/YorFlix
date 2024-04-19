import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4539e789e1113b8e26ac23fdc6cfe03d`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="Details">
      <h1>{movie.title}</h1>
      <img src={posterUrl} alt={movie.title} />
      <p>Release Year: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  );
}

export default MovieDetail;

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
