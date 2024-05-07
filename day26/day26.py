def sum_str(a, b):
    x = int(a)
    y = int(b)
    
    
    sum_value = x + y
    
    
    sum_string = str(sum_value)
    
    
    return sum_str
result = sum_str("123ng", "456")
print(result)



def reverse_seq(n):
    
    
    if n > 0:
        
        result = []
        
       
        for i in range(n, 0, -1):
            
            result.append(i)
        
        
        return result
    else:
        result = reverse_seq(5)
        print(result)



















