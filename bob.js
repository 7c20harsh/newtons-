class bob{
    constructor(x,y,r){
var options={
    'friction':0.000,
    'restitution':1.0,
    'density':0.8,
    'isStatic':false
}
    this.body=Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);    
    }
    display(){
        var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill(255,0,255);
    ellipse(0, 0, this.r, this.r);
    pop();
    }
}