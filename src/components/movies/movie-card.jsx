export const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} width={200} height={300} />
      <h3>{movie.title}</h3>
      <div className="length_release">
        <p>{movie.release}</p>
        <p>{movie.length}</p>
      </div>
      <p>{movie.genres.join(", ")}</p>
    </div>
  );
};
