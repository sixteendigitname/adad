class Bird extends BaseClass{
constructor(x,y){
super(x,y,50,50)
this.image = loadImage("sprites/bird.png")
}
display(){

Bird.x = mouseX
Bird.y = mouseY
super.display();


}




}