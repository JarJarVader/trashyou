class Box{
constructor(x,y,w,h){

    var b_options = {
        isStatic:true,
        friction:1,
        density:1
      }
this.object =    Bodies.rectangle(x,y,w,h,b_options)
this.w = w;
this.h = h;
World.add(world,this.object)
}
disrespect(){
    push();
    translate(this.object.position.x,this.object.position.y)  ;
    rotate(this.object.angle);
    rectMode(CENTER)
    rect(0,0,this.w,this.h);
    pop();
}
}