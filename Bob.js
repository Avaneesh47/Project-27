class Bob{
    constructor(x,y,radius){
        var options = {
            'restitution':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("orange");
        circle(pos.x,pos.y,this.radius);
    }
}