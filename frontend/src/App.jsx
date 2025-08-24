// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MealPicker from "./pages/MealPicker";
import WeeklyPlan from "./pages/WeeklyPlan";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MealPicker />} />
        <Route path="/weekly-plan" element={<WeeklyPlan />} />
      </Routes>
    </Router>
  );
}

export default App;