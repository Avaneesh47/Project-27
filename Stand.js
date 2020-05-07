class Stand{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,100,50,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("turquoise");
        rectMode(CENTER);
        rect(pos.x,pos.y,100,50);
    }
}