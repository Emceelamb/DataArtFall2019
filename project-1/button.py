#!/usr/bin/env python3
from gpiozero import Button
from signal import pause
import RPi.GPIO as GPIO
from time import sleep

button = Button(2)
SOL = 4

GPIO.setmode(GPIO.BCM)
GPIO.setup(SOL, GPIO.OUT)

def triggerSol():
    GPIO.output(SOL, 1)
    sleep(0.05)
    GPIO.output(SOL, 0)
    
    print("I'm triggered.")

button.when_pressed = triggerSol

pause()
