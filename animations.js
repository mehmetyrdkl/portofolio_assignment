"use strict";
import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

inView("section", ({ target }) => {
  animate(
    target.querySelector(".fade"),
    { opacity: 1, x: [-70, -50, 0] },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

const progress = document.querySelector(".progress");
scroll(({ y }) => {
  progress.innerHTML = y.progress.toFixed(2);
});
