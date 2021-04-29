class Stone {
    constructor() {
        this.x = STONE_SIZE * Math.floor(Math.random() * CANVAS_WIDTH/STONE_SIZE);
        this.y = STONE_SIZE * Math.floor(Math.random() * CANVAS_HEIGHT/STONE_SIZE);
        this.sizestone = STONE_SIZE;
    }

    draw = function (c) {
        let pen = c.getContext('2d');
        let img = new Image();
        img.src = 'wall.jpg'
        pen.beginPath();
        pen.drawImage(img ,this.x, this.y, this.sizestone, this.sizestone)
        // pen.fillStyle = 'black';
        // pen.fill();
        pen.closePath();

    }
}

