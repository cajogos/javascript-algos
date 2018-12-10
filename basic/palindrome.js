function palindrome(str)
{
    let front = 0;
    let back = str.length - 1;

    while (back > front)
    {
        while (str[front].match(/[\W_]/))
        {
            front++;
            continue;
        }

        while (str[back].match(/[\W_]/))
        {
            back--;
            continue;
        }

        if (str[front].toLowerCase() !== str[back].toLowerCase())
        {
            return false;
        }

        front++;
        back--;
    }

    return true;
}

console.log(palindrome('seyes'));