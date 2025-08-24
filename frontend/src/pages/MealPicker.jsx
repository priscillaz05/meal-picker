// src/pages/MealPicker.jsx

import { useState } from "react";
import "./styles/MealPicker.css";

function MealPicker() {
  const [meal, setMeal] = useState("");

  const getMeal = async () => {
    const res = await fetch("http://127.0.0.1:5000/random-meal");
    const data = await res.json();
    setMeal(data.meal);
  };

  return (
    <div className="centered">
      <div id="title">
        What should I cook today?
      </div>

      <br />

      <button onClick={getMeal} className="">
        Pick a Meal
      </button>

      <br /> <br />

      {meal && <div id = "choice">I should cook: <strong>{meal}</strong></div>}
    </div>
  );

}

export default MealPicker;