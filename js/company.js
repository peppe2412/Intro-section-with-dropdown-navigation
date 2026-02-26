const companyContent = document.querySelector("#company-dropdown-content");
const arrowDown = document.querySelector(".company-arrow-down");
const arrowUp = document.querySelector(".company-arrow-up");

let isOpen = true;

export function company() {
  if (isOpen) {
    companyContent.classList.remove("display-none");
    arrowDown.classList.add("display-none");
    arrowUp.classList.remove("display-none");
  } else {
    companyContent.classList.add("display-none");
    arrowDown.classList.remove("display-none");
    arrowUp.classList.add("display-none");
  }

  isOpen = !isOpen;
}
