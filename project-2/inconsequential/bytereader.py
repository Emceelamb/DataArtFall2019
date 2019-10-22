#!/usr/bin/env python3 

import sys
import time

filepath = 'digits.txt'

digits = []

with open(filepath) as filename:
    line = filename.readline()
    count = 1
    while line:
        d = "".join(line.split())
        for x in range(5,len(d)):
               digits.append(d[x])
        line = filename.readline()
        count+=1
        
print(len(digits))

def adder():
    num0 = 0
    num1 = 0
    num2 = 0
    num3 = 0
    num4 = 0
    num5 = 0
    num6 = 0
    num7 = 0
    num8 = 0
    num9 = 0

    for x in range(len(digits)):
        d = digits[x].encode()

        print( d)
adder()
