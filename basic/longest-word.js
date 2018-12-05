// Returns the size of the longest word
function findLongestWord(str)
{
    var words = str.split(' ');
    var maxLength = 0;
    for (var i = 0; i < words.length; i++)
    {
        if (words[i].length > maxLength)
        {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

function findLongestWord2(str)
{
    return str.split(' ').reduce(function (x, y)
    {
        return Math.max(x, y.length);
    }, 0);
}

function findLongestWord3(str)
{
    str = str.split(' ');
    if (str.length === 1) {
        return str[0].length;
    }
    if (str[0].length >= str[1].length)
    {
        str.splice(1, 1);
        return findLongestWord3(str.join(' '));
    }
    if (str[0].length <= str[1].length)
    {
        return findLongestWord3(str.slice(1, str.length).join(' '));
    }

    return str.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog.'));
console.log(findLongestWord2('The quick brown fox jumped over the lazy dog.'));
console.log(findLongestWord3('The quick brown fox jumped over the lazy dog.'));