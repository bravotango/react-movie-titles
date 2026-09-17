import React from "react";
import { createRoot } from "react-dom/client";

import { MovieTitleSequence, type MovieTitleScene } from "../src";

const movieTitles: MovieTitleScene[] = [
  {
    title: "Welcome to my World",
    animationName: "blow",
    perChar: true,
    delay: 0,
    stagger: 0.05,
    duration: 4,
    animationIterationCount: 1,
  },
  {
    title: "React Movie Titles",
    animationName: "takeoff",
    perChar: true,
    delay: 0,
    stagger: 0.05,
    duration: 4,
    animationIterationCount: 1,
  },
  {
    title: "Animations Made Easy",
    animationName: "washer",
    perChar: true,
    delay: 0,
    duration: 8,
    stagger: 0.05,
    animationIterationCount: 1,
  },
];

const App = () => {
  return (
    <main>
      <MovieTitleSequence titles={movieTitles} loop />
    </main>
  );
};

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
