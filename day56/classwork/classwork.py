def reverse_words(text):
    return ' '.join(word[::-1] for word in text.split(' '))

def remove_url_anchor(url):
    return url.split('#')[0]