const{select, input} = require('@inquirer/prompts')
const CadastrarCamera = async () =>{
  const camera = await input({message:" Digite a descrição da Câmera"})

    if (camera.length == 0){
      console.log("A descrição não pode ser vazia!")
      return 
    }
}


const start = async ()=>{
  while(true){
    const opcao = await select({
      message:"MENU",
      choices:[
        {
          name: "Cadastrar Câmera",
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
        await CadastrarCamera()
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