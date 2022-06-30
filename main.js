const display = document.querySelector("[data-display]");
const caclButtons = Array.from(document.querySelectorAll("button"));

caclButtons.forEach((calc) => {
  calc.addEventListener("click", (e) => {
    if (e.target.classList.contains("equal")) {
      try {
        return (display.innerHTML = eval(display.innerHTML));
      } catch {
        return (display.innerHTML = "error");
      }
    }
    if (display.innerHTML === "error") {
      display.innerHTML = "";
    }
    display.innerHTML += e.target.innerHTML;
  });
});
