class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		
		
		this.body=Bodies.rectangle(400, 100, 300,10, options);
		this.w=300
		this.h=10
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}