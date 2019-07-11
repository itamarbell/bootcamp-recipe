const frogs = Frogs()
const renderer = Renderer()
const R = function () { renderer.renderFrogs(frogs.getFrogs()) }


$("#start").on("click", function () {
    frogs.addFrog()
    let timeleft = 2
    let level = 1
    setInterval(function () {

        console.log(frogs.getFrogs())
        timeleft -= 1
        $("#timer").text(timeleft + " seconds left")
        $("#level").text("level " + level)

        if (timeleft == 0) {
            if (frogs.getFrogs().length == 0) {
                level++
                timeleft = level + 1
                for (let i = 0; i < level; i++) {
                    frogs.addFrog()
                }
                
                    if (level % 6 == 0){
                        frogs.addFrog()
                    }
                R()
            }
            else {
                alert("                                         Game-over! \n                                            GG brah")
                window.location.reload(true)
                // for (let i = 0; i < frogs.getFrogs().length; i++) {
                //     frogs.removeFrog(($(this).data("id")))
                //     R()
                // }
                // clearInterval() 
            }
        }
    }, 1000);
    R()
})

$("#Gamebox").on("click", ".frog", function () {
    frogs.removeFrog(($(this).data("id")))
    R()
})