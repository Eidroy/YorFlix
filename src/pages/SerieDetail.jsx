import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SerieDetail() {
  const { id } = useParams();
  const [serie, setSerie] = useState();

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=4539e789e1113b8e26ac23fdc6cfe03d`
        );
        const data = await response.json();
        setSerie(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSerie();
  }, [id]);

  if (!serie) {
    return <div>Loading...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

  return (
    <div className="Details">
      <h1>{serie.name}</h1>
      <img src={posterUrl} alt={serie.name} />
      <p>First Air Date: {serie.first_air_date}</p>
      <p>Rating: {serie.vote_average}</p>
      <p>Overview: {serie.overview}</p>
    </div>
  );
}

export default SerieDetail;

SerieDetail.propTypes = {
  serie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
