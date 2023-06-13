const navMenu = document.getElementById("nav-collapse")
const navToggle = document.getElementById("nav-toggle")
const navItem = document.querySelectorAll(".nav-item")


// open navbar 
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu--open");
    changeIcon();
    // console.log("masuk");
})

//close navbar 
navItem.forEach((item) => {
    item.addEventListener("click", () => {
       if (navMenu.classList.contains("nav-menu--open")) {
         navMenu.classList.remove("nav-menu--open")
       }
       changeIcon();
    })
})

// Change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav-menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// header scroll animation
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("header-area--scroll");
    } else {
      header.classList.remove("header-area--scroll");
    }
  });

  // / ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".home-body, .about-wrapper");

sr.reveal(
  ".skills-content, .portofolio-box, .contact-form, .footer-wrapper",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".contact-item, .col-left", {
  origin: "left",
});




