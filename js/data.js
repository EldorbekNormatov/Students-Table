// let dataBase = [
//     {name: "sanjar", age: 16, score: 65},
//     { name: "baxtiyor", age: 20, score: 85 },
//     { name: "Dildora", age: 15, score: 75 },
//     { name: "Alisher", age: 19, score: 90 },
//     { name: "Murod", age: 35, score: 98 },
// ]

let dataBase = window.localStorage.getItem('dataBase');
if ( !dataBase ) dataBase = [];
else dataBase = JSON.parse( dataBase )