const render = new Renderer;

const getRecipes = function () {  
let ingredientInput = $("#ingredient-input").val()
$('#ingredient').html("")
console.log(ingredientInput)
$.get(`/recipes/${ingredientInput}`, function (data) {
   render.renderIngredients(data)
})
}

const log = () => console.log($(this).closest(".box").find("li").text())

