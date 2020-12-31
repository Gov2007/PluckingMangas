class Boy {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
         // 'restitution':0,
          //'friction':1.0,
        //  'density':1.2
      }
      
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/boy.png");
      this.body = Bodies.rectangle(x, y, width, height, options);                                                                                             
      
      World.add(world, this.body);       
    }
    display(){
      var pos =this.body.position;
      

      var pos=this.body.position
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };