import { useState, Fragment } from "react";
import "./App.css";
const movies = [
  {
    image:
      "https://www.sonypictures.ca/sites/canada/files/2022-12/DP_6390172_SpiderMan_NoWayHome_2000x3000_EST_1333x2000_thumbnail-min-min.jpg",
    title: "Spider-man: No Way Home",
    release: "2021",
    length: "2h 28min",
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    image: "https://i.redd.it/xe73a62eq0n81.jpg",
    title: "The Batman",
    release: "2022",
    length: "2h 55min",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu0yJ6jMU5CB7693rX-tgGuTwXwP6kFhc3Q&s",
    title: "The Matrix Resurrections",
    release: "2021",
    length: "2h 28min",
    genres: ["Action", "Sci-Fi"],
  },
];
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className="list">
        {movies.map((movie) => (
          <div className="card">
            <img src={movie.image} alt={movie.title} width={200} height={300} />
            <h3>{movie.title}</h3>
            <div className="length_release">
              <p>{movie.release}</p>
              <p>{movie.length}</p>
            </div>
            <p>{movie.genres.join(", ")}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default App;
