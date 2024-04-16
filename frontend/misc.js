/*
    *
    * Como o JS foi projetado a priori para rodar nos browsers, ou seja, para 
    * inserir comportamento em sites dinâmicos e estáticos, era
    * preciso construir a linguagem para ser non-blocking, ou seja,
    * os processos e chamadas não esperam outros processos específicos
    * terminarem antes de seguir o código, esses "processos específicos"
    * podem ser entendidos como: chamadas externas de APIs, leitura de arquivos,
    * etc, e isso se dá pois o Javascript é uma linguagem Single Threaded, ou seja,
    * executa em uma uma única sequência, assim, caso o JS "blockasse" sua thread
    * para esperar um processo demorado acabar, o seu browser travaria com frequência
    *    
*/


/*
    *
    * THREAD     => quando falamos em concorrência e processos, podemos entender uma thread de execução 
    *               como a menor sequência de instruções de um processo (por exemplo, um cógido em JS
    *               que rode 10 linhas de código seguindo sua sequência lógica). Em suma, é um dos 
    *               componentes de um processo.
    * 
    * PROCESSO   => um processo, em computação, é uma unidade independente de uma instância de software
    *               sendo schedulada pelo sistema operacional. Processos são isolados e entendidos como
    *               uma "unidade de recursos", ou seja, quando o kernel faz o seu schedule, ele aloca 
    *               a quantidade de recursos (memória, CPU, file descriptors) necessário para a execução de todas
    *               as suas threads. Um proceso pode ter múltiplas threads, e essas thread podem compartilhar
    *               os recursos do processo, porém, processos diferentes não compartilham recursos.
    * 
    * FILE       => são identificadores únicos de um Sistema Operacional (SO) usados por um processo para 
    * DESCRIPTORS   acessar arquivos ou outros recursos I/O (input/output) gerenciados pelo SO (um impressora
    *               por exemplo). Em sistemas operacionais Unix-like (sistemas que utilizam o kernal Linux)
    *               temos os file descriptors default do SO representados por: STDOUT (Standard Output), 
    *               STDIN (Standard Input) e STDERR (Standard Error).
    *             
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

/*
    *
    * Neste caso, o código irá logar, em ordem: 
    * 1. "Started"
    * 2. "Finished"
    * 3. "=)" depois de 5 segundos 
*/

//-------------------------------------------------------------------------

// TRANSFORMANDO CÓDIGOS ASSÍNCRONOS EM SÍNCRONOS USANDO CALLBACKS:
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

