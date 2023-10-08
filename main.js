
import { Circle } from './particle.js';



window.addEventListener('load',function(){
    const canvas = this.document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;
    canvas.addEventListener("click", onClick, false);
    let sizeCircle = 10;
    let circles = [];
    let countCircle = 10;


    function initCircle(){
        for(let i = 0;i<countCircle;i++){
            let x = Math.floor(Math.random() * canvas.width-20) + 20;
            let y = Math.floor(Math.random() * canvas.height-20) + 20;
            circles.push(new Circle(x,y,sizeCircle,canvas));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(circle =>{
            circle.draw(ctx);
        });
        requestAnimationFrame(animate);
    }

    function onClick(e) {
        circles.forEach(circle =>{
            if(circle.play==false){
                circle.play=true;
            }else{
                circle.play=false;
            }
        });
    }

      initCircle();
      animate();
 
})