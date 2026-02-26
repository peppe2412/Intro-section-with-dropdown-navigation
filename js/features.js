const featuresContent = document.querySelector("#features-dropdown-content");
const arrowDown = document.querySelector(".features-arrow-down");
const arrowUp = document.querySelector(".features-arrow-up");

let isOpen = true;

export function features() {
  if (isOpen) {
    featuresContent.classList.remove("display-none");
    arrowDown.classList.add("display-none");
    arrowUp.classList.remove("display-none");
  } else {
    featuresContent.classList.add("display-none");
    arrowDown.classList.remove("display-none");
    arrowUp.classList.add("display-none");
  }

  isOpen = !isOpen;
}
