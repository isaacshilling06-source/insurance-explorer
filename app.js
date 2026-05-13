const exposures = ["Low", "Moderate", "High", "Catastrophic"];
let currentIndex = 0;

document.getElementById("cycle-btn").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % exposures.length;
  const pill = document.getElementById("exposure-pill");
  pill.textContent = exposures[currentIndex];
  pill.setAttribute("data-exposure", exposures[currentIndex]);
});
