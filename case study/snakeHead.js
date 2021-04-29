class Headsnake{
    constructor(canvas,imageName,x,y) {
        this.canvas=canvas;
        this.pen=canvas.getContext('2d');
        this.image=new Image();
        this.image.src=imageName;
        this.x =x;
        this.y=y;
    }
    drawImg() {
        // this.onload=function () {
            pen.drawImage(this.image,this.x,this.y,50,50);
        // }

    }
}