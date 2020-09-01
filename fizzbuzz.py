#FizzBuzz
string=""
for x in range(1,100):
    if(x%3==0):
        string += "Fizz"
    if(x%5==0):
        string += "Buzz"
    if(x%5!=0 and x%3!=0):
        string = str(x)
    print(string)
    string=""
