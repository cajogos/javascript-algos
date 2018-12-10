String.prototype.replaceAt = function(index, character)
{
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str)
{
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle)
    {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
console.log(titleCase('This is the story of my life.'));


function titleCase2(str)
{
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val)
    {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
}
console.log(titleCase2('This is the story of my life.'));


function titleCase3(str)
{
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
console.log(titleCase3('This is the story of my life.'));


function titleCase4(str)
{
    str = str.split(' ');
    for (var i = 0; i < str.length; i++)
    {
        str[i][0] = str[i][0].toUpperCase();
    }
    return str.join(' ');
}
console.log(titleCase4('This is the story of my life.'));