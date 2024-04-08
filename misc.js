const a = "Hello"
const b = 1
const c = 2.2342
const d = true
const e = [1,2,3]
const f = {message: "hello"}

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)

const newList = e.forEach((element) => {
    console.log(element)
})

console.log(newList)
