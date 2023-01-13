function isValidPassword (password, username) {
    const passwordLength = password.length < 8;
    const space = password.includes(' ');
    const sameAsUser = password.includes(username);
    return (passwordLength || space || sameAsUser) ? false : true;
}

exports.isValidPassword = isValidPassword;