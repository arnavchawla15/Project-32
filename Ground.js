class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("black");
      rectMode(CENTER);
      rect(pos.x, pos.y,900,20);
    }
  };