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
