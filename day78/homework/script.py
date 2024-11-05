def sum_matrices(matrix1, matrix2):
   
    if len(matrix1) != len(matrix2) or len(matrix1[0]) != len(matrix2[0]):
        raise ValueError("Matrices must have the same dimensions")

    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix1[0])):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    return result

matrix1 = [[1, 3], [1, 4]]
matrix2 = [[4, 1], [2, 2]]
result_sum = sum_matrices(matrix1, matrix2)
print(result_sum) 

def transpose_matrix(matrix):
    transposed = []
    for j in range(len(matrix[0])):  
        new_row = []
        for i in range(len(matrix)):  
            new_row.append(matrix[i][j])
        transposed.append(new_row)
    return transposed


matrix = [[1, 2, 3], [4, 5, 6]]
result_transpose = transpose_matrix(matrix)
print(result_transpose)

def sum_diagonal_elements(matrix):
    if len(matrix) != len(matrix[0]):
        raise ValueError("Matrix must be square (n x n)")

    primary_diagonal_sum = 0
    secondary_diagonal_sum = 0
    n = len(matrix)

    for i in range(n):
        primary_diagonal_sum += matrix[i][i]  
        secondary_diagonal_sum += matrix[i][n - 1 - i]  

    return primary_diagonal_sum, secondary_diagonal_sum


square_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result_diagonals = sum_diagonal_elements(square_matrix)
print(result_diagonals)