class Snake {
    constructor(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.sizex = 10;
        this.sizey = 10;
        this.color = color;
        this.start = 'right';
        this.speed = speed;
        this.bodysnake = [];
    }
    // move = function () {
    //     switch (this.start) {
    //         case 'left':
    //             this.x -= this.speed;
    //             break;
    //         case 'right':
    //             this.x += this.speed;
    //             break;
    //         case 'up':
    //             this.y -= this.speed;
    //             break;
    //         case 'down':
    //             this.y += this.speed;
    //             break;
    //     }
    // }
    // eatfood = function () {
    // }
    move = function () {
        switch (this.start) {
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
        }
    }
    draw = function (canvas) {
        let c = canvas.getContext('2d');
        c.beginPath();
        c.rect(this.x, this.y, this.sizex, this.sizey);
        c.stroke();

    }

}