import styles from "./movies.module.css";
export const MovieCard = ({ movie }) => {
  return (
    <div
      className={styles.card}
      style={{
        background: movie.rating > 3 ? "#f4f4f4" : "#fff",
      }}
    >
      <img src={movie.image} alt={movie.title} width={200} height={300} />
      <h3>{movie.title}</h3>
      <div className={styles["length-release"]}>
        <p>{movie.release}</p>
        <p>{movie.length}</p>
      </div>
      <p>{movie.genres.join(", ")}</p>
      <p>{movie.rating}</p>
    </div>
  );
};
