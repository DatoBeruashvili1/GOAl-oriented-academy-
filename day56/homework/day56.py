def maxMultiple(divisor, bound):
    return max(i for i in range(bound + 1) if i % divisor == 0)

def switcheroo(s):
    return s.translate(str.maketrans('ab', 'ba'))

def unique_in_order(sequence):
    result = []
    for item in sequence:
        if not result or item != result[-1]:
            result.append(item)
    return result