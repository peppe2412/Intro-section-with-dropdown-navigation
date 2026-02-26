import { features } from "./features.js";
import { company } from "./company.js";
import { closeSidebar, companySidebar, featuresSidebar, openSidebar } from "./sidebar.js";

const featuresDropdown = document.querySelector("#features-dropdown");
const companyDropdown = document.querySelector("#company-dropdown");
const open_sidebar = document.querySelector("#menu-sidebar");
const close_sidebar = document.querySelector(".close-menu-box");
const featuresDropdownSidebar = document.querySelector("#features-dropdown-sidebar")
const companyDropdownSidebar = document.querySelector("#company-dropdown-sidebar")

featuresDropdown.addEventListener("click", features);
companyDropdown.addEventListener("click", company);
open_sidebar.addEventListener("click", openSidebar);
close_sidebar.addEventListener("click", closeSidebar);
featuresDropdownSidebar.addEventListener("click", featuresSidebar)
companyDropdownSidebar.addEventListener("click", companySidebar)