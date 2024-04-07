# def find_min_max(numbers_list1) :
#     min = numbers_list1 [0]
#     max = numbers_list1 [0]
    
#     for i in numbers_list1 :
#         if min > i :
#             min = i
#         if max < i :
#             max = i
            
#     print(min, max)
    
# find_min_max([1,2,3,4,5,])







# def low_to_hight(numbers_list) :
#     low = numbers_list [0]
#     hight = numbers_list [0]
    
#     for i in numbers_list :
#         if low > i :
#             low = i
        
#         if hight < i :
#             hight = i    



#     print(low,hight)
    
# low_to_hight([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])






# def counting_fruits(fruits) :
#     apples = fruits[0]
#     bananas = fruits[0]
    
#     for i in fruits :
#         if apples < i :
#             apples = i
#         if bananas > i :
#             bananas = i
        
#     print(apples, bananas)

# counting_fruits([1,2,3,4,5])


# def no_showing(nsh) :
#     for i in nsh :
#         print(nsh[i] *25)

# def no_showing1(nuh) :
#     for i in nuh :
#         print([i] + "uh")


# even_list1 = []

# def even_numbers(even) :
#     for i in even :
#         if i % 2 ==0 :
#             even_list1.append(i)

# print(even_numbers([1,2,3,4,5,]))    






# even_list = []

# odd_list = []

# def summ(list) :
#     for i in list :
#         if i % 2 == 0 :
#             even_list.append(i)
#         else :
#             odd_list.append(i)
#         sum_even = sum(even_list) 
#         sum_odd = sum(odd_list)
#         return[sum_even, sum_odd]






# print(summ([1,2,3,4,5]))
# print(summ([1,2,3,4,5,6,7,8,9,10]))



# def count_elements(nums):
#     return len(nums)
# nums = [1,2,3,4,5]
# result = count_elements(nums)
# print(result)




def my_replace(s, old, new):
    return s.replace(old, new) 

s = "Hello, world!"
old = "world"
new = "Python"
result = my_replace(s, old, new)
print(result)











































