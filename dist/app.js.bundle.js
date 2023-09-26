/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/class/recipe.js":
/*!*************************************!*\
  !*** ./src/scripts/class/recipe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Recipe\": () => (/* binding */ Recipe)\n/* harmony export */ });\n// Recipe\r\nclass Recipe {\r\n  constructor(recipe) {\r\n    this._name = recipe.name;\r\n    this._description = recipe.description;\r\n    this._time = recipe.time;\r\n    this._servings = recipe.servings;\r\n    this._ingredients = recipe.ingredients;\r\n    this._utensils = recipe.ustensils;\r\n    this._appliance = recipe.appliance;\r\n\r\n    this._newUtensils = [];\r\n    this._newIngredients = [];\r\n    this._newAppliance = '';\r\n  }\r\n\r\n  get newName() {\r\n    return this._name.toLowerCase();\r\n  }\r\n  get newDescription() {\r\n    return this._description.toLowerCase();\r\n  }\r\n  get newUtensils() {\r\n    this._newUtensils = this._utensils.map((utensil) => utensil.toLowerCase());\r\n    return this._newUtensils;\r\n  }\r\n  get newIngredients() {\r\n    this._ingredients.forEach((ingredient) =>\r\n      this._newIngredients.push(ingredient.ingredient.toLowerCase())\r\n    );\r\n    return this._newIngredients;\r\n  }\r\n  get newAppliance() {\r\n    this._newAppliance = this._appliance.toLowerCase();\r\n    return this._newAppliance;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/class/recipe.js?");

/***/ }),

/***/ "./src/scripts/events.js":
/*!*******************************!*\
  !*** ./src/scripts/events.js ***!
  \*******************************/
/***/ (() => {

eval("const ingredientsContainer = document.getElementById('ingredient-filter');\r\nconst applianceContainer = document.getElementById('appliance-filter');\r\nconst utensilContainer = document.getElementById('utensil-filter');\r\n\r\nconst ingredientsInput = document.getElementById('ingredient-input');\r\nconst applianceInput = document.getElementById('appliance-input');\r\nconst utensilInput = document.getElementById('utensil-input');\r\n\r\nconst ingredientsModal = document.querySelector('.ingredient-filter-modal ul');\r\nconst applianceModal = document.querySelector('.appliance-filter-modal ul');\r\nconst utensilModal = document.querySelector('.utensil-filter-modal ul');\r\n\r\n// Event: Enter on search input\r\ndocument.getElementById('search-input').addEventListener('keyup', function (e) {\r\n  if (e.key === 'Enter') updateRecipes();\r\n});\r\n\r\n// Event: Open ingredients filter modal\r\ningredientsInput.addEventListener('focusin', () => {\r\n  ingredientsModal.classList.add('filter-modal-active');\r\n  ingredientsContainer.classList.add('recipes-filter-active');\r\n});\r\n// Event: Open appliances filter modal\r\napplianceInput.addEventListener('focusin', () => {\r\n  applianceModal.classList.add('filter-modal-active');\r\n  applianceContainer.classList.add('recipes-filter-active');\r\n});\r\n// Event: Open utensils filter modal\r\nutensilInput.addEventListener('focusin', () => {\r\n  utensilModal.classList.add('filter-modal-active');\r\n  utensilContainer.classList.add('recipes-filter-active');\r\n});\r\n\r\ndocument.addEventListener('click', (event) => {\r\n  // event.composedPath() for firefox compatibility\r\n  const path = event.path || event.composedPath();\r\n\r\n  // Event: Close ingredients filter modal\r\n  if (!path.includes(ingredientsContainer)) {\r\n    ingredientsModal.classList.remove('filter-modal-active');\r\n    ingredientsContainer.classList.remove('recipes-filter-active');\r\n  }\r\n  // Event: Close appliances filter modal\r\n  if (!path.includes(applianceContainer)) {\r\n    applianceModal.classList.remove('filter-modal-active');\r\n    applianceContainer.classList.remove('recipes-filter-active');\r\n  }\r\n  // Event: Close utensils filter modal\r\n  if (!path.includes(utensilContainer)) {\r\n    utensilModal.classList.remove('filter-modal-active');\r\n    utensilContainer.classList.remove('recipes-filter-active');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/events.js?");

/***/ }),

