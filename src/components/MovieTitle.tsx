import type { CSSProperties } from "react";
import styles from "./MovieTitle.module.css";
import { MovieTitleProps } from "../types";

const intensityValues = {
  subtle: 0.5,
  normal: 1,
  drastic: 1.5,
  extreme: 2,
} as const;

const MovieTitle = ({
  animationName,
  perChar = false,
  children,
  delay = 0,
  duration = 1,
  stagger = 0.12,
  animationIterationCount = 1,
  className = "",
  htmlTag = "h1",
  intensity = "normal",
  zIndex = 1,
}: MovieTitleProps) => {
  const HtmlTag = htmlTag;

  const movieTitleClassName = [styles["movie-title"], className]
    .filter(Boolean)
    .join(" ");

  const movieTitleStyle = {
    "--movie-title-intensity": intensityValues[intensity],
    zIndex,
  } as CSSProperties;

  return (
    <div className={styles["movie-title-container"]} style={{ zIndex }}>
      <HtmlTag className={movieTitleClassName} style={movieTitleStyle}>
        {perChar ? (
          [...children].map((character, index) => (
            <span
              key={`${character}-${index}`}
              className={`${styles["movie-title__character"]} ${styles[animationName]}`}
              style={{
                animationDelay: `${delay + index * stagger}s`,
                animationDuration: `${duration}s`,
                animationIterationCount,
              }}
            >
              {character === " " ? "\u00A0" : character}
            </span>
          ))
        ) : (
          <span
            className={`${styles["movie-title__word"]} ${styles[animationName]}`}
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              animationIterationCount,
            }}
          >
            {children}
          </span>
        )}
      </HtmlTag>
    </div>
  );
};

export default MovieTitle;
