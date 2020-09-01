maxstarcount = 10
star = '*'
space = ' '
newline = ""

#count up
for line in range(maxstarcount):
    for x in range(maxstarcount-line):
        newline += space
    for y in range(line):
        newline += star
    print(newline)
    newline = ""
#count down
for line in range(maxstarcount):
    for x in range(line):
        newline += space
    for y in range(maxstarcount-line):
        newline += star
    print(newline)
    newline = ""

