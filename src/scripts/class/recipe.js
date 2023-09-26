// Recipe
export class Recipe {
  constructor(recipe) {
    this._name = recipe.name;
    this._description = recipe.description;
    this._time = recipe.time;
    this._servings = recipe.servings;
    this._ingredients = recipe.ingredients;
    this._utensils = recipe.ustensils;
    this._appliance = recipe.appliance;

    this._newUtensils = [];
    this._newIngredients = [];
    this._newAppliance = '';
  }

  get newName() {
    return this._name.toLowerCase();
  }
  get newDescription() {
    return this._description.toLowerCase();
  }
  get newUtensils() {
    this._newUtensils = this._utensils.map((utensil) => utensil.toLowerCase());
    return this._newUtensils;
  }
  get newIngredients() {
    this._ingredients.forEach((ingredient) =>
      this._newIngredients.push(ingredient.ingredient.toLowerCase())
    );
    return this._newIngredients;
  }
  get newAppliance() {
    this._newAppliance = this._appliance.toLowerCase();
    return this._newAppliance;
  }
}
