# @bravotango/react-movie-titles

Cinematic title animations for React.

`@bravotango/react-movie-titles` provides reusable React components for animated titles, character-by-character effects, animation intensity controls, and sequenced title transitions.

---

## Features

- 🎬 Reusable cinematic title animations
- 🔤 Animate entire titles or individual characters
- 🎚 Adjustable animation intensity
- ⏱ Configurable duration, delay, and character stagger
- 🔁 Support for repeated and infinite animations
- 🎞 Sequence multiple animated titles automatically
- 🏷 Semantic HTML tags including `h1` through `h6` and `p`
- 🧱 Configurable `z-index` for layering titles over content
- 🎨 CSS Modules with bundled animation keyframes
- ⚛️ Built for React and TypeScript

---

## Installation

```bash
npm install @bravotango/react-movie-titles
```

Or with pnpm:

```bash
pnpm add @bravotango/react-movie-titles
```

---

## Import

```tsx
import {
  MovieTitle,
  MovieTitleSequence,
  type MovieTitleScene,
} from "@bravotango/react-movie-titles";

import "@bravotango/react-movie-titles/index.css";
```

---

# MovieTitle

Use `MovieTitle` to display a single animated title.

```tsx
import { MovieTitle } from "@bravotango/react-movie-titles";

const Example = () => {
  return (
    <MovieTitle
      animationName="elastic"
      duration={4}
      intensity="normal"
      htmlTag="h1"
    >
      Welcome to my World
    </MovieTitle>
  );
};
```

---

## Character Animations

Set `perChar` to animate each character independently.

```tsx
<MovieTitle
  animationName="glitch"
  perChar
  duration={6}
  stagger={0.05}
  intensity="drastic"
>
  Signal Lost
</MovieTitle>
```

The `stagger` value determines how long the component waits before starting the animation on the next character.

---

## Animation Intensity

Animations support four intensity levels:

```ts
"subtle";
"normal";
"drastic";
"extreme";
```

Example:

```tsx
<MovieTitle animationName="rubber-band" intensity="extreme">
  Stretch
</MovieTitle>
```

Intensity modifies characteristics such as movement distance, rotation, scale, distortion, and blur while preserving the timing and personality of the animation.

`normal` represents the animation's standard behavior.

---

## Semantic HTML

Choose which HTML element renders the title with `htmlTag`.

Supported elements:

```ts
"h1";
"h2";
"h3";
"h4";
"h5";
"h6";
"p";
```

Example:

```tsx
<MovieTitle animationName="projector" htmlTag="h2">
  Now Showing
</MovieTitle>
```

The default element is:

```tsx
h1;
```

---

## Layering

Use `zIndex` when multiple animated elements need to appear at different levels.

```tsx
<MovieTitle animationName="flicker" zIndex={20}>
  Foreground Title
</MovieTitle>
```

The consuming application remains responsible for deciding how titles should be layered within its layout.

---

# MovieTitleSequence

`MovieTitleSequence` automatically plays multiple title scenes one after another.

```tsx
import {
  MovieTitleSequence,
  type MovieTitleScene,
} from "@bravotango/react-movie-titles";

const movieTitles: MovieTitleScene[] = [
  {
    title: "Welcome to my World",
    animationName: "elastic",
    perChar: true,
    delay: 0,
    duration: 6,
    animationIterationCount: 2,
    htmlTag: "h1",
    intensity: "normal",
  },
  {
    title: "@bravotango/circadian-tokens",
    animationName: "poof",
    perChar: true,
    delay: 0,
    duration: 8,
    animationIterationCount: 1,
    htmlTag: "h2",
    intensity: "drastic",
  },
  {
    title: "Live Weather, Time of Day, and Season",
    animationName: "blow",
    perChar: true,
    delay: 0,
    duration: 8,
    animationIterationCount: 1,
    htmlTag: "p",
    intensity: "subtle",
  },
];

const Example = () => {
  return <MovieTitleSequence titles={movieTitles} zIndex={10} loop />;
};
```

The sequence calculates how long each scene needs to complete based on its:

- delay
- duration
- animation iteration count
- character stagger

The next title begins after the current title has completed.

---

## Looping Sequences

