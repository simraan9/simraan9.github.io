// TAB SWITCHING
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// INFO TOOLTIP
const infoToggle = document.getElementById("infoToggle");
const infoTooltip = document.getElementById("infoTooltip");

infoToggle.addEventListener("click", () => {
  infoTooltip.classList.toggle("hidden");
});

// KEYBOARD EASTER EGG
document.addEventListener("keydown", (e) => {
  if (e.key === "?") {
    alert("Yes, this page is also a design exercise 🙂");
  }
});
