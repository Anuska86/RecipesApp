export default function IngredientsList(props) {
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
          <button onClick={props.fetchRecipe}>Generate recipe</button>
        </div>
      )}
    </section>
  );
}
