function isPangram(str) {
    let lowerCased = str.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!lowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}

exports.isPangram = isPangram;