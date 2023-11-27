// Recipe template
export function recipeTemplate(newRecipe) {
  const { _name, _description, _time, _ingredients } = newRecipe

  let ingrendientsTemplate = ``

  // iterate ingredients and put them in template
  _ingredients.forEach((ingredient) => {
    let ingredientTemplate = `
      <li>
        <strong>
          ${ingredient.ingredient} ${ingredient.quantity ? ':' : ''} 
        </strong>
        ${ingredient.quantity ? ingredient.quantity : ''} ${
      ingredient.quantity && ingredient.unit ? ingredient.unit : ''
    }
      </li>
		`

    ingrendientsTemplate = ingrendientsTemplate + ingredientTemplate
  })

  const cardTemplate = `
  <article class="recipes-item">
    <div class="recipes-item-top">
    </div>
    <div class="recipes-item-bottom">
        <div>
            <h4 class="recipes-item-title">
                ${_name}
            </h4>
            <p class="recipes-item-time">
                <i class="fa-solid fa-clock"></i>
                <span>${_time}</span>
                min
            </p>
        </div>
        <div>
            <ul class="recipes-item-ingredients">
							${ingrendientsTemplate}
            </ul>
            <p class="recipes-item-description">
               ${_description}
            </p>
        </div>
    </div>
	</article>
  `

  return cardTemplate
}
