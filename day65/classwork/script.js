function manualGetElementsByTagName(tagName) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName === tagName.toUpperCase()) {
            result.push(elements[i]);
        }
    }

    return result;
}