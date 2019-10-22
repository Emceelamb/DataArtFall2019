import controlP5.*;
import ddf.minim.*;
import ddf.minim.ugens.*;

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



Minim minim;
AudioOutput out;
Oscil wave;
Oscil wave1;

void setup() {
  size(1000,1000);
  frameRate(fps);
  noSmooth();

  js = loadJSONArray("digits.json");
  digits = js.getIntArray();

  //pg = createGraphics(1000,1000);
  //save("million_pixels.png");
  // drawbyframe();
  img = loadImage("million_pixels.png");
  
  //slider
  cp5 = new ControlP5(this);
  
  speedSlider();
  
  minim = new Minim(this);
  out = minim.getLineOut();
  wave = new Oscil(440,0.5f, Waves.SINE);
  wave.patch(out);
  wave.setAmplitude(0.5);
  wave1 = new Oscil(440,0.5f, Waves.SINE);
  wave1.patch(out);
  wave1.setAmplitude(0.5);

}

void draw(){
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
  
  digitCounter();
}

void drawbyframe(){
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
