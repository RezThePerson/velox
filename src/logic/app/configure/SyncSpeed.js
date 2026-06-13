import { store } from "../../store.js";

const numberInput = document.getElementById("speed-number");
const rangeInput = document.getElementById("speed-range");

function updateSpeed(value) {
  const speed = parseInt(value, 10);
  if (numberInput) numberInput.value = speed;
  if (rangeInput) rangeInput.value = speed;

  store.speed = speed;

  window.dispatchEvent(new CustomEvent("speedChange", { detail: { speed } }));
}

numberInput?.addEventListener("input", (e) => {
  updateSpeed(e.target.value);
});

rangeInput?.addEventListener("input", (e) => {
  updateSpeed(e.target.value);
});