/***/ "./src/scripts/filters.js":
/*!********************************!*\
  !*** ./src/scripts/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeApplianceFilters\": () => (/* binding */ activeApplianceFilters),\n/* harmony export */   \"activeIngredientFilters\": () => (/* binding */ activeIngredientFilters),\n/* harmony export */   \"activeUtensilFilters\": () => (/* binding */ activeUtensilFilters),\n/* harmony export */   \"applianceFilters\": () => (/* binding */ applianceFilters),\n/* harmony export */   \"ingredientFilters\": () => (/* binding */ ingredientFilters),\n/* harmony export */   \"insertAndUpdateApplianceFilters\": () => (/* binding */ insertAndUpdateApplianceFilters),\n/* harmony export */   \"insertAndUpdateIngredientFilters\": () => (/* binding */ insertAndUpdateIngredientFilters),\n/* harmony export */   \"insertAndUpdateUtensilFilters\": () => (/* binding */ insertAndUpdateUtensilFilters),\n/* harmony export */   \"resetApplianceFilters\": () => (/* binding */ resetApplianceFilters),\n/* harmony export */   \"resetIngredientFilters\": () => (/* binding */ resetIngredientFilters),\n/* harmony export */   \"resetUtensilFilters\": () => (/* binding */ resetUtensilFilters),\n/* harmony export */   \"utensilFilters\": () => (/* binding */ utensilFilters)\n/* harmony export */ });\n/* harmony import */ var _scripts_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/tags */ \"./src/scripts/tags.js\");\n/* harmony import */ var _scripts_filtersSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/filtersSearch */ \"./src/scripts/filtersSearch.js\");\n/* harmony import */ var _scripts_templates_filterAppliance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/templates/filterAppliance */ \"./src/scripts/templates/filterAppliance.js\");\n/* harmony import */ var _scripts_templates_filterIngredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/templates/filterIngredient */ \"./src/scripts/templates/filterIngredient.js\");\n/* harmony import */ var _scripts_templates_filterUtensil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/templates/filterUtensil */ \"./src/scripts/templates/filterUtensil.js\");\n/* harmony import */ var _scripts_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/global */ \"./src/scripts/global.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet utensilFilters = [];\r\nlet applianceFilters = [];\r\nlet ingredientFilters = [];\r\n\r\nlet activeUtensilFilters;\r\nlet activeApplianceFilters;\r\nlet activeIngredientFilters;\r\n\r\nconst ingredientsInput = document.getElementById('ingredient-input');\r\nconst applianceInput = document.getElementById('appliance-input');\r\nconst utensilInput = document.getElementById('utensil-input');\r\n\r\nconst ingredientsModal = document.querySelector('.ingredient-filter-modal ul');\r\nconst applianceModal = document.querySelector('.appliance-filter-modal ul');\r\nconst utensilModal = document.querySelector('.utensil-filter-modal ul');\r\n\r\nwindow.addEventListener('load', (e) => {\r\n  activeUtensilFilters = Array.from(new Set(utensilFilters));\r\n  activeApplianceFilters = Array.from(new Set(applianceFilters));\r\n  activeIngredientFilters = Array.from(new Set(ingredientFilters));\r\n\r\n  insertAndUpdateApplianceFilters();\r\n  insertAndUpdateIngredientFilters();\r\n  insertAndUpdateUtensilFilters();\r\n\r\n  ingredientsInput.addEventListener('input', (event) => {\r\n    const ingredientsInputSearch = event.target.value;\r\n    (0,_scripts_filtersSearch__WEBPACK_IMPORTED_MODULE_1__.updateIngredientFiltersModal)(ingredientsInputSearch);\r\n  });\r\n  applianceInput.addEventListener('input', (event) => {\r\n    const appliancesInputSearch = event.target.value;\r\n    (0,_scripts_filtersSearch__WEBPACK_IMPORTED_MODULE_1__.updateApplianceFiltersModal)(appliancesInputSearch);\r\n  });\r\n  utensilInput.addEventListener('input', (event) => {\r\n    const utensilsInputSearch = event.target.value;\r\n    (0,_scripts_filtersSearch__WEBPACK_IMPORTED_MODULE_1__.updateUtensilFiltersModal)(utensilsInputSearch);\r\n  });\r\n});\r\n\r\nfunction resetIngredientFilters() {\r\n  activeIngredientFilters = ingredientFilters;\r\n}\r\nfunction resetUtensilFilters() {\r\n  activeUtensilFilters = utensilFilters;\r\n}\r\nfunction resetApplianceFilters() {\r\n  activeApplianceFilters = applianceFilters;\r\n}\r\n\r\nfunction insertAndUpdateApplianceFilters() {\r\n  const applianceFilterItems = document.getElementsByClassName(\r\n    'appliance-filter-item'\r\n  );\r\n\r\n  for (let i = 0; i < applianceFilterItems.length; i++)\r\n    applianceFilterItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  // alphabetic sort & prevent duplication with Set\r\n  const applianceFiltersSet = new Set(\r\n    Array.from(applianceFilters).sort((a, b) => a.localeCompare(b))\r\n  );\r\n  applianceFilters = Array.from(applianceFiltersSet);\r\n\r\n  activeApplianceFilters = activeApplianceFilters.sort((a, b) =>\r\n    a.localeCompare(b)\r\n  );\r\n\r\n  // display filters in modal\r\n  activeApplianceFilters.forEach((activeApplianceFilter, i) => {\r\n    const maximumDisplayedItems = 26;\r\n\r\n    if (i < maximumDisplayedItems) {\r\n      const filterApplianceCard = (0,_scripts_templates_filterAppliance__WEBPACK_IMPORTED_MODULE_2__.filterApplianceTemplate)(\r\n        activeApplianceFilter\r\n      );\r\n      domToInsert += filterApplianceCard;\r\n    }\r\n  });\r\n  applianceModal.innerHTML = domToInsert;\r\n\r\n  // reset active appliance filters\r\n  activeApplianceFilters = [];\r\n\r\n  // add event listeners\r\n  for (let i = 0; i < applianceFilterItems.length; i++) {\r\n    applianceFilterItems[i].addEventListener('click', (event) => {\r\n      const applianceName = (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(event.target.textContent);\r\n\r\n      // push filter to tags list\r\n      (0,_scripts_tags__WEBPACK_IMPORTED_MODULE_0__.pushApplianceTag)(applianceName);\r\n\r\n      // remove filter from filters list\r\n      if (applianceFilters.includes(applianceName)) {\r\n        applianceFilters.splice(applianceFilters.indexOf(applianceName), 1);\r\n        for (let i = 0; i < applianceFilterItems.length; i++) {\r\n          if (\r\n            (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(applianceFilterItems[i].textContent) ===\r\n            applianceName\r\n          ) {\r\n            applianceFilterItems[i].remove();\r\n          }\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction insertAndUpdateIngredientFilters() {\r\n  const ingredientFilterItems = document.getElementsByClassName(\r\n    'ingredient-filter-item'\r\n  );\r\n\r\n  for (let i = 0; i < ingredientFilterItems.length; i++)\r\n    ingredientFilterItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  // alphabetic sort & prevent duplication with Set\r\n  const ingredientFiltersSet = new Set(\r\n    Array.from(ingredientFilters).sort((a, b) => a.localeCompare(b))\r\n  );\r\n  ingredientFilters = Array.from(ingredientFiltersSet);\r\n\r\n  activeIngredientFilters = activeIngredientFilters.sort((a, b) =>\r\n    a.localeCompare(b)\r\n  );\r\n\r\n  // display filters in modal\r\n  activeIngredientFilters.forEach((activeIngredientFilter, i) => {\r\n    const maximumDisplayedItems = 26;\r\n\r\n    if (i < maximumDisplayedItems) {\r\n      const filterIngredientCard = (0,_scripts_templates_filterIngredient__WEBPACK_IMPORTED_MODULE_3__.filterIngredientTemplate)(\r\n        activeIngredientFilter\r\n      );\r\n      domToInsert += filterIngredientCard;\r\n    }\r\n  });\r\n  ingredientsModal.innerHTML = domToInsert;\r\n\r\n  // reset active ingredient filters\r\n  activeIngredientFilters = [];\r\n\r\n  // add event listeners\r\n  for (let i = 0; i < ingredientFilterItems.length; i++) {\r\n    ingredientFilterItems[i].addEventListener('click', (event) => {\r\n      const ingredientName = (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(event.target.textContent);\r\n\r\n      // push filter to tags list\r\n      (0,_scripts_tags__WEBPACK_IMPORTED_MODULE_0__.pushIngredientTag)(ingredientName);\r\n\r\n      // remove filter from filters list\r\n      if (ingredientFilters.includes(ingredientName)) {\r\n        ingredientFilters.splice(ingredientFilters.indexOf(ingredientName), 1);\r\n        for (let i = 0; i < ingredientFilterItems.length; i++) {\r\n          if (\r\n            (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(ingredientFilterItems[i].textContent) ===\r\n            ingredientName\r\n          ) {\r\n            ingredientFilterItems[i].remove();\r\n          }\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction insertAndUpdateUtensilFilters() {\r\n  const utensilFilterItems = document.getElementsByClassName(\r\n    'utensil-filter-item'\r\n  );\r\n\r\n  for (let i = 0; i < utensilFilterItems.length; i++)\r\n    utensilFilterItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  // alphabetic sort & prevent duplication with Set\r\n  const utensilFiltersSet = new Set(\r\n    Array.from(utensilFilters).sort((a, b) => a.localeCompare(b))\r\n  );\r\n  utensilFilters = Array.from(utensilFiltersSet);\r\n\r\n  activeUtensilFilters = activeUtensilFilters.sort((a, b) =>\r\n    a.localeCompare(b)\r\n  );\r\n\r\n  // display filters in modal\r\n  activeUtensilFilters.forEach((activeUtensilFilter, i) => {\r\n    const maximumDisplayedItems = 26;\r\n\r\n    if (i < maximumDisplayedItems) {\r\n      const filterUtensilCard = (0,_scripts_templates_filterUtensil__WEBPACK_IMPORTED_MODULE_4__.filterUtensilTemplate)(activeUtensilFilter);\r\n      domToInsert += filterUtensilCard;\r\n    }\r\n  });\r\n  utensilModal.innerHTML = domToInsert;\r\n\r\n  // reset active utensil filters\r\n  activeUtensilFilters = [];\r\n\r\n  // add event listeners\r\n  for (let i = 0; i < utensilFilterItems.length; i++) {\r\n    utensilFilterItems[i].addEventListener('click', (event) => {\r\n      const utensilName = (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(event.target.textContent);\r\n\r\n      // push filter to tags list\r\n      (0,_scripts_tags__WEBPACK_IMPORTED_MODULE_0__.pushUtensilTag)(utensilName);\r\n\r\n      // remove filter from filters list\r\n      if (utensilFilters.includes(utensilName)) {\r\n        utensilFilters.splice(utensilFilters.indexOf(utensilName), 1);\r\n        for (let i = 0; i < utensilFilterItems.length; i++) {\r\n          if (\r\n            (0,_scripts_global__WEBPACK_IMPORTED_MODULE_5__.getNormalizedString)(utensilFilterItems[i].textContent) ===\r\n            utensilName\r\n          ) {\r\n            utensilFilterItems[i].remove();\r\n          }\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/filters.js?");

