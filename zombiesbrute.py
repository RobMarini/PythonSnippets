import random

#this simulates a puzzle/riddle in which zombies fight humans 1 on 1 with even odds of victory
#when humans win the zombie dies, when the zombies win the human becomes a zombie
#how many humans are needed to have a 50-50 chance of winning the entire battle?

random.seed()

def duel():
	#coin flip
	return random.randint(0,1) == 0

def fight(zombies, humans):
	while(zombies > 0 and humans > 0):
		if duel():
			zombies= zombies -1
		else:
			humans= humans -1
			zombies = zombies +1
	if humans > 0:
		return 1
	else:
		return 0

def runTrials(numTrials):
	for zombies in range(1,100):
		for humans in range(1,100):
			humanVictories = 0
			for trials in range(1,numTrials):
				humanVictories = humanVictories + fight(zombies,humans)
			winPercentage = humanVictories/numTrials
			if winPercentage >= .48 and winPercentage <= .52:
				print(str(humans) + " humans v. " + str(zombies) + " zombies " "win percentage " + str(winPercentage*100))

runTrials(100)