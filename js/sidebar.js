const sidebar = document.querySelector("aside");
const overlay = document.querySelector("#overlay");
const featuresContent = document.querySelector(
  "#dropdown-sidebar-content-features",
);
const companyContent = document.querySelector("#company-dropdown-sidebar-content");
const arrowDownFeatures = document.querySelector(".features-arrow-down-sidebar");
const arrowUpFeatures = document.querySelector(".features-arrow-up-sidebar");
const arrowUpCompany = document.querySelector(".company-arrow-up-sidebar");
const arrowDownCompany = document.querySelector(".company-arrow-down-sidebar");

let isOpen = true;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeSidebar();
  }
});

export function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.remove("display-none");
  document.body.style.overflowY = "hidden";
  sidebar.style.overflowY = "scroll";
}

export function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.add("display-none");
  document.body.style.overflowY = "scroll";
}

export function featuresSidebar() {
  if (isOpen) {
    featuresContent.classList.add("open");
    arrowDownFeatures.classList.add("display-none");
    arrowUpFeatures.classList.remove("display-none");
  } else {
    featuresContent.classList.remove("open");
    arrowDownFeatures.classList.remove("display-none");
    arrowUpFeatures.classList.add("display-none");
  }

  isOpen = !isOpen;
}

export function companySidebar() {
  if (isOpen) {
    companyContent.classList.add("open");
    arrowDownCompany.classList.add("display-none");
    arrowUpCompany.classList.remove("display-none");
  } else {
    companyContent.classList.remove("open");
    arrowDownCompany.classList.remove("display-none");
    arrowUpCompany.classList.add("display-none");
  }

  isOpen = !isOpen;

}
