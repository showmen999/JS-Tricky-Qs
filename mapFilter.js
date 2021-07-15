
/****Bangla System to find square******/
const numbers = [3,5,6,7,8,10];
const ages = [7,5,9,3];
// const output = [];
// for(let i=0;i<numbers.length;i++)
// {
//     const elements = numbers[i];
//     const result = elements*elements;
//     output.push(result);
// }
// console.log(output);

//**Using Map to get that***//
// function square(elements)
// {
//     return elements*elements;

// numbers.map(function (elements,index,array){
//     console.log(elements,index,array);
// });

//console.log(numbers);

const square = numbers.map(function(elements){
    return elements*elements;
})

const result = ages.map(x => x*x);   //to much sort cut

console.log(result);

// console.log(square);


//**Js filter***//
// const isThere = numbers.filter(x=> x>7)
const find =  numbers.find(x=> x>5)
// console.log(isThere);
console.log(find);