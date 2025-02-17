n = int(input("შეიყვანეთ n: "))
array = list(map(int, input("შეიყვანეთ {} ელემენტი (ცალ-ცალკე სივრცით გამოყოფილი): ".format(n)).split()))


element_count = {}

for element in array:
    if element in element_count:
        element_count[element] += 1
    else:
        element_count[element] = 1


for element, count in element_count.items():
    print(f"ელემენტი {element} მეორდება {count} ჯერ.")