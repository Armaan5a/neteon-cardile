class Rope{
   
   constructor(a,b,c,d){
   
      this.xco=c
      this.yco=d
   
      var options ={
           bodyA:a,
           bodyB:b,
           stiffness:0.1,
           length:200,
          pointA:{x:this.xco,y:this.yco}
         }
   this.sling=Matter.Constraint.create(options)
   World.add(myworld,this.sling);

}

show(){
   var poi1 = this.sling.bodyA.position
   var poi2 = this.sling.bodyB.position
   strokeWeight(5)
   line(poi1.x+this.xco,poi1.y+this.yco,poi2.x,poi2.y)
}}