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
        this.image = new Image();
        this.img = ['head_down','head_up','head_left','head_right'];
        this.image.src = this.img[3] + '.jpg'

    }

    move = function () {
        switch (this.start) {
            case 'left' :
                this.image.src = this.img[2] + '.jpg'
                this.x -= this.speedx;
                break;
            case 'right':
                this.image.src = this.img[3] + '.jpg'
                this.x += this.speedx;
                break;
            case 'up':
                this.image.src = this.img[1] + '.jpg'
                this.y -= this.speedy;
                break;
            case 'down':
                this.image.src = this.img[0] + '.jpg'
                this.y += this.speedy;
                break;
        }
    }
    check = function () {
        if (snake.x > 250)
            snake.x = 0;
        if (snake.x < 0)
            snake.x = 250
        if (snake.y > 300)
            snake.y = 0;
        if (snake.y < 0)
            snake.y = 300


    }
    update = function () {
        this.body.unshift({x: this.x, y: this.y})
        if (this.body.length > this.legthsnake){
            this.body.pop();
        }
    }
    draw = function (canvas) {
        let c = canvas.getContext('2d');
        c.drawImage()
        c.beginPath();
        for (let i = 0; i < this.body.length; i++){
            c.rect(this.body[i].x, this.body[i].y, this.sizex, this.sizey);
            c.stroke();
        }
        c.closePath();
    }
}

