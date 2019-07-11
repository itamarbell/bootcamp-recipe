class Renderer {
    
    renderIngredients(data){
        console.log(data)
        const source = $("#ingredient-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ingredient: data});
        $('#ingredient').append(newHTML);
    }
}