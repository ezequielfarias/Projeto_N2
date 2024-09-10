const{select} = require('@inquirer/prompts')

const start = async ()=>{
  while(true){
    const opcao = await select({
      message:"MENU",
      choices:[
        {
          name: "cadastrar Câmera",
          value: "Cadastrar"
        },
        {
          name: "Listar Câmeras",
          value: "Listar"
        },
        {
          name: "sair",
          value: "sair"
        },
      ]
    })

  switch (opcao){
      case "Cadastrar Câmera":
      console.log("Vamos cadastrar")
      break

      case "Listar Câmeras":
          console.log("Vamos listar")
          break
          case "sair":
            return
}


  }
}

start()