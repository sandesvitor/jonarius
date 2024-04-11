// const a = "Hello"
// const b = 1
// const c = 2.2342
// const d = true
// const e = [1,2,3]
// const f = {message: "hello"}

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)

// const newList = e.forEach((element) => {
//     console.log(element)
// })

// console.log(newList)

const listaDeDicionarios = [
    {id: 1, name: "Jonas"}, // key-value pair
    {id: 2, name: "Vitor"},
    {id: 3, name: "Helio"},
]

const jonas = listaDeDicionarios.find((user) => {
    return user.name === "Helio"
})

console.log(jonas)

const findCustom = (element) => {
    if (element.id === 2){
        return element
    }

    return undefined
}


for (let i = 0; i < listaDeDicionarios.length; i++){
    let user = findCustom(listaDeDicionarios[i])
    console.log(user)
}

