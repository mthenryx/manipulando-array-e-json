/* ***********************************************************************************
* Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
* Data: 01/04/2026  
* Verção: 1.0
* Autor: Matheus H.
* ************************************************************************************/

// Para configurar a API:
//      Dependecia para configurar e utilzar o protocolo HTTP para criar a API
// Instalar o EXPRESS -> npm install express --save
//
//      Dependecia para configurar as permissões de acesso da API
// Instalar o CORS    -> npm install cors --save
// 

// Import das dependencias para criar a API
const express = require("express")
const cors    = require("cors")

// Criando um objeto do express para criar uma API
const app = express()

//Configurações do CORS da API
const corsOptions = {
    origin: ["*"],    // Configuração de origem da requisição (IP ou Dominio)
    methods: "GET",   // Configuração dos verbos que serão utilizados na API
    allowedHeaders: ["Content-type", "Authorization"] // Configurações de permissões
                    // Tipo de dados  // Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import do arquivo de funções
const estadosCidades = require("./modulo/funcoes.js")

//Endpoint para listar os estados

//Retorna uma lista de estados
app.get("/v1/senai/estados", function(request, response){
    let estados = estadosCidades.getListaDeEstados()
    response.status(200)// Requisição bem sucedida
    response.json(estados)
})

//Retorna dados de um estado filtrando pela sigla do estado
app.get("/v1/senai/dados/estado/:uf", function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({message: "Nenhum estado foi encontrado."})
    }
})

//Retornar dados da capital filtrando pela sigla
app.get("/v1/senai/dados/capital/estados/:uf", function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalEstado(sigla)

    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({message: "Nenhum estado foi encontrado."})
    }
})

//Retornar os estados filtrando por região
app.get("/v1/senai/regiao/estado/:uf", function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getEstadoRegiao(sigla)

    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({message: "Nenhum estado foi encontrado."})
    }
})

//Retornar os estados que foram e são capital do Brasil
app.get("/v1/senai/capital/pais", function(request, response){
    let estado = estadosCidades.getCapitalPais()

    response.status(200)
    response.json(estado)
})

//Retornar as cidades de cada estado
app.get("/v1/senai/dados/cidade/:uf", function(request, response){
    let sigla = request.params.uf
    let cidade = estadosCidades.getCidades(sigla)

    if(cidade){
        response.status(200)
        response.json(cidade)
    }else{
        response.status(404)
        response.json({message: "Nenhuma cidade encontrada"})
    }
})

app.get("/v1/senai/help", function(request, response){
    let docApi = {
        "api-description": "Api para manipular dados de Estados e Cidades",
        "data": "2026/04/02",
        "development": "Matheus Henry dos Santos",
        "version": 1.0,
        "endpoints": [
            {
                "router1": "/v1/senai/estados",
                "description": "Retorna a lista de todos os estados"
            },
            {
                "router2": "/v1/senai/dados/estado/sp",
                "description": "Retorna dados de um estado filtrando pela sigla"
            },
            {
                "router3": "/v1/senai/dados/capital/estados/sp",
                "description": "Retorna dados da capital de um estado filtrando pela sigla"
            },
            {
                "router4": "/v1/senai/regiao/estado/sul",
                "description": "Retorna os estados filtrando pela região"
            },
            {
                "router5": "/v1/senai/capital/pais",
                "description": "Retorna os estados que foram capitais do Brasil"
            },
            {
                "router6": "/v1/senai/dados/cidade/sp",
                "description": "Retorna as cidades filtrando pela sigla do estado"
            }
        ]
    }

    response.status(200)
    response.json(docApi)
})

// Fazer o start na API (Aguardando as requisições)
app.listen(8080, function(){
    console.log("API aguardando novas requisições ...")
})
