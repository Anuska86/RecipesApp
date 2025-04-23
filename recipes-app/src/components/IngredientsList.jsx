import React from "react";

export default function IngredientsList(props) {

const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    props.fetchRecipe();
  }

  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for cook?</h3>
            <p>Generate a recipe from your list of ingredients</p>  
          </div>
          <button onClick={handleClick}
          style={{ backgroundColor: isClicked ? "#53a353" : "#c890a7" }}>
            {isClicked ? "Generating the recipe. Please wait a moment" : "Generate recipe"}
          </button> 
          <p>Click the button to generate a recipe</p>
        </div>
      )}
    </section>
  );
}
