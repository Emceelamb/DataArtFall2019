
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

void digitCounter(){
  
  switch(digits[pixel_digit]){
      case 0:
        num0++;
        wave.setFrequency(941);
        wave1.setFrequency(1336);
        break;
      case 1:
        num1++;
        wave.setFrequency( 697);
        wave1.setFrequency(1209);
        break;
      case 2:
        num2++;
        wave.setFrequency(697);
        wave1.setFrequency(1336);
        break;
      case 3:
        num3++;
        wave.setFrequency(697);
        wave1.setFrequency(1477);
        break;
      case 4:
        num4++;
        wave.setFrequency(770);
        wave1.setFrequency(1209);
        break;
      case 5:
        num5++;
        wave.setFrequency( 770 );
        wave1.setFrequency(1336);
        break;
      case 6:
        num2++;
        wave.setFrequency(697);
        wave1.setFrequency(1477);
        break;
      case 7:
        num3++;
        wave.setFrequency(852);
        wave1.setFrequency(1209);
        break;
      case 8:
        num4++;
        wave.setFrequency(852);
        wave1.setFrequency(1336);
        break;
      case 9:
        num5++;
        wave.setFrequency(852);
        wave1.setFrequency(1477);
        break;
      case 'q':
        num6++;
        wave.setFrequency( 520 );
        wave.setFrequency( 520 );
        break;
      case 'w':
        num7++;
        wave.setFrequency( 540 );
        break;
      case 'e':
        num8++;
        wave.setFrequency( 560 );
        break;
      case 'r':
        num9++;
        wave.setFrequency( 590 );
        break;
      case 't':
        num9++;
        wave.setFrequency( 590 );
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
  
  text("Digit Frequency Count", width-210, height-380);
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
  text(pixel_digit+"/1000000", width-210, height-210);
  
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


