import { store } from "../store.js";

const startButton = document.getElementById("start-button");
const textInput = document.getElementById("reader-text");

startButton?.addEventListener("click", () => {
  const text = textInput?.value || textInput?.getAttribute('placeholder') || "";
  const speed = store.speed || 300;

  window.dispatchEvent(
    new CustomEvent("startReading", {
      detail: { text, speed },
    })
  );
});
