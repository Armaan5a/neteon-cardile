class Bob
{
    constructor(a,b,c)
    {
        var option={
            isStatic: false,
            'restitution' : 1,
            'friction': 1.5,
            'density':0.8
        }
        this.body=Bodies.circle(a,b,c,option);
        World.add(myworld,this.body);
    
        this.rad=c
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("pink") 
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        circle(0,0,this.rad);
        pop();     
    }
}