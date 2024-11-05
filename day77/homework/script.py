def print_positions(rows, cols):
    for r in range(1, rows + 1):
        for c in range(1, cols + 1):
            print(f"row: {r} col: {c}")


print_positions(2, 2)

def multiplication_table():
    table = []
    for i in range(1, 11):
        row = []
        for j in range(1, 11):
            row.append(i * j)
        table.append(row)
    return table

# Example usage
table = multiplication_table()
for row in table:
    print(row)

def print_greater_pairs(n):
    pairs = []
    for x in range(1, n + 1):
        for y in range(1, n + 1):
            if y > x:
                pairs.append((x, y))
    return pairs

# Example usage
result_pairs = print_greater_pairs(3)
print(result_pairs)