const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {    
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }
});

console.log(inputRef);

