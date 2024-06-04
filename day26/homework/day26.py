user_name = input("please enter your name :")
user_surname = input("please enter your surname :")

print(user_name.upper())

print(user_name.lower())

print(user_surname.upper())

print(user_surname.lower())

print(user_name.capitalize() + user_surname.capitalize())

def find_index(word,find_char) :
    for index in range(len(word)) :
        if word[index] == find_char :
            return index

print(find_index("dato","t"))




def list_length(lst):
    count = 0
    for i in lst:
        count += 1
    return count

my_list = ["apple", "banana", "cherry"]
print(list_length(my_list))




listn = ["zeti", "kartofili", "wiwibura"]

removed_items = listn.pop(0)

added_item = listn.append("protein")

changed_word = listn.insert(1,"kitri")
print(listn)


# pop funqcia listshi im elements shlis romlis indexsac miutiteb

# append funqcia listshi amatebs im elements rasac miutiteb

# insert funqciit shegidzlia elementi shecvalo sxva elementit














