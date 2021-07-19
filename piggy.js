class Piggy {
    constructor(x,y,w,h){
        var Piggy_features = {
            isStatic : false,
            restitution : 1
          }
          this.Piggy = Bodies.rectangle(x,y,w,h,Piggy_features)
          World.add(myWorld,this.Piggy)
          this.w = w
          this.h = h

          this.pig = loadImage ("enemy.png")
    }

    display(){
        push()
        translate(this.Piggy.position.x,this.Piggy.position.y)
        rotate(this.Piggy.angle)
        imageMode(CENTER)
        image (this.pig,0,0,this.w,this.h)
        pop()
    }
}