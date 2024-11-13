const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
let value = "#FFFFFF";

// btn.addEventListener("click", function () {
//   main.style["background-color"] = color.innerHTML.trim().toUpperCase();
// });

color.addEventListener("focus", function () {
  value = color.innerHTML;
});

color.addEventListener("blur", function () {
  const potentialValue = color.innerHTML;

  if (/^#[0-9A-F]{6}$/i.test(formatHexColor(potentialValue))) {
    value = potentialValue;
  } else {
    color.innerHTML = value;
  }

  main.style["background-color"] = formatHexColor(value);
});

color.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    color.blur();
    event.preventDefault();
  }
});

function formatHexColor(text) {
  return text.trim().toUpperCase();
}
