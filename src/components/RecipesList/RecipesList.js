import React from 'react'
import Recipe from '../Recipe/Recipe'


function RecipesList({ recipes }) {
    console.log(recipes);
    return (
      <div>
            {/* <div>RecipesList</div> */}
            {recipes && recipes.map((elem, index) =>
                <Recipe key={index} recipe={elem} />

            )}
      </div>
      
      
  )
}

export default RecipesList