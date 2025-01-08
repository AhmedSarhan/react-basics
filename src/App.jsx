import { Fragment } from "react";
import { Counter } from "./components/counter/counter";

import { MovieCard } from "./components/movies/movie-card";
import { PersonDetails } from "./components/person-details/person-details";
import { PersonAgeCertificate } from "./components/person-details/person-age-certificate";

import "./App.css";
import { PersonDetailsForm } from "./components/person-details/person-details-form";

const movies = [
  {
    id: 1,
    image:
      "https://www.sonypictures.ca/sites/canada/files/2022-12/DP_6390172_SpiderMan_NoWayHome_2000x3000_EST_1333x2000_thumbnail-min-min.jpg",
    title: "Spider-man: No Way Home",
    release: "2021",
    length: "2h 28min",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 3,
  },
  {
    id: 2,
    image: "https://i.redd.it/xe73a62eq0n81.jpg",
    title: "The Batman",
    release: "2022",
    length: "2h 55min",
    genres: ["Action", "Crime", "Drama"],
    rating: 4,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu0yJ6jMU5CB7693rX-tgGuTwXwP6kFhc3Q&s",
    title: "The Matrix Resurrections",
    release: "2021",
    length: "2h 28min",
    genres: ["Action", "Sci-Fi"],
    rating: 5,
  },
];
const person = {
  name: "John",
  age: 17,
};
const App = () => {
  return (
    <Fragment>
      <div className="container">
        <Counter />
        <div className="list">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div>
          <PersonDetailsForm />
          <PersonDetails person={person} />
        </div>
        <div>
          <PersonAgeCertificate isAdult={person.age > 18} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;

/* 
  1. display person name input in the person details
  2. display person age input in the person details
  3. display whether the person is adult or not based on person details
  4. hide / show person age certificate message based on do we have an age or not (Bonus)


  hints:
  1. input have props / attributes: value, onChange
  2. useConditionalRendering
  3. use props
*/
