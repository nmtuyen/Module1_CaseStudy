class Snake {
    constructor(x, y, color, speedx, speedy) {
        this.x = x;
        this.y = y;
        this.sizex = 10;
        this.sizey = 10;
        this.color = color;
        this.start = 'right';
        this.speedx = speedx;
        this.speedy = speedy;
        this.body = [];
        this.legthsnake = 3;
    }
    eatfood = function () {
        if (this.snake.x === this.food.x && this.snake.y === this.food.y){
            this.legthsnake ++;
            return true;
        }return false;
    }
    move = function () {
        switch (this.start) {
            case 'left' :
                this.x -= this.speedx;
                break;
            case 'right':
                this.x += this.speedx;
                break;
            case 'up':
                this.y -= this.speedy;
                break;
            case 'down':
                this.y += this.speedy;
                break;
        }
    }
    update = function () {
        this.body.unshift({x: this.x, y: this.y})
        if (this.body.length > this.legthsnake){
            this.body.pop();
        }
    }
    draw = function (canvas) {
        let c = canvas.getContext('2d');
        c.beginPath();
        for (let i = 0; i < this.body.length; i++){
            c.rect(this.body[i].x, this.body[i].y, this.sizex, this.sizey);
            c.stroke();
        }
    }
}

