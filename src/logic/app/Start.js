const startButton = document.getElementById("start-button");
const textInput = document.getElementById("reader-text");
const speedNumber = document.getElementById("speed-number");

startButton?.addEventListener("click", () => {
  const text = textInput?.value || textInput?.placeholder || "";

  window.dispatchEvent(new CustomEvent("startReading"));
});
