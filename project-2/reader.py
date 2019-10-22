#!/usr/bin/env python3 

import sys
import time

filepath = 'digits.txt'

ds = []

with open(filepath) as digits:
    line = digits.readline()
    count = 1
    while line:
        d = "".join(line.split())
        for x in range(5,len(d)):
               ds.append(d[x])
        line = digits.readline()
        count+=1
        
print(len(ds))

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

    for x in range(len(ds)):
        d = int(ds[x])
        if d == 0:
            num0 += 1
        if d == 1:
            num1 += 1
        if d == 2:
            num2 += 1
        if d == 3:
            num3 += 1
        if d == 4:
            num4 += 1
        if d == 5:
            num5 += 1
        if d == 6:
            num6 += 1
        if d == 7:
            num7 += 1
        if d == 8:
            num8 += 1
        if d == 9:
            num9 += 1

        print('\n')
        print("0: ", num0)
        print("1: ", num1)
        print("2: ", num2)
        print("3: ", num3)
        print("4: ", num4)
        print("5: ", num5)
        print("6: ", num6)
        print("7: ", num7)
        print("8: ", num8)
        print("9: ", num9)
        print('Number: ', d)
        print('Total count: ', x)

#adder()

jsonfile = "{digits: [" + ','.join(ds) + "]}"
print(jsonfile)

file = open('digits.json', 'w')
file.write(jsonfile)
file.close()
