const Renderer = function () {
    const renderFrogs = function (frogs) {
        
        $("#Gamebox").empty()
        $("#frogcount").text(frogs.length + " Bong-rips left")
       

        for (let frog of frogs) {
            let frogId = frog.id
            $("#Gamebox").prepend(`<div class=frog style="left:${frog.left};top:${frog.top};color:${frog.color};font-size:${frog.size};" data-id=${frogId}><i class="fas fa-bong"></i></div>`)
        }
    }
    return {
        renderFrogs
    }
}