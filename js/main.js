import { features } from "./features.js";
import { company } from "./company.js";

const featuresDropdown = document.querySelector("#features-dropdown");
const companyDropdown = document.querySelector("#company-dropdown");

featuresDropdown.addEventListener("click", features);
companyDropdown.addEventListener("click", company)
