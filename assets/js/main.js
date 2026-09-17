/* ==========================================================================
   SYSTEM INITIALIZATION & CLOCK
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  updateClock();
  setInterval(updateClock, 1000);
  initStartMenu();
});

function updateClock() {
  const clockElement = document.getElementById("sys-clock");
  if (!clockElement) return;
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  clockElement.textContent = `${hours}:${minutes} ${ampm}`;
}

/* ==========================================================================
   WIN95 START MENU TOGGLE
   ========================================================================== */
function initStartMenu() {
  const startBtn = document.getElementById("start-btn");
  const startMenu = document.getElementById("start-menu");

  if (!startBtn || !startMenu) return;

  startBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    startMenu.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!startMenu.contains(e.target) && e.target !== startBtn) {
      startMenu.classList.remove("open");
    }
  });
}

/* ==========================================================================
   HIGH-CONTRAST / DARK MODE TOGGLE
   ========================================================================== */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("retro-dark-mode", isDark ? "enabled" : "disabled");
}

// Restore user theme preference on load
if (localStorage.getItem("retro-dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
}
