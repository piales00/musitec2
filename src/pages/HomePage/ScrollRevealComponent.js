import { useEffect } from 'react';

const ScrollRevealComponent = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // header container
    ScrollReveal().reveal(".header__container p", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(".header__container h1", {
      ...scrollRevealOption,
      delay: 500,
    });

    // us container
    ScrollReveal().reveal(".us__image img", {
      ...scrollRevealOption,
      origin: "left",
    });

    ScrollReveal().reveal(".us__content .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".us__content .section__header", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".us__content .section__description", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".us__btn", {
      ...scrollRevealOption,
      delay: 2000,
    });

    // services container
    ScrollReveal().reveal(".services__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    // benefits container
    ScrollReveal().reveal(".benefits__list li", {
      ...scrollRevealOption,
      interval: 500,
      origin: "right",
    });
  }, []);

  return null;
};

export default ScrollRevealComponent;