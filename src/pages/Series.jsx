import axios from "axios";
import { useState, useEffect } from "react";
import SerieList from "../components/SerieList";

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=4539e789e1113b8e26ac23fdc6cfe03d"
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

export default Series;