/***/ }),

/***/ "./src/scripts/filtersSearch.js":
/*!**************************************!*\
  !*** ./src/scripts/filtersSearch.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateApplianceFiltersModal\": () => (/* binding */ updateApplianceFiltersModal),\n/* harmony export */   \"updateIngredientFiltersModal\": () => (/* binding */ updateIngredientFiltersModal),\n/* harmony export */   \"updateUtensilFiltersModal\": () => (/* binding */ updateUtensilFiltersModal)\n/* harmony export */ });\n/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/filters */ \"./src/scripts/filters.js\");\n\r\n\r\n\r\n/**\r\n * Update ingredient filters modal\r\n * @param {String} searchInput\r\n */\r\nfunction updateIngredientFiltersModal(searchInput) {\r\n  if (searchInput) {\r\n    // filter ingredients by search input\r\n    const ingredientMatches = _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.ingredientFilters.filter((ingredientFilter) =>\r\n      ingredientFilter.includes(searchInput)\r\n    );\r\n\r\n    // some ingredients match with search\r\n    if (ingredientMatches.length >= 1) {\r\n      ingredientMatches.forEach((ingredientMatch) => {\r\n        // push ingredient filter into active ingredient filters\r\n        _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.activeIngredientFilters.push(ingredientMatch);\r\n      });\r\n      (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateIngredientFilters)();\r\n    } else (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateIngredientFilters)();\r\n  } else {\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.resetIngredientFilters)();\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateIngredientFilters)();\r\n  }\r\n}\r\n\r\n/**\r\n * Update utensil filters modal\r\n * @param {String} searchInput\r\n */\r\nfunction updateUtensilFiltersModal(searchInput) {\r\n  if (searchInput) {\r\n    // filter utensils by search input\r\n    const utensilMatches = _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.utensilFilters.filter((utensilFilter) =>\r\n      utensilFilter.includes(searchInput)\r\n    );\r\n\r\n    // some utensils match with search\r\n    if (utensilMatches.length >= 1) {\r\n      utensilMatches.forEach((utensilMatch) => {\r\n        // push utensil filter into active utensil filters\r\n        _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.activeUtensilFilters.push(utensilMatch);\r\n      });\r\n      (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateUtensilFilters)();\r\n    } else (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateUtensilFilters)();\r\n  } else {\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.resetUtensilFilters)();\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateUtensilFilters)();\r\n  }\r\n}\r\n\r\n/**\r\n * Update appliance filters modal\r\n * @param {String} searchInput\r\n */\r\nfunction updateApplianceFiltersModal(searchInput) {\r\n  if (searchInput) {\r\n    // filter appliances by search input\r\n    const applianceMatches = _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.applianceFilters.filter((applianceFilter) =>\r\n      applianceFilter.includes(searchInput)\r\n    );\r\n\r\n    // some appliances match with search\r\n    if (applianceMatches.length >= 1) {\r\n      applianceMatches.forEach((applianceMatch) => {\r\n        // push appliance filter into active appliance filters\r\n        _scripts_filters__WEBPACK_IMPORTED_MODULE_0__.activeApplianceFilters.push(applianceMatch);\r\n      });\r\n      (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateApplianceFilters)();\r\n    } else (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateApplianceFilters)();\r\n  } else {\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.resetApplianceFilters)();\r\n    (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_0__.insertAndUpdateApplianceFilters)();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/filtersSearch.js?");

