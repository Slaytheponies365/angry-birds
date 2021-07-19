class Bird {
    constructor(x,y,w,h){
        var Bird_features = {
            isStatic : false,
            restitution : 1
          }
          this.Bird = Bodies.rectangle(x,y,w,h,Bird_features)
          World.add(myWorld,this.Bird)
          this.w = w
          this.h = h
          this.arr = []
          this.red = loadImage ("bird.png")
          this.smoke = loadImage ("smoke.png")
    }

    display(){
        if(this.Bird.velocity.x>10&&this.Bird.position.x>300){
            this.arr.push([this.Bird.position.x,this.Bird.position.y])
        }
        for (var i = 0;i<this.arr.length;i=i+1){
            image(this.smoke,this.arr[i][0],this.arr[i][1])
        }
        push()
        translate(this.Bird.position.x,this.Bird.position.y)
        rotate(this.Bird.angle)
        imageMode(CENTER)
        image (this.red,0,0,this.w,this.h)
        pop()
    }
}