import random
# quote by x or y?
random.seed()
#Open the flat file containing quote|source
filename = "quotebook.txt"
char = "|"
a = open(filename,"r")
#data structure [[quotestring, authorstring]]
quotes = []
for line in a:
	quotes.append(line.split(char))
#play the game
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
