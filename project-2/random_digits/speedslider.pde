void speedSlider(){
    cp5.addSlider("slider")
    .setPosition(width-200, height-200)
    .setRange(500,0);
    
    cp5.getController("slider").getValueLabel().align(ControlP5.LEFT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);
    cp5.getController("slider").getCaptionLabel().align(ControlP5.RIGHT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);
}

void slider(int speed) {
  fps = speed;
  println("a slider event. setting background to "+speed);
}
