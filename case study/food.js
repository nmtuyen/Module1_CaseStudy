class Food {
    constructor() {
        this.x = 10 * Math.floor(Math.random() * 50)
        this.y = 10 * Math.floor(Math.random() * 60)
        this.size = 10;
    }
    draw_food = function (canvas) {
        let d = canvas.getContext('2d');
        d.beginPath();
        d.rect(this.x, this.y, this.size, this.size);
        d.stroke();
    }
    change_pos = function () {

    }
}

