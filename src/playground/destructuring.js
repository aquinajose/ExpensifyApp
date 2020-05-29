// const person={
//     //name:'Andrews',
//     age:29,
//     location:{
//          city:'Miami Beach',
//          temp:92
//     }
   
    
// }

// const {
//     name:firstName='Anonymous',age,
//     location:{
//     city,temp:temperature
// }}=person
// console.log(`${firstName} is ${age}`);
// console.log(`It is ${temperature } in ${city}`)

// const book={
//     ttile:'Ego is an enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         //name:"Penquin"
//     }
// }
// const {
//     publisher:{
//         name :publisherName='self publish'
//     }
// }=book;
// console.log(publisherName)

//Array Destructing

const item=['Coffee (hot)','$2.0','$2.5','$2.75'];
const [itemName,,medium]=item
console.log(`A medium ${itemName} costs ${medium}`)