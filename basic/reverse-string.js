function reverseString(str)
{
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
}

function reverseString2(str)
{
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--)
    {
        newStr += str[i];
    }
    return newStr;
}

function reverseString3(str)
{
    var rev = '';
    str.split('');
    for (var i = str.length - 1; i >= 0; i--)
    {
        rev += str[i];
    }
    return rev;
}

function reverseString4(str)
{
    return str.split('').reverse().join('');
}

console.log(reverseString("Greetings from Earth"));
console.log(reverseString2("Greetings from Earth"));
console.log(reverseString3("Greetings from Earth"));
console.log(reverseString4("Greetings from Earth"));