const fontSizeControlRef = document.querySelector("#font-size-control");
// console.log(fontSizeControlRef);

const textControlRef = document.querySelector("#text");
// console.log(textControlRef);

fontSizeControlRef.addEventListener("input", () => {
    textControlRef.style.fontSize = fontSizeControlRef.value + "px";
});

