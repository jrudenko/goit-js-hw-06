const btnDecrementRef = document.querySelectorAll("button")[0];
// console.log(btnDecrementRef);
const btnIncrementRef = document.querySelectorAll("button")[1];
// console.log(btnIncrementRef);
let counterValue = 0;
// console.log(counterValue);

btnDecrementRef.addEventListener(`click`, (event) => {
    counterValue -= 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

btnIncrementRef.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});
