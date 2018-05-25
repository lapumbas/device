let slider = [];
let SLIDES_COUNT = 3;

for (let i = 0; i < SLIDES_COUNT; i++) {
  slider[i] = {};
  slider[i].radio = document.querySelector(`.slider-controls>input:nth-child(${2 * i + 1})`);
  slider[i].slide = document.querySelector(`.slide-${i + 1}`)
}

for (let i = 0; i < SLIDES_COUNT; i++) {
  slider[i].radio.addEventListener('change', evt => {
    evt.preventDefault();
    if (slider[i].radio.checked) {
      for (let i = 0; i < SLIDES_COUNT; i++) {
        slider[i].slide.classList.remove(`slide-show`);
      }
      slider[i].slide.classList.add(`slide-show`);
    }
  })
}