import React from 'react'
import RecipesList from '../../components/RecipesList/RecipesList';
import { useEffect, useState } from 'react';
import { fetchRecipes } from "../../api/api";

function Recipes() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    async function init() {
      const data = await fetchRecipes();
      setRecipes(data);
      console.log(data);
    }
    init()
  }, [])
  return (
    <div>
      <h1>Recipes</h1>
      {/* {console.log("object")} */}
      <RecipesList recipes = {recipes} />
    </div>

  )
}

export default Recipes