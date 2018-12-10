function confirmEnding(str, target)
{
    return str.substr(-1 * (target.length)) === target;
}

console.log(confirmEnding('Carlos', 's'));
console.log(confirmEnding('Paul', 'ul'));
console.log(confirmEnding('Paul', 'u'));

function confirmEnding2(str, target)
{
    if (str.substr(str.length - target.length, str.length) !== target)
    {
        return false;
    }
    return true;
}
console.log(confirmEnding2('Carlos', 's'));
console.log(confirmEnding2('Paul', 'ul'));
console.log(confirmEnding2('Paul', 'u'));