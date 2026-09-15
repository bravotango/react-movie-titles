import { useEffect, useState } from "react";
import MovieTitle from "./MovieTitle";

import styles from "./MovieTitleSequence.module.css";
import type { MovieTitleSequenceProps } from "../types";

const MovieTitleSequence = ({
  titles,
  loop = false,
  className = "",
  zIndex = 1,
}: MovieTitleSequenceProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (titles.length === 0) {
      return;
    }

    const currentTitle = titles[currentTitleIndex];

    const duration = currentTitle.duration ?? 1;
    const delay = currentTitle.delay ?? 0;
    const stagger = currentTitle.stagger ?? 0.0;
    const iterations = currentTitle.animationIterationCount ?? 1;

    if (iterations === "infinite") {
      return;
    }

    const staggerDuration = currentTitle.perChar
      ? Math.max(currentTitle.title.length - 1, 0) * stagger
      : 0;

    const totalAnimationDuration =
      delay + staggerDuration + duration * iterations;

    const timeout = window.setTimeout(() => {
      const isLastTitle = currentTitleIndex === titles.length - 1;

      if (isLastTitle) {
        if (!loop) {
          return;
        }

        setCurrentTitleIndex(0);
        setCycle((currentCycle) => currentCycle + 1);
        return;
      }

      setCurrentTitleIndex((currentIndex) => currentIndex + 1);
    }, totalAnimationDuration * 1000);

    return () => window.clearTimeout(timeout);
  }, [currentTitleIndex, loop, titles]);

  if (titles.length === 0) {
    return null;
  }

  const currentTitle = titles[currentTitleIndex];

  const sequenceClassName = [styles["movie-title-sequence"], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={sequenceClassName}>
      <MovieTitle
        key={`${currentTitleIndex}-${cycle}`}
        animationName={currentTitle.animationName}
        perChar={currentTitle.perChar}
        delay={currentTitle.delay}
        duration={currentTitle.duration}
        stagger={currentTitle.stagger}
        animationIterationCount={currentTitle.animationIterationCount}
        htmlTag={currentTitle.htmlTag}
        intensity={currentTitle.intensity}
        zIndex={zIndex}
      >
        {currentTitle.title}
      </MovieTitle>
    </div>
  );
};

export default MovieTitleSequence;
