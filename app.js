score = document.getElementById("cur_score");

window.onload = function() {
    this.setup()
}

function setup() {
    canvas = document.getElementById("game")
    game = canvas.getContext("2d")
    game.moveTo(0, 100)
    game.lineTo(400, 100)
    game.stroke()
    dino = new runner()
    dino.run()
}

class runner {
    runner() {
        this.src = "./static/images/runner.png"
        this.width = "12px"
        this.height = "20px"
    }

    run() {
        game = document.getElementById("game").getContext("2d")
        this.image = new Image()
        this.image.src = this.src
        game.drawImage(this.image, 5, 100)
    }
}
