#!/usr/bin/env python3

import time, os

f = open("tmp.txt", "r")

#print(f.read())

lines = f.readlines()
print(len(lines))
for i in range(len(lines)):
    #print("line "+ str(i) +': ' + lines[i])
    line = lines[i].strip()
    parsedLine = line.split(' ')
    #print(parsedLine)
    lineLen = len(parsedLine)

    if lineLen == 21:
        print("SYN Pack")
       # print(parsedLine)
        pTime = parsedLine[1]
        ipDst = parsedLine[4]
        pType = "SYN"
        parsedPacket = [pTime, ipDst, pType]
        print(parsedPacket)

    elif lineLen == 23:
        print("SYN ACK Pack")
        pTime = parsedLine[1]
        ipDst = parsedLine[6]
        pType = "SYN ACK"
        parsedPacket = [pTime, ipDst, pType]
        
        print(parsedPacket)
        #print(parsedLine)

    #print(parsedPacket)
f.close()
