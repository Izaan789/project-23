class box{
    constructor(x,y,width,height){

        var options={
            isStatic:true
          }
        this.box = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.Ground)
       
        this.width=width;
        this.height=height;

    }
    display(){

        rectMode(CENTER)
        rect(this.box.position.x,this.box.position.y,this.width,this.height)

    }
}