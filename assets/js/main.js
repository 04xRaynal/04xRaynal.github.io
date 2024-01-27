//Changing Title every 20 seconds
window.setInterval(() => changetitle(), 20000);     //20000 millis ~ 20 secs

let interval_no = 0;
function changetitle() {
    if(interval_no % 2 == 0)
        document.title = "Contact Me!";
    else
        document.title = "Raynal | Java developer";

    interval_no++;
}


// ---Show Menu---
//When Nav Toggle Button is clicked the Menu is displayed
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId);

    if(toggle && nav)
        toggle.addEventListener("click", () => nav.classList.toggle("show-menu"));
}

showMenu("nav-toggle", "nav-menu");


// ---Remove Menu Mobile---
//When a Menu Item is clicked the Menu then gets hidden
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(i => i.addEventListener("click", linkAction));


// ---Scroll Section Active Link---
//As the WebPage is navigated the active section is higlighed in the Nav Menu too
const sections = document.querySelectorAll("section[id]"); 

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
        else
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
    });
}

window.addEventListener("scroll", scrollActive);


// ---Change Background Header---
//The background color of the Nav Menu switches its color when the WebPage is scrolled
function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 200)
        header.classList.add("scroll-header");
    else
        header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


// ---Show Scroll Top---
//A Scroll Top button appears at the bottom right when the WebPage is navigated
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if(this.scrollY >= 560)
        scrollTop.classList.add("show-scroll");
    else
        scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);


//Switching Qualification tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => tabContent.classList.remove("qualification__active"));
        target.classList.add("qualification__active");

        tabs.forEach((tab) => tab.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});


// ---MixItUp Filter Portfolio---
//MixItUp JS is used for Portfolio Projects
var mixer = mixitup(".portfolio__container", {
    selectors: {
        target: ".portfolio__content"
    },
    animation: {
        duration: 400
    }
});


// ---Link Active Portfolio---
//The Portfolio Projects Nav Menu Item is highlighted according to the selection made by the user
const linkPortfolio = document.querySelectorAll(".portfolio__item");
linkPortfolio.forEach(i => i.addEventListener("click", activePortfolio));

function activePortfolio() {
    if(linkPortfolio) {
        linkPortfolio.forEach(i => i.classList.remove("active-portfolio"));
        this.classList.add("active-portfolio");
        
        const element = document.querySelectorAll(".portfolio__content");
        element.forEach(i => i.classList.remove("hide-project"));
    }
}


// ---Swiper Carousel---
//Swiper Carousel JS is used in the Skills Container to manage the slides
const mySwiper = new Swiper(".skills__container", {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});


// --- GSAP ---
//GSAP Animations is used to animate the Home Page on startup
gsap.from(".home__img", {opacity: 0, duration: 2, delay: .5, x: 60});
gsap.from(".home__data", {opacity: 0, duration: 2, delay: .8, y: 25});
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {opacity: 0, duration: 2, delay: 1, y: 25, ease:"expo.out", stagger: .2});

gsap.from(".nav__logo .nav__toggle", {opacity: 0, duration: 2, delay: 1.5, y: 25, ease:"expo.out", stagger: .2});
gsap.from(".nav__item", {opacity: 0, duration: 2, delay: 1.8, y: 25, ease:"expo.out", stagger: .2});
gsap.from(".home__social-icon", {opacity: 0, duration: 2, delay: 2.2, y: 25, ease:"expo.out", stagger: .2});
