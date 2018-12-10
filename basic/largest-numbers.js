var numArr = [
    [120, 23, 45, 67],
    [220, 19000, 34],
    [566, 444, 67, 78],
    [1, 3, 6, 8]
];

function largestOfFour(arr)
{
    var results = [];
    for (var n = 0; n < arr.length; n++)
    {
        var largest = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++)
        {
            if (largest < arr[n][sb])
            {
                largest = arr[n][sb];
            }
        }
        results[n] = largest;
    }

    return results;
}
console.log(largestOfFour(numArr));


function largestOfFour2(arr)
{
    return arr.map(function(group)
    {
        return group.reduce(function (prev, current)
        {
            return (current > prev) ? current : prev;
        });
    });
}
console.log(largestOfFour2(numArr));


function largestOfFour3(arr)
{
    return arr.map(Function.apply.bind(Math.max, null));
}
console.log(largestOfFour3(numArr));