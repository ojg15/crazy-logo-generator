# Const of the alphabet to give each letter an index
abcs = 'abcdefghijklmnopqrstuvwxyz'

def mostCommonLetters(name):
    name = name.lower() # Make sure we count caps as well
    topCounts = [('', 0), ('', 0), ('', 0)] # Tuple of letter and count eg. ('a', 7)

    # Loop through the alphabet
    for x in abcs:

        # Get the number of occurances of x in the name
        count = name.count(x)

        # If the count beats any of our current top 3, then update the top 3
        for i in range(3):
            if count > topCounts[i][1]:
                topCounts.insert(i, (x, count))
                topCounts.pop()
                break

    return topCounts

name = input('Please input your company name:\n')
common = mostCommonLetters(name)

# Have commented this line out as technically the letters should be the only output..
# print(f'\nThe most common letters in "{name}" are:')

for most in common:
    print(f'{most[0]} {most[1]}')