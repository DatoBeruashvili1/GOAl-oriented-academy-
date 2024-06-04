num1 = [4, 5]

num2 = [6, 7]


print(int(num1[0] + num2[1]))


print(int(num1[1] - num2[0]))

print(int(num1[1] * num2[0]))


print(int(num1[0] / num2[0]))



lenght =  (20)

witdh = (10)

print(int(lenght * witdh))



lenght1 = (10)
width1 = (20)
lenght2 = (10)
width2 = (20)

print(int(lenght1 + lenght2 + width1 + width2))



 
def my_sum_func(numbers_list) :
  
  sum = 0 
  for i in numbers_list :
    sum = sum + i
    print(sum)

my_sum_func = ([1,2,3,4,5])



def find_min_max(numbers_list1) :
    min = numbers_list1 [0]
    max = numbers_list1 [0]
    
    for i in numbers_list1 :
        if min > i :
            min = i
        if max < i :
            max = i
            
    print(min, max)
    
find_min_max([1,2,3,4,5])
























