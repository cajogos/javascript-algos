function truncateString(str, num)
{
    if (str.length > num && num > 3)
    {
        return str.slice(0, (num - 3)) + '...';
    }
    else if (str.length > num && num <= 3)
    {
        return str.slice(0, num) + '...';
    }
    return str;
}
console.log(truncateString('Apple', 1));
console.log(truncateString('Apple', 3));
console.log(truncateString('Apple', 9));

function truncateString2(str, num)
{
    if (str.length > num)
    {
        return str.slice(0, num > 3 ? num -3 : num) + '...';
    }
    return str;
}
console.log(truncateString2('Apple', 1));
console.log(truncateString2('Apple', 3));
console.log(truncateString2('Apple', 9));