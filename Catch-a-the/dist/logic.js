const Frogs = function () {

    const frogs = []

    const getFrogs = function () {
        return frogs;
    }

    let frogcounter = 0


    let addFrog = function () {
        frogcounter++
        const GameBoxWidth = $("#Gamebox").width()
        const GameBoxWheight = $("#Gamebox").height()
        // newfrog.id = ("frog" + frogcounter)
        frogs.push({
            id: ("frog" + frogcounter),
            size: Math.floor(Math.random() * 3)+1.9+"vh",
            top: Math.floor(Math.random() * (GameBoxWheight - 100)) + "px",
            left: Math.floor(Math.random() * (GameBoxWidth - 100)) + "px",
            color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        })
    }

    let removeFrog = function (frogId) {
        for (let index in frogs) {
            if (frogId == frogs[index].id)
                frogs.splice(index, 1)
        }
    }

    return {
        addFrog,
        getFrogs,
        removeFrog
    }
}