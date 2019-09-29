#!/usr/bin/env python3
import RPi.GPIO as GPIO
from time import sleep

class Solenoid(object):
    def __init__(self, pin):
        self.pin = pin
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.OUT)

    def trigger(self):
        GPIO.output(self.pin, 1)
        sleep(0.05)
        GPIO.output(self.pin, 0)
        print("sol trigger")
