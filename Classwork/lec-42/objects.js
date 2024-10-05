// Object can be created in 2 ways: constructor/literals:

// A: constructor:
// const obj = new Object();
// obj.name = "Muskaan";
// console.log(obj)

// B: literals:

// const user = 
// {
//     name: 'muskan',    //name: key, muskan: value
//     'full name': 'Muskan',
//     age: 24,
//     Class: 'FEE',
//     email: 'muskan.aanu@gmail.com'
// }

// updating object:
// user.name = 'Muskan'
// console.log(user)

//Accessing object value:
// console.log(user.age)
// console.log(user['full name'])
// console.log(user)


// Object inside object:
// const users = {
//     user1: {
//         name: 'muskan',
//         age: 24
//     },
//     user2: {
//         name: 'khushi',
//         age: 24
//     },
//     user3: {
//         name: 'kritika',
//         age: 24
//     }
// }
// console.log(users);
// console.log(users.user2)
// console.log(users['user2'])
// console.log(users.user2.age)


// object merge:
const user1 = { name1: 'Yash', age1: 25 };
const user2 = { name2: 'Devdutt', age2: 24 };

// const user3 = Object.assign(user1,user2)
const user4 = {...user1, ...user2 }
    // console.log([...user1,...user2])
console.log(user1)
console.log(user4)