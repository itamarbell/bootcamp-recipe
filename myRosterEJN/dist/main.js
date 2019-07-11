const render = new Renderer;

const getRoster = function () {
    let teamname = $("#roster-input").val()
    $('#players').html("")
    console.log(teamname)
    $.get(`/teams/${teamname}`, function (res) {
       render.renderIngredients(res)
    })
}
