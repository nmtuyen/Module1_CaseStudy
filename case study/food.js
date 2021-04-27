class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 10;
        this.change_pos()
    }
    draw_food = function (canvas) {
        let d = canvas.getContext('2d');
        d.beginPath();
        d.rect(this.x, this.y, this.size, this.size);
        d.stroke();
    }
    change_pos = function () {
        this.x = 10 * Math.floor(Math.random() * 25)
        this.y = 10 * Math.floor(Math.random() * 30)
    }
}

