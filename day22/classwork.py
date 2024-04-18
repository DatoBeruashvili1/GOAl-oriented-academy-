def manual_pop(lst, index):
    if index < 0 or index >= len(lst):
        return None
    result = []
    for i in range(len(lst)):
        if i != index:
            result.append(lst[i])
    return result

my_list = [10, 20, 30, 40, 50]
index = 2
print(manual_pop(my_list, index))

def manual_count(list, element):
    count = 0
    for item in list:
        if item == element:
            count += 1
    return count
my_list = [10, 20, 30, 20, 40, 20, 50]
element = 20
print(manual_count(my_list, element))  









