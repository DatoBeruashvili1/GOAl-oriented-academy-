# def combine_functions(input_string, char_to_find):
#     lowercase_string = input_string.lower()
#     char_index = lowercase_string.find(char_to_find)
    
#     capitalized_string = lowercase_string.capitalize()
    
    
#     uppercase_char = capitalized_string[char_index].upper()
    
#     return capitalized_string.replace(capitalized_string[char_index], uppercase_char)


# input_string = "o"
# char_to_find = "k"

# result = combine_functions(input_string, char_to_find)
# print(result)




def change_list_element(input_list):
    
    print("Current list:", input_list)
    index_to_change = int(input("Enter the index you want to change: "))
    
    
    new_string = input("Enter the new string: ")
    
    
    input_list[index_to_change] = new_string
    
    
    result = " ".join(input_list)
    
    
    return result



names = ["Dato", "Luka", "Gio", "Mamuka"]

result = change_list_element(names)
print(result)




