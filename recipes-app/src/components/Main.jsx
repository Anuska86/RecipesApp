import React from "react";
import IngredientsList from "./IngredientsList";
import CheffRecipe from "./ChefRecipe";
import { getRecipeFromMistral } from "../ai";


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");
  const recipeSection= React.useRef(null);
  console.log(recipeSection.current);

  async function fetchRecipe() {
    const recipeText = await getRecipeFromMistral(ingredients);
    setRecipe(recipeText);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g.parsley or basil"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ref={recipeSection}  ingredients={ingredients} fetchRecipe={fetchRecipe} />
      )}

      {recipe && <CheffRecipe recipe={recipe} />}
    </main>
  );
}
