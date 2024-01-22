const MovieCard = ({ movie1 }) => {
  console.log("movie data:", movie1);
  return (
    <div className="movie">
      <div>
        <p>{movie1.title}</p>
      </div>
      <div >
        <img
          src={
            movie1.poster_path && movie1.poster_path !== 'N/A'
              ? `https://image.tmdb.org/t/p/w500/${movie1.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={movie1.title}
        />
      </div>
      <div>
        <span>{movie1.popularity}</span>
        <h3>{movie1.title}</h3>
        {
          movie1.adult?(<h3>Adult content</h3>):(<h3> NonAdult content</h3>)
        }
      </div>
    </div>
  );
};
export default MovieCard;
