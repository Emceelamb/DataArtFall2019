import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import controlP5.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class random_digits extends PApplet {



ControlP5 cp5;

int sliderVal = 60;
Slider speed;

int fps = 60;

JSONArray js;
int[] digits;

int xmax = 1000;
int ymax = 1000;
int x = 0;
int y = 0;

int pixel_digit = 0;

//PGraphics pg;
PImage img;

// digit count
int num0 = 0;
int num1 = 0;
int num2 = 0;
int num3 = 0;
int num4 = 0;
int num5 = 0;
int num6 = 0;
int num7 = 0;
int num8 = 0;
int num9 = 0;

public void setup() {
  
  frameRate(fps);
  

  js = loadJSONArray("digits.json");
  digits = js.getIntArray();

  //pg = createGraphics(1000,1000);
  //save("million_pixels.png");
  // drawbyframe();
  img = loadImage("million_pixels.png");
  
  //slider
  cp5 = new ControlP5(this);
  
  cp5.addSlider("slider")
    .setPosition(width-200, height-200)
    .setRange(0,120);
    
  cp5.getController("slider").getValueLabel().align(ControlP5.LEFT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);
  cp5.getController("slider").getCaptionLabel().align(ControlP5.RIGHT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);


}

public void draw(){
  // background(0);
  image(img,0,0);
   if(y < ymax){      
   stroke(255,0,0);
   strokeWeight(5);
   point(x,y);
   x++;
 }

 if(x > xmax){
   y++;
   x=0;
 }
  textSize(48);  
  text(digits[pixel_digit], width/2, height/2);
  
  switch(digits[pixel_digit]){
      case 0:
        num0++;
        break;
      case 1:
        num1++;
        break;
      case 2:
        num2++;
        break;
      case 3:
        num3++;
        break;
      case 4:
        num4++;
        break;
      case 5:
        num5++;
        break;
      case 6:
        num6++;
        break;
      case 7:
        num7++;
        break;
      case 8:
        num8++;
        break;
      case 9:
        num9++;
        break;
  }    

  

  pixel_digit++;
   
  if(pixel_digit==1000000){
    noLoop();
  }
  delay(fps);

  pushMatrix();
  noStroke();
  fill(0);
  rect(width-220, height-400, 200, 240);
  textSize(14);
  fill(255);
  
  text("Digit Count", width-210, height-380);
  text("0: ", width-210, height-360);
  text("1: ", width-210, height-345);
  text("2: ", width-210, height-330);
  text("3: ", width-210, height-315);
  text("4: ", width-210, height-300);
  text("5: ", width-210, height-285);
  text("6: ", width-210, height-270);
  text("7: ", width-210, height-255);
  text("8: ", width-210, height-240);
  text("9: ", width-210, height-225);
  
  text(num0, width-190, height-360);
  text(num1, width-190, height-345);
  text(num2, width-190, height-330);
  text(num3, width-190, height-315);
  text(num4, width-190, height-300);
  text(num5, width-190, height-285);
  text(num6, width-190, height-270);
  text(num7, width-190, height-255);
  text(num8, width-190, height-240);
  text(num9, width-190, height-225);
  
  popMatrix();
}

public void drawbyframe(){
  //   pg.beginDraw();  
  // if(y < ymax){      
  //   int pixel_color = floor(map(digits[pixel_digit], 0, 9,0,255));
  //   pg.stroke(pixel_color);
  //   pg.point(x,y);
  //   x++;
  // }
  
  // if(x > xmax){
  //   y++;
  //   x=0;
  // }
  // pg.endDraw();
  // image(pg,0,0);

  for(int y = 0; y < 1000; y++){
    for(int x = 0; x < 1000; x++){
      int pixel_color = floor(map(digits[pixel_digit], 0, 9,0,255));
      stroke(pixel_color);
      point(x,y);
      pixel_digit++;
    }
  }
}

public void slider(int speed) {
  fps = speed;
  println("a slider event. setting background to "+speed);
}
  public void settings() {  size(1000,1000);  noSmooth(); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "random_digits" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
