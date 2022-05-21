"use strict";

//navbar menu
const menuIcon = document.querySelector(".navbar-toggler");

//side navbar
const closeBtn = document.querySelector(".close-btn");
const sideNavBar = document.querySelector("#sideNavbar");
const overlay = document.querySelector(".overlay");
const sideCompanyTab = document.querySelector("#side-company");
const sideFeaturesTab = document.querySelector("#side-features");
const sideTabs = document.querySelectorAll(".sideTab");

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

for (const sideTab of sideTabs) {
  sideTab.addEventListener("click", function () {
    //toggle the hide class to reveal the list
    this.nextElementSibling.classList.toggle("hide");

    //make the icon change when the naviagtion tabs are clicked on mobile mode
    const arrowIcon = this.firstElementChild;
    console.log(arrowIcon);

    if (this.nextElementSibling.classList.contains("hide")) {
      arrowIcon.src = "images/icon-arrow-down.svg";
    } else {
      arrowIcon.src = "images/icon-arrow-up.svg";
    }
  });
}
