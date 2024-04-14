numbers = [1,2,3,4,5,6,7,8,9,10]

for i in range(len(numbers) - 1) :
    if numbers[i] % 2 == 0 :
        print(numbers[i])



list = [1,2,-1,-45, 20, -60,12,-1,-2]
even_list = []
odd_list = []

for i in range(len(list)) :
    if list[i] > 0 :
        even_list.append(list[i])
    else :
        odd_list.append(list[i])
print(even_list , odd_list)











