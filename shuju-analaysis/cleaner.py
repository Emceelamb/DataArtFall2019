#!/usr/bin/env python3

infile = open("shuju-history.txt")
#infile = open ("shuju-cleaned-history.txt")
outfile = open ("shuju-cleaned-history.txt", "w")

lines = infile.readlines()

count = 1
for line in lines:
    chunk = count%7
    if(chunk == 0 or chunk==1 or chunk==2 or chunk == 3):
        outfile.write(line[16:])
    
    count = count + 1

infile.close()
outfile.close()
