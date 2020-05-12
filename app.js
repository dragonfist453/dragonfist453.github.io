score = document.getElementById("cur_score");
runner_images = ["./images/runner_right.png", "./images/runner_left.png"]
canvas = document.getElementById("game")
game = canvas.getContext("2d")
count = 0

window.onload = function() {
    setup = this.setInterval(ground, 1)
    runner = this.setInterval(toggle, 100)
    update = this.setInterval(update_score, 1)
}

function ground() {
    game.moveTo(0, 100)
    game.lineTo(400, 100)
    game.stroke()
}

function toggle() {
    count++
    game.clearRect(0, 0, this.canvas.width, this.canvas.height);
    image = new Image()
    image.src = runner_images[count % 2]
    game.moveTo(0, 0)
    image.onload = function() {
        game.drawImage(image, 10, 0, 24, 100)
    }
}

function update_score() {
    score.innerHTML = count
}