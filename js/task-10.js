function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const dtnCreateRef = document.querySelector("button[data-create]");
const dtnDestroyeRef = document.querySelector("button[data-destroy");

console.log(inputRef);
console.log(dtnCreateRef);
console.log(dtnDestroyeRef);

let value = 0;
const array = [];

inputRef.addEventListener("input", (evt) => {
  let value = evt.currentTarget.value; 
  return value;
}
); 
 console.log(value);

dtnCreateRef.addEventListener("click", (evt) => {
  array.push(inputRef.value);
  createBoxes();
})
console.log(array);

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} , ${getRandomHexColor()} , ${getRandomHexColor()} )`;
    fragment.appendChild(div);
  }
  
}

function destroyBoxes() {
  boxes.innerHTML = "";

}

