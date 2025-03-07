// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ availableIngredients, addToBurger}) => {
    return (
        <div>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            {availableIngredients.map((ingredient, idx) => (
              <li key={idx} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => addToBurger(ingredient)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };

  export default IngredientList;
  