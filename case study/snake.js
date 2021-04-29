class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sizex = SIZE_X;
        this.sizey = SIZE_Y;
        this.start = 'right';
        this.speed = SPEED_SNAKE;
        this.body = [];
        this.legthsnake = 3;
        this.image = new Image();
        this.img = ["head_up", "head_down", "head_rigth", "head_left"];
        // this.image.src = this.img[0] + '.jpg';

    }

    move = function () {
        switch (this.start) {
            case 'left' :
                this.image.src = this.img[3] + '.png'
                this.x -= this.speed;
                break;
            case 'right':
                this.image.src = this.img[2] + '.png'
                this.x += this.speed;
                break;
            case 'up':
                this.image.src = this.img[0] + '.png'
                this.y -= this.speed;
                break;
            case 'down':
                this.image.src = this.img[1] + '.png'
                this.y += this.speed;
                break;
        }
    }
    check = function () {
        if (snake.x > CANVAS_WIDTH)
            snake.x = 0;
        if (snake.x < 0)
            snake.x = CANVAS_WIDTH
        if (snake.y > CANVAS_HEIGHT)
            snake.y = 0;
        if (snake.y < 0)
            snake.y = CANVAS_HEIGHT


    }
    update = function () {
        this.body.unshift({x: this.x, y: this.y})
        if (this.body.length > this.legthsnake){
            this.body.pop();
        }
    }
    draw = function (canvas) {
        let c = canvas.getContext('2d');
        this.image.src = this.img[0] + ".png";
        c.beginPath();
        for (let i = 0; i < this.body.length; i++){
            // c.rect(this.body[i].x, this.body[i].y, this.sizex, this.sizey);
            c.drawImage(this.image, this.body[i].x, this.body[i].y, this.sizex, this.sizey);
            c.stroke();
        }
        c.closePath();
    }
}

