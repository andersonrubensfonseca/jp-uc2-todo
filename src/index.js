const Tarefa = require('./models/Tarefa')
const readline = require('readline')
const {exit} = require('process')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const tarefa = new Tarefa();


function adicionarTarefa(){
    leitor.question("Digite uma tarefa: ",function(answer){
        tarefa.setTarefas(answer)
        leitor.question("Adicionar nova tarefa? (s ou n) ",function(answer){
            if(answer.toLowerCase()==="s"){
                adicionarTarefa()
            }else{
                exit()
            }
        })
    })
}

leitor.question("Listar tarefa ou Adicionar tarefa? (L ou A) ",function(answer){
    if(answer.toUpperCase()==="A"){
        adicionarTarefa()        
    }else if(answer.toUpperCase()==="L"){
        tarefa.getTarefas()
    }else{
        console.log("Opção inválida!")
    }
})