/***/ }),

/***/ "./src/scripts/global.js":
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNormalizedString\": () => (/* binding */ getNormalizedString)\n/* harmony export */ });\nconst getNormalizedString = (string) => string.replace(/\\n|  |\"/g, '');\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/global.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecipesData\": () => (/* binding */ getRecipesData)\n/* harmony export */ });\n// Get data in recipes.json\r\nasync function getRecipesData() {\r\n  const response = await fetch(\r\n    'https://alex-pqn.github.io/Les-petits-plats-ocr_dcl/data/recipes.json'\r\n  );\r\n  const recipesData = await response.json();\r\n\r\n  return recipesData;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/recipes.js":
/*!********************************!*\
  !*** ./src/scripts/recipes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recipes\": () => (/* binding */ recipes)\n/* harmony export */ });\n/* harmony import */ var _scripts_class_recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/class/recipe */ \"./src/scripts/class/recipe.js\");\n/* harmony import */ var _scripts_templates_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/templates/recipe */ \"./src/scripts/templates/recipe.js\");\n/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/filters */ \"./src/scripts/filters.js\");\n/* harmony import */ var _scripts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/index */ \"./src/scripts/index.js\");\n\r\n\r\n\r\n\r\n\r\nlet recipes = [];\r\n\r\n/**\r\n * Display recipes\r\n * @param {Array.<{utensilFilters: [], applianceFilters: [], ingredientFilters: []}>}\r\n */\r\nfunction displayRecipes(recipesData) {\r\n  const recipesSection = document.querySelector('.recipes-items');\r\n\r\n  recipesData.forEach((recipe) => {\r\n    const newRecipe = new _scripts_class_recipe__WEBPACK_IMPORTED_MODULE_0__.Recipe(recipe);\r\n    const recipeCardDOM = (0,_scripts_templates_recipe__WEBPACK_IMPORTED_MODULE_1__.recipeTemplate)(newRecipe);\r\n    recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);\r\n\r\n    _scripts_filters__WEBPACK_IMPORTED_MODULE_2__.utensilFilters.push(...newRecipe['newUtensils']);\r\n    _scripts_filters__WEBPACK_IMPORTED_MODULE_2__.applianceFilters.push(newRecipe.newAppliance);\r\n    _scripts_filters__WEBPACK_IMPORTED_MODULE_2__.ingredientFilters.push(...newRecipe['newIngredients']);\r\n\r\n    recipes.push(newRecipe);\r\n  });\r\n}\r\n\r\nasync function init() {\r\n  const recipesData = await (0,_scripts_index__WEBPACK_IMPORTED_MODULE_3__.getRecipesData)();\r\n\r\n  displayRecipes(recipesData);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/recipes.js?");

/***/ }),

