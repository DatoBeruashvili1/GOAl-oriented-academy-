rows = 7
cols = 6
matrix = []


for i in range(rows):
    row = []
    print(f"შეიყვანეთ {cols} რიცხვი {i + 1}-ე სტრიქონში:")
    for j in range(cols):
        number = float(input(f"რიცხვი {j + 1}: "))
        row.append(number)
    matrix.append(row)


for i in range(rows):
    average = sum(matrix[i]) / cols
    print(f"{i + 1}-ე სტრიქონის საშუალო არითმეტიკა: {average}")

rows = 7
cols = 6
matrix = []


for i in range(rows):
    row = []
    print(f"შეიყვანეთ {cols} რიცხვი {i + 1}-ე სტრიქონში:")
    for j in range(cols):
        number = float(input(f"რიცხვი {j + 1}: "))
        row.append(number)
    matrix.append(row)


for j in range(cols):
    column_sum = 0
    for i in range(rows):
        column_sum += matrix[i][j]
    average = column_sum / rows
    print(f"{j + 1}-ე სვეტის საშუალო არითმეტიკა: {average}")