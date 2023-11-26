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

// card animation

let card = document.querySelector(".card");

let animationCard = gsap.to(".card-info", {
  paused: true,
  y: -254,
  ease: "expo.out",
});

card.addEventListener("mouseenter", () => animationCard.play());
card.addEventListener("mouseleave", () => animationCard.reverse());
