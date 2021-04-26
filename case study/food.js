class Food {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    change_pos = function () {
        if ( this.snake.x === this.food.x && this.snake.y === this.food.y){
            this.x = Math.floor(Math.random());
            this.y = Math.floor(Math.random());
        }
    }
}