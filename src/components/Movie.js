import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className='movie'>
      <div className='movie_inside'>
        <img
          src={poster}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
          }}
        />
        <div className='movie_data'>
          <h3 className='movie_title'>{title.slice(0, 15)}...</h3>
          <h5 className='movie_year'>{year}</h5>
          <ul>
            {/* {genres.map((genre) => (
          <li>{genre}</li>
        ))} */}
            {genres.map((genre, idx) => {
              return <li key={idx}>[{genre}]</li>;
            })}
          </ul>
          <p className='movie_summary'>{summary.slice(0, 100)}...</p>
        </div>
      </div>
    </div>
  );
}

Movie.propType = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
