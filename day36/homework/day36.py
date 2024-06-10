about_me = {
    "name": "dato",
    "age": "16",
    "hobbies": "helping children when saba leader tells me",
    "favorite_food": "ostri",
    "location": "georgia"
}

values_joined = ""
for key, value in about_me.items():
    values_joined += value + " "

print("About me: " + values_joined)


def user_contacts(users):
    contacts = {}
    for user in users:
        if len(user) == 2:
            contacts[user[0]] = user[1]
        else:
            contacts[user[0]] = None
    return contacts


def fillable(stock, merch, n):
    if merch in stock:
        return stock[merch] >= n
    else:
        return False