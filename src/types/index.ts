export type AnimationIterationCount = number | "infinite";

export type AnimationName =
  | "blow"
  | "drop-in"
  | "glitch"
  | "projector"
  | "washer"
  | "flicker"
  | "elastic"
  | "gravity"
  | "bread"
  | "spin-in"
  | "pulse"
  | "rubber-band"
  | "pogo"
  | "poof"
  | "takeoff";

export type MovieTitleHtmlTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type MovieTitleIntensity = "subtle" | "normal" | "drastic" | "extreme";

export type MovieTitleOptions = {
  animationName: AnimationName;
  perChar?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
  animationIterationCount?: AnimationIterationCount;
  htmlTag?: MovieTitleHtmlTag;
  intensity?: MovieTitleIntensity;
  zIndex?: number;
};

export type MovieTitleProps = MovieTitleOptions & {
  children: string;
  className?: string;
};

export type MovieTitleScene = MovieTitleOptions & {
  title: string;
};

export type MovieTitleSequenceProps = {
  titles: MovieTitleScene[];
  loop?: boolean;
  className?: string;
  zIndex?: number;
};
