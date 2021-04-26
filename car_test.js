class Car_test {
    constructor(x,y,speed,) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.image = new Image();
        this.img = [Car_Down, Car_Left, Car_right, Car_Up];
        this.image.src = this.img[0] + '.png';
        this.draw = function (canvas) {
            let ctx = canvas.getContext('2d');
            let image =
        }
    }
}