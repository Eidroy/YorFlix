import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SerieCard = ({ serie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
  // reduce description to avoid overflow issue
  const maxWords = 80;
  let description = serie.overview.split(" ");

  if (description.length > maxWords) {
    description = description.slice(0, maxWords).join(" ") + "...";
  } else {
    description = serie.overview;
  }

  return (
    <div className="serie-card">
      <img src={imageUrl} alt={serie.original_name} />
      <div className="serie-card-right">
        <h2>{serie.original_name}</h2>
        <p className="desc">
          Description: {!description ? "Not available yet!" : description}
        </p>
        <p className="year">Release Year: {serie.first_air_date}</p>
        <Link to={!description ? `/*` : `/tv/${serie.id}`}>
          <button>Go to Show Details</button>
        </Link>
      </div>
    </div>
  );
};

SerieCard.propTypes = {
  serie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    first_air_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SerieCard;
