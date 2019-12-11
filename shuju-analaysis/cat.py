#!/usr/bin/env python3

import json

infile = open("shuju-cleaned-history.txt")

temp_array = []

data  = {}
data['history'] = []

for line in infile:
    temp_array.append(line)

for i in range(0,len(temp_array)-4,4):
   data['history'].append({
       'title':temp_array[i+2]})

with open('shuju-history-cat.json', 'w') as outfile:
   json.dump(data,outfile)