/***/ "./src/scripts/recipesUpdate.js":
/*!**************************************!*\
  !*** ./src/scripts/recipesUpdate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateRecipes\": () => (/* binding */ updateRecipes)\n/* harmony export */ });\n/* harmony import */ var _scripts_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/tags */ \"./src/scripts/tags.js\");\n/* harmony import */ var _scripts_templates_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/templates/recipe */ \"./src/scripts/templates/recipe.js\");\n/* harmony import */ var _scripts_recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/recipes */ \"./src/scripts/recipes.js\");\n\r\n\r\n\r\n\r\nconst searchInput = document.getElementById('search-input');\r\n\r\nlet searchFilter = '';\r\nlet activeRecipes = _scripts_recipes__WEBPACK_IMPORTED_MODULE_2__.recipes;\r\n\r\nsearchInput.addEventListener('input', (event) => {\r\n  searchFilter = event.target.value.toLowerCase();\r\n  updateRecipes();\r\n});\r\n\r\nfunction reloadRecipes() {\r\n  const recipesSection = document.querySelector('.recipes-items');\r\n  const recipeItems = document.querySelectorAll('.recipes-item');\r\n  const recipesEmpty = document.querySelector('.recipes-empty');\r\n\r\n  recipeItems.forEach((recipe) => recipe.remove());\r\n\r\n  if (activeRecipes.length === 0)\r\n    recipesEmpty.classList.add('recipes-empty-active');\r\n  else recipesEmpty.classList.remove('recipes-empty-active');\r\n\r\n  activeRecipes.forEach((recipe) => {\r\n    const recipeCardDOM = (0,_scripts_templates_recipe__WEBPACK_IMPORTED_MODULE_1__.recipeTemplate)(recipe);\r\n    recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);\r\n  });\r\n}\r\n\r\n/**\r\n * @param {String} searchFilter\r\n * @param {Array} utensilTags\r\n * @param {Array} applianceTags\r\n * @param {Array} ingredientTags\r\n */\r\nfunction updateRecipes() {\r\n  const isSearchFilterActive = () => searchFilter.length >= 3;\r\n  const isUtensilsFilterActive = () => _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.utensilTags.length >= 1;\r\n  const isAppliancesFilterActive = () => _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.applianceTags.length >= 1;\r\n  const isIngredientsFilterActive = () => _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.ingredientTags.length >= 1;\r\n\r\n  if (\r\n    isSearchFilterActive() ||\r\n    isUtensilsFilterActive() ||\r\n    isAppliancesFilterActive() ||\r\n    isIngredientsFilterActive()\r\n  ) {\r\n    const newActiveRecipes = [];\r\n\r\n    for (let i = 0; i < _scripts_recipes__WEBPACK_IMPORTED_MODULE_2__.recipes.length; i++) {\r\n      const recipe = _scripts_recipes__WEBPACK_IMPORTED_MODULE_2__.recipes[i];\r\n\r\n      const ingredientStep =\r\n        isIngredientsFilterActive() && isRecipeContainsIngredientsTags();\r\n      const applianceStep =\r\n        isAppliancesFilterActive() && isRecipeContainsAppliancesTags();\r\n      const utensilStep =\r\n        isUtensilsFilterActive() && isRecipeContainsUtensilsTags();\r\n\r\n      // return true if recipe ingredients contains all the ingredient tags\r\n      function isRecipeContainsIngredientsTags() {\r\n        let isRecipeContainsTags = true;\r\n\r\n        for (const ingredientTag of _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.ingredientTags) {\r\n          for (const [\r\n            i,\r\n            recipeIngredient,\r\n          ] of recipe._newIngredients.entries()) {\r\n            // ingredient tag match with recipe ingredients\r\n            if (ingredientTag === recipeIngredient) break;\r\n\r\n            // last iteration & no one match\r\n            if (i === recipe._newIngredients.length - 1) {\r\n              isRecipeContainsTags = false;\r\n            }\r\n          }\r\n        }\r\n        return isRecipeContainsTags;\r\n      }\r\n\r\n      // return true if recipe appliance match with all the appliance tags\r\n      function isRecipeContainsAppliancesTags() {\r\n        let isRecipeContainsTags = true;\r\n\r\n        for (const applianceTag of _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.applianceTags) {\r\n          // appliance tag didn't match with recipe appliance\r\n          if (applianceTag !== recipe._newAppliance)\r\n            isRecipeContainsTags = false;\r\n        }\r\n        return isRecipeContainsTags;\r\n      }\r\n\r\n      // return true if recipe utensils contains all the utensil tags\r\n      function isRecipeContainsUtensilsTags() {\r\n        let isRecipeContainsTags = true;\r\n\r\n        for (const utensilTag of _scripts_tags__WEBPACK_IMPORTED_MODULE_0__.utensilTags) {\r\n          for (const [i, recipeUtensil] of recipe._newUtensils.entries()) {\r\n            // utensil tag match with recipe utensils\r\n            if (utensilTag === recipeUtensil) break;\r\n\r\n            // last iteration & no one match\r\n            if (i === recipe._newUtensils.length - 1) {\r\n              isRecipeContainsTags = false;\r\n            }\r\n          }\r\n        }\r\n        return isRecipeContainsTags;\r\n      }\r\n\r\n      let searchStep = false;\r\n\r\n      if (isSearchFilterActive()) {\r\n        // ingredients\r\n        // searchStep return true if recipe ingredients contains minimum one ingredient\r\n        for (const recipeIngredient of recipe._newIngredients)\r\n          if (recipeIngredient === searchFilter) searchStep = true;\r\n\r\n        // name/title\r\n        // searchStep return true if recipe name match with search filter\r\n        if (recipe.newName === searchFilter) searchStep = true;\r\n\r\n        // description\r\n        // searchStep return true if recipe description match with search filter\r\n        if (recipe.newDescription === searchFilter) searchStep = true;\r\n      }\r\n\r\n      // steps validation\r\n      if (\r\n        (!isIngredientsFilterActive() || ingredientStep) &&\r\n        (!isAppliancesFilterActive() || applianceStep) &&\r\n        (!isUtensilsFilterActive() || utensilStep) &&\r\n        (!isSearchFilterActive() || searchStep)\r\n      )\r\n        newActiveRecipes.push(recipe);\r\n    }\r\n\r\n    // push active recipes\r\n    activeRecipes = newActiveRecipes;\r\n    reloadRecipes();\r\n  } else {\r\n    // reinitialyze recipes\r\n    activeRecipes = _scripts_recipes__WEBPACK_IMPORTED_MODULE_2__.recipes;\r\n    reloadRecipes();\r\n  }\r\n}\r\n\r\nwindow.updateRecipes = updateRecipes;\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/recipesUpdate.js?");

