import { useParams } from 'react-router-dom'

// components
import useFetch from '../../hooks/useFetch'

// styles
import './Recipe.css'

const Recipe = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/recipes/${id}`
    const { data: recipe, isPending, error } = useFetch(url)

    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    );
}

export default Recipe;