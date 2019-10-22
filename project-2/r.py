#!/usr/bin/env python3 

import sys
import time

filepath = 'digits.txt'

digits = []

with open(filepath) as filename:
    line = filename.readline()
    count = 1
    while line:
        d = " ".join(line.split())
        d_ = d.split(" ")
        for x in range (1,len(d_)):
            digits.append(int(d_[x]))
        line = filename.readline()

        count+=1

jsonfile = "{'digits':" + ','.join(map(str,digits)) +"}"

print(jsonfile)
