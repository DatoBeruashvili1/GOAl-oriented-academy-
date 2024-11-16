def count_odd_digits(number):

  count = 0
  for digit in str(number):
    if int(digit) % 2 != 0:
      count += 1
  return count

number = int(input("Enter an integer: "))


odd_digit_count = count_odd_digits(number)


print("The number of odd digits in", number, "is", odd_digit_count)