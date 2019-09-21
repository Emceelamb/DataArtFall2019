#!/usr/bin/env python3

import time, os, sys

fname = "tmp.txt"
f = open("tmp.txt", "r")
logfile = os.fstat(f.fileno()).st_ino
while True:
    while True:
        buf = f.read(1024)
        if buf =="":
            break
#        sys.stdout.write(buf)
        # packets = buf.split('\n')
        # buf.strip()
        packets = buf.splitlines()
        # packets = buf.split(' ')
        # print(packets)
        for i in range(len(packets)):
            line = packets[i].strip()
            parsedLine = line.split(' ')
            lineLen = len(parsedLine)
            # print(lineLen, line)
            if lineLen == 19:
                print("SYN Pack")
            # print(parsedLine)
                pTime = parsedLine[1]
                ipDst = parsedLine[4]
                pType = "SYN"
                parsedPacket = [pTime, ipDst, pType]
                print(parsedPacket)

            elif lineLen == 21:
                print("SYN ACK Pack")
                pTime = parsedLine[1]
                ipDst = parsedLine[4]
                pType = "SYN ACK"
                parsedPacket = [pTime, ipDst, pType]
                
                print(parsedPacket)
            

    try:
        if os.stat(fname).st_ino != logfile:
            new = open("tmp.txt", "r")
            f.close()
            f = new
            logfile = os.fstat(f.fileno()).st_ino
            continue
    except IOError:
        pass
    time.sleep(1)
#print(f.read())

