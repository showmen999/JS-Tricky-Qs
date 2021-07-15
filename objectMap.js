const student = [
    {id:21,name:'Shakib'},
    {id:31,name:'Liton'},
    {id:41,name:'Riyad'},
    {id:51,name:'Tamim'},
    {id:61,name:'Mushi'}
];
// const sName = [];
// for(let i=0;i<student.length;i++)
// {
//     const elements = student[i];
//     const name = elements.name
//     sName.push(name);
//     // console.log(elements);
// }
// console.log(sName);

const names = student.map(s => s.name);
const ids = student.filter(s => s.id>40)
// console.log(names); 
console.log(ids);