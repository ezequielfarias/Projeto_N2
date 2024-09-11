const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Programação da Semana',
    checked: true,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

  

    if(respostas.length == 0) {
        console.log("Nenhuma meta Selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')

}

const metasRealizadas = async ()=>{
    const realizadas = metas.filter((meta)=> {
        return meta.checked
    })
    if(realizadas.length == 0){
        console.log("Não existem metas realizadas")
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas]
    })
    //console.log(realizadas)
}

    const metasAbertas = async () =>{
        const abertas = metas.filter((meta)=>{
            return meta.checked != true
         })     
        
         if (abertas.length == 0) {
            console.log("Não existem metas abertas! :) " )
        return  
        }
           await select({
            message:"Metas Abertas" + length,
            choices: [...abertas]
           })
    }

const start = async () => {
    while(true){
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas Realizadas",
                    value: "Realizadas"
                },
                {
                    name: "Metas Abertas",
                    value: "abertas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
             case "Realizadas":
                await metasRealizadas()
                break
            case "abertas":
                 await metasAbertas()
                    break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log('Até a próxima!')
                return
        }
    }
}

start();