import { useEffect, useState } from "react";
import "./App.css";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact-us";
import { HomePage } from "./pages/home";
import { SingleRecipe } from "./pages/home/single-recipe";

function App() {
  const [shownScreen, setShownScreen] = useState("home");
  useEffect(() => {
    const url = window.location.href;
    const path = url.split("/").pop();
    const shownScreen = path === "" ? "home" : path;
    console.log(shownScreen);
    setShownScreen(shownScreen);
  }, []);
  return (
    <div className="app">
      {shownScreen === "home" && <HomePage />}
      {!isNaN(Number(shownScreen)) && <SingleRecipe />}
      {shownScreen === "about" && <AboutPage />}
      {shownScreen === "contact" && <ContactPage />}
    </div>
  );
}

export default App;
