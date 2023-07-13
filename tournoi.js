const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let translateValue = 0;
const slideWidth = slider.clientWidth;

prevButton.addEventListener('click', () => {
  if (translateValue !== 0) {
    translateValue += slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
  }
});

nextButton.addEventListener('click', () => {
  const maxTranslateValue = (slider.children.length - 1) * slideWidth;
  if (translateValue !== -maxTranslateValue) {
    translateValue -= slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
  }
});
