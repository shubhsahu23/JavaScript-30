# Analog Clock

A simple analog clock built with HTML, CSS, and JavaScript.

## Features

- Live hour, minute, and second hand updates
- Smooth hand animation with jump-glitch handling at rollover
- Responsive clock sizing for mobile and desktop
- Custom modern visual design using CSS variables and gradients

## Project Files

- index.html: Clock markup and hand elements
- style.css: Layout, theme, and responsive styling
- script.js: Time calculations and hand rotation updates

## How To Run

1. Open index.html in your browser.
2. The clock initializes immediately on load.
3. Time updates every second.

## How It Works

- JavaScript reads the current time using Date.
- Each hand is rotated by converting time units to degrees.
- A 90-degree offset aligns JavaScript rotation with the initial CSS hand direction.
- Transitions are temporarily disabled at rollover points to prevent long reverse spins.
