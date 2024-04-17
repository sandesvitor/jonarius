const button1 = document.querySelector("#ex-1")
const button2 = document.querySelector("#ex-2")
const button3 = document.querySelector("#ex-3")
const button4 = document.querySelector("#ex-4")

const awnser = document.querySelector("#awnser")

const doBlockingExercise1 = () => {
    for (let i = 0; i < 5; i++){
        console.log("Iteration " + (i + 1))
        alert(`This is iteration number ${i + 1}`)
    }
}

button1.addEventListener("click", () => {
    for (let i = 0; i < 5; i++){
        alert(`This is iteration number ${i + 1}`)
    }
})

button2.addEventListener("click", () => {
    for (let i = 0; i < 200000; i++){
        console.log("Iteration " + (i + 1))
    }
})

button3.addEventListener("click", () => {
    console.log("Fazendo uma requisição GET na API para retornar um insulto:")
    const insult = fetch("https://insult.mattbas.org/api/insult")
    
    let resultBlock = document.createElement("h1")
    resultBlock.innerHTML = insult

    // cleaning up awnser element
    if (awnser.hasChildNodes()){
        awnser.removeChild(awnser.firstChild)
    }
        
    awnser.appendChild(resultBlock)
    
    console.log("Resultado do insulto:")
    console.log(insult)
})

button4.addEventListener("click", async () => {
    console.log("Fazendo uma requisição GET na API para retornar um insulto:")
    const insult = await fetch("https://insult.mattbas.org/api/insult")
        .then(res => res.text())
        .then(res => res.toUpperCase())
        .catch(err => {
            console.log(err.message)
        })

    let resultBlock = document.createElement("h1")
    resultBlock.innerHTML = insult
      
    // cleaning up awnser element
    if (awnser.hasChildNodes()){
        awnser.removeChild(awnser.firstChild)
    }

    awnser.appendChild(resultBlock)

    console.log("Resultado do insulto:")
    console.log(insult)
})
