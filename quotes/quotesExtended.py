#modify quotes to read from different authors
import random
import sys
# quote by x or y?
random.seed()
if len(sys.argv) <2:
	print "Error, need command line arguments"
	sys.exit()
#now lets set up the stuff
files = sys.argv[1:]
quotes = []
char = "|"

for x in files:
	a = open(x,"r")
	for line in a:
		quotes.append([line,x])

done = False
while( not done):
	#generate random quote, pause, display answer ask to continue
	match = random.randint(0,len(quotes)-1)
	matchquote = quotes[match][0]
	matchauthor = quotes[match][1]
	print "Your quote is as follows:"
	print matchquote
	answer = raw_input()
	print "your guess was " + answer + " actual answer is " + matchauthor
	print "play again? y/n"
	answer = raw_input()
	if (answer=="y" or answer=="Y"):
		print "playing again!"
		done = False
	else:
		done = True
print "Goodbye!"