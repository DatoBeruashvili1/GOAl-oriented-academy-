my_list = [1,2,3,4,5,6,7,8,9,10]

min = []

mid = []

max = []

for i in my_list :
    if i == 1 :
        min.append(i)
    if i == 10 :
        max.append(i)
    if i > 1 and i < 10 :
        mid.append(i)

print(mid)  
        

list = [1,2,3,4,5,6,7,8,9,10]

separator = []

for i in list :
    if i % 2 == 0 :
     separator.append(i)
print(separator)


list = [1,2,3,4,5,6,7,8,9,10]

separator = []


word = input("please enter any word :")

modified_word = ""


if word == word.lower() :
    print(word.upper())
elif word == word.upper() :
    print(word.lower())










