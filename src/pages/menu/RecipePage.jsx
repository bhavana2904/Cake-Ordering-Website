import React from 'react';
import { useParams } from 'react-router-dom';
import './recipePage.css'; // Assuming you're using an external CSS file for styling

function RecipePage() {
    const { id } = useParams(); // Get the recipe ID from the URL

    // Recipe data
    const recipes = [
        { id: 1, name: 'Chocolate Cake', description: 'This rich and moist chocolate cake is perfect for every occasion.', img: 'https://i.pinimg.com/564x/1d/e8/7d/1de87d6fbed594cd708262eee646a80a.jpg' },
        { id: 2, name: 'Vanilla Cake', description: 'A classic vanilla cake with a delicate, buttery texture.', img: 'https://i.pinimg.com/564x/ec/bf/https://i.pinimg.com/564x/d5/ca/1d/d5ca1d41d97681577ef96a27efe5cad8.jpga/ecbf4aa6aed84248a479f0c640de37fc.jpg' },
        { id: 3, name: 'Red Velvet Cake', description: 'This stunning red velvet cake is velvety soft with cream cheese frosting.', img: 'https://i.pinimg.com/564x/e0/3f/6e/e03f6e9247585eb7758496a0135efd63.jpg' },
        { id: 4, name: 'Lemon Cake', description: 'This zesty lemon cake is refreshing and perfect for summer.', img: 'https://i.pinimg.com/564x/c5/1b/68/c51b6831dff818fe36089e7d5d6fbdc9.jpg' },
        { id: 5, name: 'Blueberry Cake', description: 'This soft and moist blueberry cake is bursting with fresh blueberries.', img: 'https://i.pinimg.com/564x/69/a7/8d/69a78d171665dc3da7f9c93712d12745.jpg' },
        { id: 6, name: 'Strawberry Cake', description: 'This classic dessert features layers of fresh strawberries and whipped cream.', img: 'https://i.pinimg.com/564x/b7/c9/fc/b7c9fcf25446ff2c8788ad6a0348ab62.jpg' },
    ];

    // Find the recipe by its ID
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    // Hardcoded ingredients and instructions (same for all cakes)
    const ingredients = [
        '2 cups all-purpose flour',
        '1 1/2 cups sugar',
        '1/2 cup cocoa powder',
        '1 1/2 teaspoons baking powder',
        '1 teaspoon baking soda',
        '1 teaspoon vanilla extract',
        '2 large eggs',
        '1 cup milk',
        '1/2 cup vegetable oil',
        '1 cup boiling water'
    ];

    const instructions = [
        'Preheat oven to 350°F (175°C).',
        'In a large bowl, combine dry ingredients.',
        'Add eggs, milk, oil, and vanilla, and mix until smooth.',
        'Stir in boiling water (batter will be thin).',
        'Pour batter into greased pans and bake for 30-35 minutes.',
        'Cool cakes and frost with chocolate frosting.'
    ];

    return (
        <div className="recipe-page">
            <div className="recipe-container">
                <div className="recipe-image">
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className="recipe-details">
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>

                    <h2>Ingredients</h2>
                    <ul className="ingredients-list">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <h2>Instructions</h2>
                    <ol className="instructions-list">
                        {instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
