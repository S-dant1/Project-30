class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
      
    }

    display(){
     //console.log(this.body.speed);
      if(this.body.speed<4){
        super.display();
        push();
        this.Visibility = this.Visibility-5;
        tint(255, 126);
        pop();
      }
      else{
        World.remove(world, this.body);
        
      }
    }
};
