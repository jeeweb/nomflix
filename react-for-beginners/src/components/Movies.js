import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }){
  return <div>
  <img src={coverImg} alt={title} />
  <h2>{title}</h2>
  <p>{summary}</p>
  <ul>
    <li>
      {genres.map(genre => <li key={genre}>{genre}</li>)}
    </li>
  </ul>
</div>;
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
}

export default Movie;