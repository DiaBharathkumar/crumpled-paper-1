class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,695,800,15,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("turquoise");
        rect(this.body.position.x,this.body.position.y,800,15)
    }
}