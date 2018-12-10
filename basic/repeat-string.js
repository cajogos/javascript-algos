function repeatStringNumTimes(str, num)
{
    if (num > 0)
    {
        return str.repeat(num);
    }
    return '';
}
console.log(repeatStringNumTimes('candy apple', -1));
console.log(repeatStringNumTimes('candy apple', 5));

function repeatStringNumTimes2(str, num)
{
    if (num < 0)
    {
        return '';
    }
    if (num === 1)
    {
        return str;
    }
    return str + repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes2('candy apple', -1));
console.log(repeatStringNumTimes2('candy apple', 5));

function repeatStringNumTimes3(str, num)
{
    return num > 0 ? str.repeat(num) : '';
}
console.log(repeatStringNumTimes3('candy apple', -1));
console.log(repeatStringNumTimes3('candy apple', 5));