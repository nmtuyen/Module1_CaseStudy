class Stone {
    constructor() {
        this.x = 10 * Math.floor(Math.random() * 25);
        this.y = 10 * Math.floor(Math.random() * 30);
        this.sizestone = 10;
    }

    draw = function (c) {
        let pen = c.getContext('2d');
        pen.beginPath();
        pen.rect(this.x, this.y, this.sizestone, this.sizestone);
        pen.fillStyle = 'black';
        pen.fill();
        pen.closePath();

    }
}

