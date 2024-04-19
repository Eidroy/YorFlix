import SerieCard from "./SerieCard";

import PropTypes from "prop-types";

function SerieList({ series }) {
  return (
    <div className="Serielist">
      {series.map((serie) => (
        <SerieCard key={serie.id} serie={serie} />
      ))}
    </div>
  );
}

SerieList.propTypes = {
  series: PropTypes.array.isRequired,
};

export default SerieList;
