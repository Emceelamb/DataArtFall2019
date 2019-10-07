#!/usr/bin/env python3
from gpiozero import Button
from signal import pause
from time import sleep
import RPi.GPIO as GPIO
from TriggerSolenoid import *

button = Button(2)
sol = Solenoid(17)

button.when_pressed = sol.trigger
pause()
