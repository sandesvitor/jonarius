// Callback functions definition:
function success1(msg) {
    console.info(msg)
}

function success2(func) {
    console.log("DOING SOMETHING BEFORE CALLING THE NEXT CALLBACK FUNCTION...")
    func("Process completed =)")
}

function failure(msg) {
    throw new Error(msg)
}

// 1 Level Callback Chaining (Callback Tree)
function asyncMockAudioFile1(successCallback, failureCallback, control){
    if (control === 0) {
        successCallback("Process completed =)")
        return
    }

    if (control === 1) {
        failureCallback("Process failed =(")
    }
}

asyncMockAudioFile1(success1, failure, 0)


// 2 Levels Callback Chaining (Callback Tree)

function asyncMockAudioFile2(
    successCallback1, 
    successCallback2, 
    failureCallback, 
    control
) 
{
    if (control === 0) {
        successCallback2(successCallback1)
        return
    }

    if (control === 1) {
        failureCallback("Process failed =(")
    }
}

asyncMockAudioFile2(success1, success2, failure, 0)

/*
    *
    * Esta abordagem de usar funções callbacks se dá para resolver 
    * no Node um comportamento padrão do Javascript do Browser, sua
    * assincronicidade (asynchronous programming). Como o JS foi
    * projetado a priori para rodar nos browsers, ou seja, para 
    * inserir comportamento em sites dinâmicos e estáticos, era
    * preciso construir a linguagem para ser non-blocking, ou seja,
    * os processos e chamadas não esperam outros processos específicos
    * terminarem antes de seguir o código, esses "processos específicos"
    * podem ser entendidos como: chamadas externas de APIs, leitura de arquivos,
    * etc, e isso se dá pois o Javascript é uma linguagem Single Threaded, ou seja,
    * executa em uma uma única sequência, assim, caso o JS "blockasse" sua thread
    * para esperar um processo demorado acabar, o seu browser travaria com frequência
    * 
    * Abaixo um exemplo:
    *    
*/

function slowProcessMock(){
    setTimeout(() => {
        console.log("=)")
    }, 5000)
}

console.log("Started")
slowProcessMock()
console.log("Finished")
