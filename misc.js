// const a = "Hello"
// const b = 1
// const c = 2.2342
// const d = true
// const e = [1,2,3]
// const f = {message: "hello"}

// // console.log(typeof a)
// // console.log(typeof b)
// // console.log(typeof c)
// // console.log(typeof d)
// // console.log(typeof e)
// // console.log(typeof f)


// const newList = e.forEach((element) => {
//     console.log(element)
// })

// console.log(newList)


// const double = (x) => {
//     return 2*x; 
// }

// const doubleImplicitReturn = (x) => 2*x;


// console.log(double(2));

// console.log("nova funcao " + doubleImplicitReturn(2));

const listaDeDicionarios = [
    {id: 1, name: "Jonas"}, // key-value pair
    {id: 2, name: "Vitor"},
    {id: 3, name: "Helio"},
]

const jonas = listaDeDicionarios.find((user, index) => {
    console.log(index);
    return user.name === "Jonas"
})

console.log(jonas)