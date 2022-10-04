const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector(`#ingredients`);


function createLI(ingredients) {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredients;
  itemRef.classList.add("item");  
  ingredientsRef.append(itemRef);
  return itemRef;
}

const listIngredients = ingredients.map((itemRef) => {
    return createLI(itemRef);
});

ingredientsRef.append(...listIngredients);

// Второй вариант рабочий

// const listIngredients = ingredients => {
//   return ingredients.map(ingredient => {
//     const itemRef = document.createElement("li");
//     itemRef.textContent = ingredient;
//     itemRef.classList.add("item");
//     return itemRef;
//   })
// }

// const element = listIngredients(ingredients);
// ingredientsRef.append(...element);
// console.log(ingredientsRef);