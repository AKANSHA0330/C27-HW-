class rope{
	constructor(body1,body2,xoffset)
	{
		
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:xoffset, y:0}
		}
        this.xoffset=xoffset;
		this.r1=Constraint.create(options)
     
		World.add(world,this.r1)
	}

	display()
	{
		var pointA=this.r1.bodyA.position;
		var pointB=this.r1.bodyB.position;



        stroke("red");
		strokeWeight(2);

		


	

		line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y);
	}

}
