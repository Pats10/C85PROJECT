canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;

bg_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "car1.png";
car2_image = "car2.png"

function add(){
    bg_img_tag = new Image();
    bg_img_tag.onload = uploadBackground;
    bg_img_tag.src = bg_image;
    car1_img_tag = new Image();
    car1_img_tag.onload = uploadCar1;
	car1_img_tag.src = car1_image;
	car2_img_tag = new Image();
    car2_img_tag.onload = uploadCar2;
    car2_img_tag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_img_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_img_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadBackground();
		 uploadCar1();
		 uploadCar2();
	}

	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadBackground();
		 uploadCar2();
		 uploadCar1(); 
	}
}
function down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
	}

	if(car2_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
	}
}
function left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
	}

	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
}
function right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
   }

   if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadCar1();
		uploadCar2();
   }
}
