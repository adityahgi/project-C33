class Snowfall{
constructor(){
var options={
 isStatic:false

};
this.snowfall=Bodies.rectangle(random(1,1800),10,10,10,options);
World.add(world,this.snowfall);
}
display(){
imageMode(CENTER);
image(snowImage,this.snowfall.position.x,this.snowfall.position.y,10,10);

}


}