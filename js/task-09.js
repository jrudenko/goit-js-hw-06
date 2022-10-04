function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const spanColorRef = document.querySelector(".color");
const btnColorRef = document.querySelector(".change-color");



btnColorRef.addEventListener('click', (ev) => {
  const randomColor = getRandomHexColor();
  spanColorRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;  
});

