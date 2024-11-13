const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

let value = "#FFFFFF";

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomElement(hex)];
  }

  main.style["background-color"] = hexColor;
  color.innerHTML = " " + hexColor + " ";
});

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

function getRandomElement(array) {
  return Math.floor(Math.random() * array.length);
}
