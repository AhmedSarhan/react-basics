import { useState, Fragment } from "react";
import "./App.css";

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
        <div className="card">
          <img
            src="https://www.sonypictures.ca/sites/canada/files/2022-12/DP_6390172_SpiderMan_NoWayHome_2000x3000_EST_1333x2000_thumbnail-min-min.jpg"
            alt="Spiderman"
            width={200}
            height={300}
          />
          <h3>Spider-man: No Way Home</h3>
          <div className="length_release">
            <p>2021</p>
            <p>2h 28min</p>
          </div>
          <p>Action, Adventure, Fantasy</p>
        </div>
        <div className="card">
          <img
            src="https://i.redd.it/xe73a62eq0n81.jpg"
            alt="The Batman"
            width={200}
            height={300}
          />
          <h3>The Batman</h3>
          <div className="length_release">
            <p>2022</p>
            <p>2h 55min</p>
          </div>
          <p>Action, Crime, Drama</p>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu0yJ6jMU5CB7693rX-tgGuTwXwP6kFhc3Q&s"
            alt="The Matrix Resurrections"
            width={200}
            height={300}
          />
          <h3>The Matrix Resurrections</h3>
          <div className="length_release">
            <p>2021</p>
            <p>2h 28min</p>
          </div>
          <p>Action, Sci-Fi</p>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
