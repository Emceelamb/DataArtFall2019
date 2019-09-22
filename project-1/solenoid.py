#!/usr/bin/env python3

import RPi.GPIO as GPIO
from gpiozero import Button
from time import sleep  
from signal import pause

SOL = 4
BUTTON = Button(18)

GPIO.setmode(GPIO.BCM)

GPIO.setup(SOL, GPIO.OUT)

try:
    while True:
        if BUTTON.is_pressed:
            print("Hello, world.")
            
        GPIO.output(SOL, 1)
        sleep(0.01)
        GPIO.output(SOL, 0)
        sleep(0.01)

except KeyboardInterrupt:
    GPIO.cleanup()

def say_hello():
    print("Hello, world.")

#BUTTON.when_pressed = say_hello
#pause()
