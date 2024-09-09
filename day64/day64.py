def count_by(x, n):
  result = []
  num = x
  for i in range(n):
    result.append(num)
    num += x
  return result

def divisors(n):
  str = 0
  for i in range(1, n + 1):
    if n % i == 0:
      str += 1
  return str

def to_jaden_case(string):
  listn = string.split()
  result = []
  for i in listn:
    cap_string = i.capitalize()
    result.append(cap_string)
  return " ".join(result)

def solution(s):
  strng = ""
  for i in s:
    if i.isupper():
      strng += " " + i
    else:
      strng += i
  return strng


def collatz(n):
  count = 0
  while n != 1:
    if n % 2 == 0:
      n = n // 2
    else:
      n = n * 3 + 1
    count = count + 1
  return count + 1