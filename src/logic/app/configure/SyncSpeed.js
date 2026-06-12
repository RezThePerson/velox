import { store } from "../../store.js";

const numberInput = document.getElementById("speed-number");
const rangeInput = document.getElementById("speed-range");

function updateSpeed(value) {
  numberInput.value = value;
  rangeInput.value = value;

  store.speed = value;
}

numberInput?.addEventListener("input", (e) => {
  updateSpeed(e.target.value);
});

rangeInput?.addEventListener("input", (e) => {
  updateSpeed(e.target.value);
});
