// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger}) => {
    return (
        <div>
          <h2>Burger Stack</h2>
          <ul className="burger">
            {stack.map((ingredient, idx) => (
              <li key={idx} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => removeFromBurger(idx)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
  
  export default BurgerStack;
  