function factorialise(num)
{
    var result = 1;
    for (var i = num; i > 0; i--)
    {
        result *= i;
    }
    return result;
}

console.log(factorialise(5));
console.log(factorialise(10));
console.log(factorialise(20));
console.log(factorialise(0));

function factorialise2(num)
{
    if (num === 0)
    {
        return 1;
    }
    return num * factorialise2(num - 1);
}

console.log(factorialise2(5));
console.log(factorialise2(10));
console.log(factorialise2(20));
console.log(factorialise2(0));

function factorialise3(num)
{
    for (var a = 1; num >= 1; num--)
    {
        a *= num;
    }
    return a;
}

console.log(factorialise3(5));
console.log(factorialise3(10));
console.log(factorialise3(20));
console.log(factorialise3(0));