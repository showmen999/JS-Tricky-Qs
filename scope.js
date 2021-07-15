
let bonus = 10;
function sum(x,y)
{
    const result = x+y+bonus;
    console.log(bonus);
    return result;
}

const sumy = sum(3,7);
console.log(sumy);
console.log(bonus);
