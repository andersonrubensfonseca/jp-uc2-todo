const fs = require('fs')
const { exit } = require('process')

class Tarefa{
    constructor(){}
    setTarefas(text){
        fs.appendFile('./src/data/tarefas.txt',`${text}\r\n`,(err)=>{
            if(err){
                console.log(err)
            }
        })
    }
    getTarefas(){
        fs.readFile('./src/data/tarefas.txt', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(data)
            exit()
          })
    }

}
module.exports = Tarefa