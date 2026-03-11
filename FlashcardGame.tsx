@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Noto+Sans+TC:wght@400;700;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Noto Sans TC", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Lilita One", "Noto Sans TC", sans-serif;
  --color-splat-pink: #FF007B;
  --color-splat-yellow: #E8FF00;
  --color-splat-green: #00FF00;
  --color-splat-cyan: #00FFFF;
  --color-splat-purple: #6B00FF;
  --color-ink-black: #111111;
}

body {
  background-color: #111111;
  background-image: radial-gradient(#333 3px, transparent 3px);
  background-size: 24px 24px;
  color: white;
  font-family: "Noto Sans TC", sans-serif;
  overflow-x: hidden;
}

.brutal-shadow {
  box-shadow: 8px 8px 0px 0px #111111;
}
.brutal-shadow-white {
  box-shadow: 6px 6px 0px 0px #ffffff;
}
.brutal-shadow-pink {
  box-shadow: 6px 6px 0px 0px #FF007B;
}

.skew-container {
  transform: skew(-2deg);
}
@media (min-width: 768px) {
  .skew-container {
    transform: skew(-4deg);
  }
}
.unskew-content {
  transform: skew(2deg);
}
@media (min-width: 768px) {
  .unskew-content {
    transform: skew(4deg);
  }
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #111;
}
::-webkit-scrollbar-thumb {
  background: #FF007B;
  border: 2px solid #111;
  border-radius: 10px;
}
