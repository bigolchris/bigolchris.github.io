// const root = document.documentElement;

// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
//   "--marquee-elements-displayed"
// );

// const marqueeContent = document.querySelector("div.data-container");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for (let i = 0; i < marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }

// console.log(root);

// console.log(marqueeContent);

// let nav = document.querySelector(".nav-menu");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("hide")) {
    nav.classList.add("show");
    nav.classList.remove("hide");
  } else {
    nav.classList.remove("show");
    nav.classList.add("hide");
  }
});
// navToggle.addEventListener("click", () => {
//   if (nav.classList.contains("show")) {
//     nav.classList.remove("show");
//     nav.classList.add("nav-open");
//   } else {
//     nav.classList.remove("show");
//   }
// });
