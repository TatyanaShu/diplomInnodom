import axios from 'axios'

const BASE_URL = 'https://api.edamam.com/api'

export async function fetchRecipes() {
    try {
        const response = await axios.get(BASE_URL + '/recipes/v2?app_id=a9c08ac1&app_key=d4c15bcfd3fb583e8063f0b155d32556&type=public&diet=balanced')
        console.log(response);
        console.log(response.data.hits);
        return response.data.hits
    } catch (error){ console.log(error) }
}

