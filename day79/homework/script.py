import random

def divide_students_into_groups(students, num_groups, leaders):
    if num_groups <= 0:
        raise ValueError("Number of groups must be higher than 0")
    
    total_students = len(students)
    base_group_size = total_students // num_groups
    extra_students = total_students % num_groups  

    groups = []
    index = 0

    for i in range(num_groups):
        group_size = base_group_size + (1 if i < extra_students else 0)  
        group = students[index:index + group_size]
        
       
        if i < len(leaders):
            group.insert(0, leaders[i]) 
        
        groups.append(group)
        index += group_size

    return groups


students_list = [
  "cotne nebieridze" "dato beruashvili" "deme goisashvili" "tornike tamikashvili" "ioane cercvadze" "mate okinashvili" "giorgi papunashvili" "cotne jabelidze" "lasha taziashvili" "dimitri ugrexelidze" "nikoloz kukava" "nika suxishvili" "nina joxadze" "sandro suriakovi" "gega devdariani"
    
]

number_of_groups = 3
leaders = ['Saba Shubashishvili', 'Nika Chavleishvili', 'Davit Chxikvadze']


shuffled_students = students_list

groups = divide_students_into_groups(shuffled_students, number_of_groups, leaders)


for i, group in enumerate(groups):
    print(f"Group {i + 1}: {group}")