# Template for user controlled repetition of an action

done=False
while not(done):
    #
    ##
    ###
    ####
    #PLACE EXECUTION HERE
    ####
    ###
    ##
    #
    usermore = raw_input("again? (y/n): ") 
    if (usermore=='y' or usermore=='Y'):
        done=False #keep going
    elif(usermore=='n' or usermore =='N'):
        done=True
    else:
         print "invalid response assuming N"
         done=True