Set `loop` to continuously restart the sequence.

```tsx
<MovieTitleSequence titles={movieTitles} loop />
```

---

## Available Animations

```ts
"blow";
"bread";
"drop-in";
"elastic";
"flicker";
"glitch";
"gravity";
"incoming";
"pogo";
"poof";
"projector";
"pulse";
"rubber-band";
"spin-in";
"washer";
```

Each animation has its own movement and visual behavior while supporting the shared intensity system where appropriate.

---

## MovieTitle Props

| Prop                      | Type                   | Default    | Description                               |
| ------------------------- | ---------------------- | ---------- | ----------------------------------------- |
| `animationName`           | `AnimationName`        | required   | Animation to apply                        |
| `children`                | `string`               | required   | Title text                                |
| `perChar`                 | `boolean`              | `false`    | Animate individual characters             |
| `delay`                   | `number`               | `0`        | Delay before animation starts, in seconds |
| `duration`                | `number`               | `1`        | Animation duration, in seconds            |
| `stagger`                 | `number`               | `0.12`     | Delay between character animations        |
| `animationIterationCount` | `number \| "infinite"` | `1`        | Number of animation repetitions           |
| `htmlTag`                 | `MovieTitleHtmlTag`    | `"h1"`     | HTML element used for the title           |
| `intensity`               | `MovieTitleIntensity`  | `"normal"` | Strength of the animation                 |
| `zIndex`                  | `number`               | `1`        | Starting stacking level                   |
| `className`               | `string`               | `""`       | Additional CSS class                      |

---

## MovieTitleScene

A `MovieTitleScene` describes one title within a `MovieTitleSequence`.

```ts
type MovieTitleScene = {
  title: string;
  animationName: AnimationName;
  perChar?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
  animationIterationCount?: number | "infinite";
  htmlTag?: MovieTitleHtmlTag;
  intensity?: MovieTitleIntensity;
};
```

`zIndex` belongs to the sequence rather than individual scenes because only one title scene is displayed at a time.

---

## MovieTitleSequence Props

| Prop        | Type                | Default  | Description                     |
| ----------- | ------------------- | -------- | ------------------------------- |
| `titles`    | `MovieTitleScene[]` | required | Titles played by the sequence   |
| `loop`      | `boolean`           | `false`  | Restart after the final title   |
| `zIndex`    | `number`            | `1`      | Stacking level for the sequence |
| `className` | `string`            | `""`     | Additional CSS class            |

---

## Styling

The package provides the animation behavior while allowing the consuming application to control typography and presentation.

```css
.my-movie-titles {
  font-size: 3rem;
  font-family: "Oswald", sans-serif;
  color: white;
}
```

```tsx
<MovieTitleSequence
  titles={movieTitles}
  className="my-movie-titles"
  zIndex={20}
/>
```

This keeps animation behavior inside the package while leaving visual styling under the application's control.

---

## Animation Timing

For character-by-character animations, total scene duration includes the stagger between characters.

For example:

```tsx
<MovieTitle
  animationName="elastic"
  perChar
  duration={4}
  stagger={0.1}
  animationIterationCount={2}
>
  Movie Title
</MovieTitle>
```

The animation duration applies to each character, while `stagger` determines when each subsequent character begins.

`MovieTitleSequence` accounts for this automatically before moving to the next scene.

---

## Infinite Animations

Individual titles can run indefinitely:

```tsx
<MovieTitle animationName="projector" animationIterationCount="infinite">
  Now Showing
</MovieTitle>
```

A sequence will remain on a scene using `"infinite"` because that animation never completes.

---

## Related Packages

### @bravotango/circadian-tokens

Transforms live weather data into structured UI tokens for interfaces that respond to real-world environmental conditions.

https://www.npmjs.com/package/@bravotango/circadian-tokens

### @bravotango/circadian-css-variables

Applies Circadian design tokens as CSS variables for use throughout an application.

https://www.npmjs.com/package/@bravotango/circadian-css-variables

### @bravotango/react-image-cycle

A lightweight React component for cycling through image sequences.

https://www.npmjs.com/package/@bravotango/react-image-cycle

---

## License

[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author

Brian Tracy  
https://github.com/bravotango
