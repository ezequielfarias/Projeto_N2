const{select} = require('@inquirer/prompts')
const start = ()=>{
  while(true){
  let opcao= "cadastrar"
  switch (opcao){
      case "Cadastrar":
      console.log("Vamos cadastrar")
      break

      case "Listar":
          console.log("Vamos listar")
          break
          case "sair":
            return
}


  }
}

start()