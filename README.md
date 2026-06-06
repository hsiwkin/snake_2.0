# Snake 2.0

A small Snake game implemented in vanilla TypeScript with Vite.

This project is an experiment in keeping the game logic explicit: board state, snake movement, food generation, keyboard input, and drawing are split into small modules rather than hidden inside a framework.

## Demo

[Play on GitHub Pages](https://hsiwkin.github.io/snake_2.0/)

## Features

- Classic Snake-style movement
- Keyboard controls with arrow keys and WASD
- Canvas-style drawing helpers for the board, snake, and food
- Food regeneration after eating
- Direction validation to prevent immediate reverse movement
- Basic Jest coverage for input direction logic
- GitHub Pages deployment workflow

## Stack

- TypeScript
- Vite
- Jest
- ts-jest
- GitHub Actions / GitHub Pages

## Controls

| Action | Keys |
| --- | --- |
| Move up | `ArrowUp` / `W` |
| Move down | `ArrowDown` / `S` |
| Move left | `ArrowLeft` / `A` |
| Move right | `ArrowRight` / `D` |

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

Build:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Project Structure

```text
src/gameobjects/         Snake, food, and base game object classes
src/logic/               Board state, drawing, input handling, and game loop
src/utils/               Color and point helpers
architecture/            Notes about movement and game-flow decisions
```

## Project Status

This is a small browser-game project, not a finished product.

Useful next improvements would be:

- queue fast direction changes more reliably
- add broader tests around movement and food regeneration
- add a short gameplay GIF or screenshot
- improve game-over and restart behavior
