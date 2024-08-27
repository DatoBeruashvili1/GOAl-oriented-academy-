def user_contacts(users):
    contacts = {}
    for user in users:
        if len(user) == 2:
            contacts[user[0]] = user[1]
        else:
            contacts[user[0]] = None
    return contacts



def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        last_name = names.pop()
        return f"{', '.join(names[:-1])}, and {last_name} like this"