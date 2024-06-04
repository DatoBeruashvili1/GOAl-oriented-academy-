


def modify_numbers(numbers) :
  result = []
  for i in range(len(numbers)) :
    if i % 2 == 0 :
      result.append(numbers * 2)
    if i % 2 != 0 :
      result.append(numbers * 4)

numbers = [1.2 , 5, 9.34,11, 90]
result = modify_numbers(numbers)
print(result)






def convert_case(names):
    result = []
    for i, name in enumerate(names):
        if i % 2 == 0:
            result.append(name.upper())
        else:
            result.append(name.lower())
    return result
names = ["anano", "dato", "beqa", "mari"]
result = convert_case(names)
print(result)



def capitalize_words(sentence):
    words = sentence.split()
    for i, word in enumerate(words):
        words[i] = word.capitalize()
    return ' '.join(words)

sentence = 'hello world! this is a test sentence.'
result = capitalize_words(sentence)
print(result)








