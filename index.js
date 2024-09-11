const { select, input, checkbox } = require('@inquirer/prompts')
let = mensagem ="Bem vindo ao app de Metas";
let meta = {
    value: 'Programação da Semana',
    checked: true,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

    if(meta.length == 0) {
        mensagem ='A meta não pode ser vazia.'
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
    mensagem ="Meta cadastrada com sucesso"
} 

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

  

    if(respostas.length == 0) {
        mensagem= "Nenhuma meta Selecionada!"
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

    mensagem ='Meta(s) marcadas como concluída(s)'
}

const metasRealizadas = async ()=>{
    const realizadas = metas.filter((meta)=> {
        return meta.checked
    })
    if(realizadas.length == 0){
       mensagem="Não existem metas realizadas"
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
           mensagem="Não existem metas abertas! :) " 
        return  
        }
           await select({
            message:"Metas Abertas",
            choices: [...abertas]
           })
    }

const deletarMetas = async ()=>{
 const metasDesmarcadas = metas.map((meta)=>{
    
    return {value: meta.value, checked:false}
 })
    const itemsAdeletar = await checkbox({
        message: "Selecione Item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })
    if(itemsAdeletar.length == 0){
       mensagem="Nenhum item para deletar"
        return
    }
    itemsAdeletar.forEach((item)=>{
       metas= metas.filter((meta)=>{
            return meta.value != item
        })
    })
        mensagem="Meta(s) deletada(s) com sucesso!"   
}
    const mostrarMensagem = () =>{
        console.clear();
        if(mensagem != ""){
            console.log(mensagem)
            console.log("")
            mensagem = ""
        }
    }

const start = async () => {
    while(true){
        mostrarMensagem()

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
                    name: "Deletar metas",
                    value: "deletar"
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
             case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log('Até a próxima!')
                return
        }
    }
}

start()