/***/ }),

/***/ "./src/scripts/tags.js":
/*!*****************************!*\
  !*** ./src/scripts/tags.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applianceTags\": () => (/* binding */ applianceTags),\n/* harmony export */   \"ingredientTags\": () => (/* binding */ ingredientTags),\n/* harmony export */   \"pushApplianceTag\": () => (/* binding */ pushApplianceTag),\n/* harmony export */   \"pushIngredientTag\": () => (/* binding */ pushIngredientTag),\n/* harmony export */   \"pushUtensilTag\": () => (/* binding */ pushUtensilTag),\n/* harmony export */   \"utensilTags\": () => (/* binding */ utensilTags)\n/* harmony export */ });\n/* harmony import */ var _scripts_templates_tagAppliance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/templates/tagAppliance */ \"./src/scripts/templates/tagAppliance.js\");\n/* harmony import */ var _scripts_templates_tagIngredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/templates/tagIngredient */ \"./src/scripts/templates/tagIngredient.js\");\n/* harmony import */ var _scripts_templates_tagUtensil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/templates/tagUtensil */ \"./src/scripts/templates/tagUtensil.js\");\n/* harmony import */ var _scripts_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/global */ \"./src/scripts/global.js\");\n/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/filters */ \"./src/scripts/filters.js\");\n/* harmony import */ var _scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/recipesUpdate */ \"./src/scripts/recipesUpdate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet applianceTags = [];\r\nlet ingredientTags = [];\r\nlet utensilTags = [];\r\n\r\nfunction updateAndInsertApplianceTags() {\r\n  const appliancesTagsContainer = document.querySelector('.appliances-tags');\r\n  const applianceItems = document.getElementsByClassName('appliance-tag-item');\r\n\r\n  for (let i = 0; i < applianceItems.length; i++) applianceItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  applianceTags.forEach((applianceTag) => {\r\n    const tagApplianceCard = (0,_scripts_templates_tagAppliance__WEBPACK_IMPORTED_MODULE_0__.tagApplianceTemplate)(applianceTag);\r\n    domToInsert += tagApplianceCard;\r\n  });\r\n\r\n  appliancesTagsContainer.innerHTML = domToInsert;\r\n\r\n  updateApplianceTagsListeners();\r\n}\r\n\r\nfunction updateAndInsertIngredientsTags() {\r\n  const ingredientsTagsContainer = document.querySelector('.ingredients-tags');\r\n  const ingredientItems = document.getElementsByClassName(\r\n    'ingredient-tag-item'\r\n  );\r\n\r\n  for (let i = 0; i < ingredientItems.length; i++) ingredientItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  ingredientTags.forEach((ingredientTag) => {\r\n    const tagIngredientCard = (0,_scripts_templates_tagIngredient__WEBPACK_IMPORTED_MODULE_1__.tagIngredientTemplate)(ingredientTag);\r\n    domToInsert += tagIngredientCard;\r\n  });\r\n\r\n  ingredientsTagsContainer.innerHTML = domToInsert;\r\n\r\n  updateIngredientTagsListeners();\r\n}\r\n\r\nfunction updateAndInsertUtensilTags() {\r\n  const utensilsTagsContainer = document.querySelector('.utensils-tags');\r\n  const utensilItems = document.getElementsByClassName('utensil-tag-item');\r\n\r\n  for (let i = 0; i < utensilItems.length; i++) utensilItems[i].remove();\r\n  let domToInsert = '';\r\n\r\n  utensilTags.forEach((utensilTag) => {\r\n    const tagUtensilCard = (0,_scripts_templates_tagUtensil__WEBPACK_IMPORTED_MODULE_2__.tagUtensilTemplate)(utensilTag);\r\n    domToInsert += tagUtensilCard;\r\n  });\r\n\r\n  utensilsTagsContainer.innerHTML = domToInsert;\r\n\r\n  updateUtensilTagsListeners();\r\n}\r\n\r\nfunction updateUtensilTagsListeners() {\r\n  const utensilsTagsItems = document.getElementsByClassName(\r\n    'utensil-tag-item-remove'\r\n  );\r\n\r\n  for (let i = 0; i < utensilsTagsItems.length; i++) {\r\n    utensilsTagsItems[i].addEventListener('click', (event) => {\r\n      const utensilName =\r\n        utensilsTagsItems[i].parentNode.childNodes[0].textContent;\r\n      removeUtensilTag((0,_scripts_global__WEBPACK_IMPORTED_MODULE_3__.getNormalizedString)(utensilName));\r\n    });\r\n  }\r\n}\r\n\r\nfunction updateIngredientTagsListeners() {\r\n  const ingredientTagsItems = document.getElementsByClassName(\r\n    'ingredient-tag-item-remove'\r\n  );\r\n\r\n  for (let i = 0; i < ingredientTagsItems.length; i++) {\r\n    ingredientTagsItems[i].addEventListener('click', (event) => {\r\n      const ingredientName =\r\n        ingredientTagsItems[i].parentNode.childNodes[0].textContent;\r\n      removeIngredientTag((0,_scripts_global__WEBPACK_IMPORTED_MODULE_3__.getNormalizedString)(ingredientName));\r\n    });\r\n  }\r\n}\r\n\r\nfunction updateApplianceTagsListeners() {\r\n  const applianceTagsItems = document.getElementsByClassName(\r\n    'appliance-tag-item-remove'\r\n  );\r\n\r\n  for (let i = 0; i < applianceTagsItems.length; i++) {\r\n    applianceTagsItems[i].addEventListener('click', (event) => {\r\n      const applianceName =\r\n        applianceTagsItems[i].parentNode.childNodes[0].textContent;\r\n      removeApplianceTag((0,_scripts_global__WEBPACK_IMPORTED_MODULE_3__.getNormalizedString)(applianceName));\r\n    });\r\n  }\r\n}\r\n\r\nfunction pushApplianceTag(applianceTag) {\r\n  if (!applianceTags.includes(applianceTag)) {\r\n    applianceTags.push(applianceTag);\r\n    updateAndInsertApplianceTags();\r\n    (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n  }\r\n}\r\nfunction pushIngredientTag(ingredientTag) {\r\n  if (!ingredientTags.includes(ingredientTag)) {\r\n    ingredientTags.push(ingredientTag);\r\n    updateAndInsertIngredientsTags();\r\n    (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n  }\r\n}\r\nfunction pushUtensilTag(utensilTag) {\r\n  if (!utensilTags.includes(utensilTag)) {\r\n    utensilTags.push(utensilTag);\r\n    updateAndInsertUtensilTags();\r\n    (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n  }\r\n}\r\n\r\nfunction removeApplianceTag(applianceTag) {\r\n  if (applianceTags.includes(applianceTag))\r\n    applianceTags.splice(applianceTags.indexOf(applianceTag), 1);\r\n  updateAndInsertApplianceTags();\r\n\r\n  _scripts_filters__WEBPACK_IMPORTED_MODULE_4__.applianceFilters.push(applianceTag);\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.resetApplianceFilters)();\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.insertAndUpdateApplianceFilters)();\r\n\r\n  (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n}\r\nfunction removeIngredientTag(ingredientTag) {\r\n  if (ingredientTags.includes(ingredientTag))\r\n    ingredientTags.splice(ingredientTags.indexOf(ingredientTag), 1);\r\n  updateAndInsertIngredientsTags();\r\n\r\n  _scripts_filters__WEBPACK_IMPORTED_MODULE_4__.ingredientFilters.push(ingredientTag);\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.resetIngredientFilters)();\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.insertAndUpdateIngredientFilters)();\r\n\r\n  (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n}\r\nfunction removeUtensilTag(utensilTag) {\r\n  if (utensilTags.includes(utensilTag))\r\n    utensilTags.splice(utensilTags.indexOf(utensilTag), 1);\r\n  updateAndInsertUtensilTags();\r\n\r\n  _scripts_filters__WEBPACK_IMPORTED_MODULE_4__.utensilFilters.push(utensilTag);\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.resetUtensilFilters)();\r\n  (0,_scripts_filters__WEBPACK_IMPORTED_MODULE_4__.insertAndUpdateUtensilFilters)();\r\n\r\n  (0,_scripts_recipesUpdate__WEBPACK_IMPORTED_MODULE_5__.updateRecipes)();\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/tags.js?");

