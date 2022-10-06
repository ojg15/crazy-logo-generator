# Const of the alphabet to give each letter an index
abcs = 'abcdefghijklmnopqrstuvwxyz'

def mostCommonLetters(name):

    # Prepare a list with the number of occurances of each letter, init to 0
    letters = []
    for x in abcs:
        letters.append(0)
    
    # Go through each letter (not numbers/symbols) and count up the occurances
    for x in name:
        i = abcs.find( x.lower() ) # Caps are counted as lowercase

        # Make sure we're dealing with an alphabetical character
        if i >= 0:
            letters[i] += 1

    output = ''

    # Find the top 3 occurring letters
    for x in range(3):
        most = max(letters)
        i = letters.index(most)
        letter = abcs[i]
        output += f'{letter} {most}\n'

        # Zero out each loop so we can get the next largest
        letters[i] = 0

    return output

name = input('Please input your company name:\n')
print(f'\nThe most common letters in "{name}" are:\n{mostCommonLetters(name)}')