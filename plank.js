class Planks {
    constructor(x,y,w,h,z){
        var Planks_features = {
            isStatic : false,
            restitution : 1
          }
          this.Planks = Bodies.rectangle(x,y,w,h,Planks_features)
          Matter.Body.setAngle(this.Planks,z)
          World.add(myWorld,this.Planks)
          this.w = w
          this.h = h

          this.woodPlank = loadImage("wood2.png")
    }

    display(){
        push()
        translate(this.Planks.position.x,this.Planks.position.y)
        rotate(this.Planks.angle)
        imageMode(CENTER)
        image (this.woodPlank,0,0,this.w,this.h)
        pop()
    }
}