# JS30 - 01 Drum Kit

A browser-based drum machine built with plain HTML, CSS, and JavaScript.

## Overview

This project plays drum samples when you press keys on the keyboard or click the on-screen pads. Each interaction also triggers a short visual animation on the matching drum key.

## Features

- Keyboard support for A, S, D, F, G, H, J, K, L
- Mouse click support on every drum key
- Fast retrigger playback using `audio.currentTime = 0`
- Active key animation with CSS transitions
- Responsive, modern UI with background overlay

## Key Map

- A -> clap
- S -> hithat
- D -> kick
- F -> openhat
- G -> boom
- H -> ride
- J -> snare
- K -> tom
- L -> tink

## Getting Started

1. Open `01_DrumKit` in VS Code.
2. Run with any static file server, or open `index.html` directly in a browser.
3. Press keys A-L or click pads to play sounds.

## Project Files

- `index.html` - Drum key markup and linked audio elements
- `style.css` - Layout, theme, transitions, and responsive styles
- `script.js` - Keyboard/click handlers and playback logic
- `bgimg.jpg` - Background image
- `sounds/` - Drum audio samples