"use strict";

//navbar menu
const menuIcon = document.querySelector(".navbar-toggler");

//side navbar
const closeBtn = document.querySelector(".close-btn");
const sideNavBar = document.querySelector("#sideNavbar");
const overlay = document.querySelector(".overlay");
const sideCompanyTab = document.querySelector("#side-company");
const sideFeaturesTab = document.querySelector("#side-features");

//open side navbar
menuIcon.addEventListener("click", openSideNavbar);

//close side navbar
closeBtn.addEventListener("click", closeSideNavbar);

//openSidenavbar function
function openSideNavbar() {
  sideNavBar.classList.add("show");
  overlay.classList.remove("hide");
}

//closeNavbar function
function closeSideNavbar() {
  // hide overlay and sidenavbar
  overlay.classList.add("hide");
  sideNavBar.classList.remove("show");
}

/* *****************************************************
side navbar dropdowns 
************************************************/
sideFeaturesTab.addEventListener("click", showTab);
sideCompanyTab.addEventListener("click", showTab2);

//function show tab
function showTab() {
  const sideFeatures = sideFeaturesTab.nextElementSibling;
  sideFeatures.classList.toggle("hide");
}

function showTab2() {
  const sideCompany = sideCompanyTab.nextElementSibling;
  sideCompany.classList.toggle("hide");
}
