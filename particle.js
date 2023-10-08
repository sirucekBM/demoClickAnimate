export class Circle{
    constructor(x, y,size,canvas){
        this.size = size;// Math.random()* 10 + 10;
        this.x = x;
        this.y = y;
        this.color = "rgba(255, 0, 1)";
        this.canvas = canvas;
        this.play = false;
        this.s = 1;
    };
    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.size,0,Math.PI * 2);
        context.fillStyle = this.color;
        context.strokeStyle  = this.color;
        context.fill();
        if(this.play){
            this.size+=this.s;
            if(this.size>50){
                this.s *=-1;
            }
            if(this.size<10){
                this.s = 1;
            }
        }
    }
}


