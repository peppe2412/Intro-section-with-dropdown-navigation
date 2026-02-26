const featuresContent = document.querySelector("#features-dropdown-content");
const arrowDown = document.querySelectorAll(".arrow-down");
const arrowUp = document.querySelectorAll(".arrow-up");

let isOpen = true;

export function features() {
  if (isOpen) {
    featuresContent.classList.remove("display-none");
    arrowDown.forEach((arrow) => arrow.classList.add("display-none"));
    arrowUp.forEach((arrow) => arrow.classList.remove("display-none"));
  } else {
    featuresContent.classList.add("display-none");
    arrowDown.forEach((arrow) => arrow.classList.remove("display-none"));
    arrowUp.forEach((arrow) => arrow.classList.add("display-none"));
  }

  isOpen = !isOpen;
}
