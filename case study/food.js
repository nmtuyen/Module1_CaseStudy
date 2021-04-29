class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = FOOD_SIZE;
        this.change_pos();

    }
    draw_food = function (canvas) {
        let d = canvas.getContext('2d');
        let img = new Image()
        img.src = 'strawberry.png'
        d.beginPath();
        d.drawImage(img,this.x, this.y, this.size, this.size);
        // d.rect(this.x, this.y, this.size, this.size);
        d.stroke();
    }
    change_pos = function () {
        this.x = FOOD_SIZE * Math.floor(Math.random() * (CANVAS_WIDTH/FOOD_SIZE));
        this.y = FOOD_SIZE * Math.floor(Math.random() * (CANVAS_HEIGHT/FOOD_SIZE));
        for ( let i = 0; i < snake.body.length; i++ )
        if (this.x === snake.body[i].x && this.y === snake.body[i].y){
            this.x = 10 * Math.floor(Math.random() * 25);
            this.y = 10 * Math.floor(Math.random() * 30);

        }
    }
}

