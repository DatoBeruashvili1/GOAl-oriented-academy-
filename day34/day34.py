def square_digits(num):
    num_str = str(num)
    squared_digits = ""
    for digit in num_str:
        squared_digits += str(int(digit)**2)
    return int(squared_digits)