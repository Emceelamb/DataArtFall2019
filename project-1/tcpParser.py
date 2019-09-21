#!/usr/bin/env python3

import time, os

filename = 'tmp.txt'
file = open(filename, 'r')

st_results = os.stat(filename)
st_size = st_results[6]
file.seek(st_size)

while 1:
    where = file.tell()
    line = file.readline()
    if not line:
        time.sleep(1)
        file.seek(where)
    else: 
        print (line)


