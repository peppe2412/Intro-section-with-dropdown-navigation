const companyContent = document.querySelector("#company-dropdown-content");
const arrowDown = document.querySelectorAll(".arrow-down");
const arrowUp = document.querySelectorAll(".arrow-up");

let isOpen = true;

export function company() {
  if (isOpen) {
    companyContent.classList.remove("display-none");
    arrowDown.forEach((arrow) => arrow.classList.add("display-none"));
    arrowUp.forEach((arrow) => arrow.classList.remove("display-none"));
  } else {
    companyContent.classList.add("display-none");
    arrowDown.forEach((arrow) => arrow.classList.remove("display-none"));
    arrowUp.forEach((arrow) => arrow.classList.add("display-none"));
  }

  isOpen = !isOpen;
}
