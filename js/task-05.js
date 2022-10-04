const nameInputRef = document.querySelector("#name-input");
// console.log(nameInputRef);
const nameOutputRef = document.querySelector("#name-output");
// console.log(nameOutputRef);


nameInputRef.addEventListener("input", () => {
    nameOutputRef.textContent = "Anonymous";
    if (nameInputRef.value) {
      nameOutputRef.textContent = nameInputRef.value;
    }     
    
  });