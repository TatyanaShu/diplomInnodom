import React from 'react'

function Recipe({ recipe }) {
  console.log(recipe.recipe);
    return (
      <div>
        
        <div>{recipe.recipe.label}</div>
        <div>{recipe.recipe.calories}</div>
        <img src = {recipe.recipe.image}  alt = {recipe.recipe.label} width = "100px" height="100px" />
        <div>{recipe.recipe.ingredientLines}</div>
        
      </div>
      
      
  )
}

export default Recipe