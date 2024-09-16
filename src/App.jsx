import "./App.css";
import FoodListing from "./components/food/food-list";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Apis in React</h1>
      <h2 style={{ textAlign: "center" }}>Food Recipes</h2>
      <FoodListing />
    </>
  );
}

export default App;
