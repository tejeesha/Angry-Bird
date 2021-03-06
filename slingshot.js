class Slingshot{
    constructor(bodyA, pointB){
        var clog_options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .1,
            length: 100,
          }
          this.pointB=pointB
          this.chain=Constraint.create(clog_options)
          this.sling1=loadImage('sling1.png')
          this.sling2=loadImage('sling2.png')
          this.sling3=loadImage('sling3.png')
          World.add(world,this.chain)
        }
    display(){
        image(this.sling1,300,350)
        image(this.sling2,270,350)
        if(this.chain.bodyA!=null){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        push();
        stroke(48,22,8)
        if(pointA.x<250){
            strokeWeight(7)
            line(pointA.x-20, pointA.y, pointB.x, pointB.y)
            line(pointA.x-20,pointA.y,pointB.x-50, pointB.y+10)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
            strokeWeight(4)
            line(pointA.x+25, pointA.y, pointB.x, pointB.y)
            line(pointA.x+25,pointA.y,pointB.x-50, pointB.y+10)
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }
        pop();
        }

        
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(bodyC){
        this.chain.bodyA=bodyC
    }
}