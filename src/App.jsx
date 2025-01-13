import { Fragment, useEffect, useState } from "react";
import { Counter } from "./components/counter/counter";
import Person_Data from "./assets/data/person.json";

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

const App = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  useEffect(() => {
    console.log("useEffect hook ran");
    setPerson(Person_Data);
  }, []);

  useEffect(() => {
    console.log("this effect ran");
    const handler = setTimeout(() => {
      if (person.age < 18) {
        alert("this person is underage");
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [person.age]);

  return (
    <Fragment>
      <div className="container">
        <h1>React Basics Course</h1>
        <h3 style={{ marginBlock: "5px" }}>useEffect exercise</h3>
        <Counter />
        {/* <div className="list">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> */}

        {/* <div style={{ marginBlock: "20px" }}>
          <PersonDetailsForm person={person} setPerson={setPerson} />
          {Boolean(person?.name || person.age) && (
            <PersonDetails person={person} />
          )}
        </div>

        <div>
          {!!person.age && <PersonAgeCertificate isAdult={person.age >= 18} />}
        </div> */}
      </div>
    </Fragment>
  );
};

export default App;
