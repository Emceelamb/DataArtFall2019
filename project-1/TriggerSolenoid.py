#!/usr/bin/env python3
from gpiozero import Button
from signal import pause
import RPi.GPIO as GPIO
from time import sleep

class Solenoid(object):
    def __init__(self, pin):
        self.pin = pin
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.OUT)

    def trigger():
        GPIO.output(self.pin, 1)
        sleep(0.05)
        GPIO.output(self.pin, 0)
        
