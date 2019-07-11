class Renderer {
    
    renderPlayers(res){
        const source = $("#players-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({players: res});
        $('#players').append(newHTML);
    }
}