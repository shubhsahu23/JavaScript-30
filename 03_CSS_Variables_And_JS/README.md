# CSS Variables + JavaScript

Interactive mini project from JS30 that updates CSS custom properties in real time using JavaScript.

## What This Project Does

- Lets you control image spacing with a range slider
- Lets you control blur with a range slider
- Lets you change the base accent color with a color picker
- Applies updates instantly by modifying root CSS variables

## Tech Used

- HTML
- CSS (custom properties / variables)
- Vanilla JavaScript

## File Structure

- index.html: Contains markup, styles, and script for the project

## How To Run

1. Open index.html in your browser.
2. Move the Spacing and Blur sliders.
3. Pick a new Base Color.
4. Watch the image styles update live.

## How It Works

- Inputs are selected with:
  - document.querySelectorAll('.controls input')
- Each input calls handleUpdate on:
  - change
  - mousemove
- JavaScript reads input name/value and optional data-sizing attribute.
- CSS variable is updated through:
  - document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

### Example

- spacing slider value 24 with data-sizing="px" updates:
  - --spacing: 24px
- base color input value #ff0000 updates:
  - --base: #ff0000

## Notes

- The data-sizing attribute is required for properties that need units (like px).
- Color values do not need a unit suffix.
