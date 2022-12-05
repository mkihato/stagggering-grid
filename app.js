const boxes = document.querySelectorAll(".box");
const click = document.querySelector(".button");
const click2 = document.querySelector(".button2");

// click.addEventListener("click", () => animation.play());

let animation = anime({
  targets: boxes,
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 2000 },
  ],
  autoplay: false,
  loop: true,
  delay: anime.stagger(200, { grid: [14, 3], from: "center" }),
});

click.addEventListener("click", animation.play);
click2.addEventListener("click", animation.pause);
