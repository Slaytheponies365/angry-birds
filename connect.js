class Connect{
    constructor(a,b){
     var connect_features={
         bodyA: a,
         pointB: b,
         stiffness: 0.08,
         length: 5
     }
     this.connection=Constraint.create(connect_features)
     World.add(myWorld,this.connection)
     this.sling1 = loadImage ("sling1.png")
     this.sling2 = loadImage ("sling2.png")
     this.sling3 = loadImage ("sling3.png")
    }

    display(){
        image(this.sling1,200,300,50,100);
        image(this.sling2,165,305,50,50)



        if(this.connection.bodyA!=null){
            var s = this.connection.bodyA.position
            var t = this.connection.pointB
            stroke ("#301608")
            strokeWeight(3)
            line (s.x -10, s.y +15, t.x -10, t.y +15)
            line (s.x +10,s.y+15, t.x +30, t.y +15)
        }
       

    }

    fly(){
        this.connection.bodyA = null
    }
}