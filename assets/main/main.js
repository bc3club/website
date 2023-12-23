// smooth scroll

const returnToTop = document.querySelector(".bc3-text");
const returnToBottom = document.querySelector(".know-more-text");

returnToTop.addEventListener("click", () => {
  lenis.scrollTo("top", {
    duration: 2,
    ease: "power2.out",
  });
});

returnToBottom.addEventListener("click", () => {
  lenis.scrollTo("bottom", {
    duration: 2,
    ease: "power2.out",
  });
});

// lenis scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
