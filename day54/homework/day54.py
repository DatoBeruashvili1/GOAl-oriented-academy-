def get_size(w,h,d):
    volume = w * h * d
    surface_area = 2 * (w * h + h * d + d * w)
    return [surface_area, volume]

def correct(s):
    corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    }
    for mistake, correction in corrections.items():
        s = s.replace(mistake, correction)
    return s

def stray(arr):
    for num in arr:
        if arr.count(num) == 1:
            return num
    

def max_diff(lst):
    if len(lst) < 2:
        return 0
    return max(lst) - min(lst)