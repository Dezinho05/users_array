//let input = window.input('Insira uma idade:');

const users = [
    {name: "Gabriel", age: 25},
    {name: "David", age: 24},
    {name: "Lissandro", age: 26},
    {name: "Arthur", age: 21}
];

const filterUsers = users.filter((pao) => pao.age >= 25);
for(let z = 0; z < filterUsers.length; z++) {
    console.log(`${filterUsers[z].name} é maior de idade.`)
}


// for(let z = 0; z < users.length; z++) {
//     const filterUsers = users.filter((user) => user.age[z] >= 25);
//     if (filterUsers == true) {
//         console.log(filterUsers);
//     } else {
//         console.log('Menor de idade')
//     }

// }

function YearsOldCalculator(age) {
    let result;
    if (age < 18) {
       result = 'Você é menor de idade.';
    }
    else {
        result = 'Você é maior de idade.';
    }
    return result;
}

//console.log(YearsOldCalculator(10));