user_name = input("please enter your name: ")


lowercase_name = user_name.lower()

if lowercase_name == user_name.lower():
    print("Hello,", user_name.title(), "your name matches its lowercase variant.")
else:
    print("The names do not match.")




user_word = input("please enter any word :")

word = user_word.lower()


if word == user_word.lower() :
     print("your word matches its lowercase variant")
else:
     print("word doesnot match.")
    
    




word1 = input("Enter a word: ")


modified_word = ""


for i in range(len(word1)):
    
    if i % 2 == 0:
        modified_word += word1[i].upper()
    
    else:
        modified_word += word1[i].lower()


print("The modified word is:", modified_word)







name = "dato"


if len(name) > 5:
    
    converted_name = name.upper()
else:
    
    converted_name = name.lower()


print("The converted name is:", converted_name)





names = ["dato", "beruashvili"]


for i in range(len(names)):
    names[i] = names[i].capitalize()


print("The modified list is:", names)


first_name = input(" please enter your first name: ")
last_name = input("please enter your last name: ")


names = [first_name, last_name]


capitalized_names = [name.capitalize() for name in names]


initials = '.'.join(name[0] for name in capitalized_names)


print("Your initials are:", initials)



word2 = input("Enter a word: ")
letter = input("Enter a letter: ")


index = word2.find(letter)


if index != -1:
    print("The index of the first letter in the word is:", index)
else:
    print("The letter is not in the word.")


def find_index(word3, letter):
    for i in range(len(word3)):
        if word3[i] == letter:
            return i
    return -1

word3 = input("Enter a word: ")
letter = input("Enter a letter: ")

index = find_index(word3, letter)

print("The index of the first letter in the word is:", index)



family_members = ["Kaxa", "Natia", "Mari", "Sofo", "demetre" , "ME"]

family_string = "-".join(family_members)

print(family_string)


words = []
for i in range(5):
    words = input("Enter word " + str(i+1) + ": ")
    words.append(words)


join_value = input("Enter the joining value: ")


for i in range(1, len(words), 2):
    words[i] = words[i] + join_value


result = ""
for word in words:
    result += word

print(result)



name1 = "dato"
lowercase_name = name1.lower()
print(lowercase_name) 



name2 = "Dato"
uppercase_name = name2.upper()
print(uppercase_name)




name3 = "Dato"
capitalized_name = name3.capitalize()
print(capitalized_name)




text = "Hello, World!"
index = text.find("World")
print(index)



words1 = ["Hello", "World"]
separator = " "
sentence = separator.join(words1)
print(sentence) 








