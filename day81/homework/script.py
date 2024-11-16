def babel_sort(arr):
  n = len(arr)
  swapped = True
  while swapped:
    swapped = False
    for i in range(n - 1):
      if arr[i] > arr[i + 1]:
        
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        swapped = True
  return arr


my_array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print(babel_sort(my_array))