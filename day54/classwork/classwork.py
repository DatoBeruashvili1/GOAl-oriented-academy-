def solution(s):
    result = ""
    for char in s:
        if char.isupper():
            result += " " + char
        else:
            result += char
    return result

def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0

def count_sheeps(sheep):
    return sum(1 for x in sheep if x)