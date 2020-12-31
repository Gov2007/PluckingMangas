class Stone {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1.0,
          density:1.2
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("Images/stone.png");
      this.body = Bodies.circle(x, y, r, options);                                                                                             
      
      World.add(world, this.body);       
    }
    display(){
      var pos =this.body.position;
      
      push()
      translate(pos.x, pos.y);
      var pos=this.body.position
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,0, 0, this.r*2, this.r*2);
      pop()
    }
  };