/***/ }),

/***/ "./src/scripts/templates/filterAppliance.js":
/*!**************************************************!*\
  !*** ./src/scripts/templates/filterAppliance.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterApplianceTemplate\": () => (/* binding */ filterApplianceTemplate)\n/* harmony export */ });\n// Filter appliance template\r\nconst filterApplianceTemplate = (applianceFilter) =>\r\n  `<li class=\"appliance-filter-item\">\r\n    <a href='#!'\">${applianceFilter}</a>\r\n  </li>`;\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/filterAppliance.js?");

/***/ }),

/***/ "./src/scripts/templates/filterIngredient.js":
/*!***************************************************!*\
  !*** ./src/scripts/templates/filterIngredient.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterIngredientTemplate\": () => (/* binding */ filterIngredientTemplate)\n/* harmony export */ });\n// Filter ingredient template\r\nfunction filterIngredientTemplate(ingredientFilter) {\r\n  const cardTemplate = `<li class=\"ingredient-filter-item\">\r\n    <a href='#!'>${ingredientFilter}</a>\r\n  </li>`;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/filterIngredient.js?");

/***/ }),

/***/ "./src/scripts/templates/filterUtensil.js":
/*!************************************************!*\
  !*** ./src/scripts/templates/filterUtensil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterUtensilTemplate\": () => (/* binding */ filterUtensilTemplate)\n/* harmony export */ });\n// Filter utensil template\r\nfunction filterUtensilTemplate(utensilFilter) {\r\n  const cardTemplate = `<li class=\"utensil-filter-item\">\r\n    <a href='#!'>${utensilFilter}</a>\r\n  </li>`;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/filterUtensil.js?");

/***/ }),

/***/ "./src/scripts/templates/recipe.js":
/*!*****************************************!*\
  !*** ./src/scripts/templates/recipe.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recipeTemplate\": () => (/* binding */ recipeTemplate)\n/* harmony export */ });\n// Recipe template\r\nfunction recipeTemplate(newRecipe) {\r\n  const { _name, _description, _time, _ingredients } = newRecipe;\r\n\r\n  let ingrendientsTemplate = ``;\r\n\r\n  // iterate ingredients and put them in template\r\n  _ingredients.forEach((ingredient) => {\r\n    let ingredientTemplate = `\r\n      <li>\r\n        <strong>\r\n          ${ingredient.ingredient} ${ingredient.quantity ? ':' : ''} \r\n        </strong>\r\n        ${ingredient.quantity ? ingredient.quantity : ''} ${\r\n      ingredient.quantity && ingredient.unit ? ingredient.unit : ''\r\n    }\r\n      </li>\r\n\t\t`;\r\n\r\n    ingrendientsTemplate = ingrendientsTemplate + ingredientTemplate;\r\n  });\r\n\r\n  const cardTemplate = `\r\n  <article class=\"recipes-item\">\r\n    <div class=\"recipes-item-top\">\r\n    </div>\r\n    <div class=\"recipes-item-bottom\">\r\n        <div>\r\n            <h4 class=\"recipes-item-title\">\r\n                ${_name}\r\n            </h4>\r\n            <p class=\"recipes-item-time\">\r\n                <i class=\"fa-solid fa-clock\"></i>\r\n                <span>${_time}</span>\r\n                min\r\n            </p>\r\n        </div>\r\n        <div>\r\n            <ul class=\"recipes-item-ingredients\">\r\n\t\t\t\t\t\t\t${ingrendientsTemplate}\r\n            </ul>\r\n            <p class=\"recipes-item-description\">\r\n               ${_description}\r\n            </p>\r\n        </div>\r\n    </div>\r\n\t</article>\r\n  `;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/recipe.js?");

/***/ }),

/***/ "./src/scripts/templates/tagAppliance.js":
/*!***********************************************!*\
  !*** ./src/scripts/templates/tagAppliance.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagApplianceTemplate\": () => (/* binding */ tagApplianceTemplate)\n/* harmony export */ });\n// Tag appliance template\r\nfunction tagApplianceTemplate(applianceTag) {\r\n  const cardTemplate = `<li class=\"appliance-tag-item tag-item\">${applianceTag}\r\n    <a class=\"appliance-tag-item-remove\" href='#!'>\r\n      <i class=\"far fa-times-circle\"></i>\r\n    </a>\r\n  </li>`;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/tagAppliance.js?");

/***/ }),

/***/ "./src/scripts/templates/tagIngredient.js":
/*!************************************************!*\
  !*** ./src/scripts/templates/tagIngredient.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagIngredientTemplate\": () => (/* binding */ tagIngredientTemplate)\n/* harmony export */ });\n// Tag ingredient template\r\nfunction tagIngredientTemplate(ingredientTag) {\r\n  const cardTemplate = `<li class=\"ingredient-tag-item tag-item\">${ingredientTag}\r\n    <a class=\"ingredient-tag-item-remove\" href='#!'>\r\n      <i class=\"far fa-times-circle\"></i>\r\n    </a>\r\n  </li>`;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/tagIngredient.js?");

/***/ }),

/***/ "./src/scripts/templates/tagUtensil.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/tagUtensil.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagUtensilTemplate\": () => (/* binding */ tagUtensilTemplate)\n/* harmony export */ });\n// Tag utensil template\r\nfunction tagUtensilTemplate(utensilTag) {\r\n  const cardTemplate = `<li class=\"utensil-tag-item tag-item\">${utensilTag}\r\n    <a class=\"utensil-tag-item-remove\" href='#!'>\r\n      <i class=\"far fa-times-circle\"></i>\r\n    </a>\r\n  </li>`;\r\n\r\n  return cardTemplate;\r\n}\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/templates/tagUtensil.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/scripts/class/recipe.js");
/******/ 	__webpack_require__("./src/scripts/events.js");
/******/ 	__webpack_require__("./src/scripts/filters.js");
/******/ 	__webpack_require__("./src/scripts/filtersSearch.js");
/******/ 	__webpack_require__("./src/scripts/global.js");
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	__webpack_require__("./src/scripts/recipes.js");
/******/ 	__webpack_require__("./src/scripts/recipesUpdate.js");
/******/ 	__webpack_require__("./src/scripts/tags.js");
/******/ 	__webpack_require__("./src/scripts/templates/filterAppliance.js");
/******/ 	__webpack_require__("./src/scripts/templates/filterIngredient.js");
/******/ 	__webpack_require__("./src/scripts/templates/filterUtensil.js");
/******/ 	__webpack_require__("./src/scripts/templates/recipe.js");
/******/ 	__webpack_require__("./src/scripts/templates/tagAppliance.js");
/******/ 	__webpack_require__("./src/scripts/templates/tagIngredient.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/tagUtensil.js");
/******/ 	
/******/ })()
;