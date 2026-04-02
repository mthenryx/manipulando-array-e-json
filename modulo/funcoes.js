/* *********************************************************************
* Objetivo: Obter uma lista de estados
* Data: 18/03/2026  
* Verção: 1.0
* Autor: Matheus
* **********************************************************************/

const informacoes = require("./estados_cidades.js")
const locEstados = informacoes.listaDeEstados.estados

const getListaDeEstados = function(){
    let estados = []
    let quantidade
    let resultado

    locEstados.forEach(function(uf){
        estados.push(uf.sigla)
    })

    quantidade = estados.length

    resultado = {estados, quantidade}

    return resultado
}

const getDadosEstado = function(sigla){
    let resultado = false

    locEstados.forEach(function(uf){
        if (uf.sigla == String(sigla).toLocaleUpperCase()){
            resultado = {
                "uf" : uf.sigla,
                "descricao": uf.nome,
                "capital": uf.capital,
                "regiao": uf.regiao
            }
        }
    })

    return resultado
}

const getCapitalEstado = function(sigla){
    let resultado = false

    locEstados.forEach(function(item){
        if(item.sigla == String(sigla).toLocaleUpperCase()){
            resultado = {
                "uf": item.sigla, "descricao": item.nome, "capital": item.capital
            }
        }
    })

    return resultado
}

const getEstadoRegiao = function(regiao){
    let resultado = {
        "regiao": regiao.toLocaleUpperCase(),
        "estados": []
    }

    for(let estado of locEstados){
        if(String(regiao).toLocaleUpperCase() == String(estado.regiao).toLocaleUpperCase()){
            resultado.estados.push({
                "uf": estado.sigla, "descricao": estado.nome
            })
        }
    }

    if(resultado.estados.length === 0){
        resultado = false
    }

    return resultado
}

const getCapitalPais = function(){
    let resultado = {
        "capitais": []
    }

    locEstados.forEach(function(itemCapital){
        if (itemCapital.capital_pais){
            let capital = {
                "capital_atual": itemCapital.capital_pais.capital,
                "uf": itemCapital.sigla,
                "descricao": itemCapital.nome,
                "capital": itemCapital.capital,
                "regiao": itemCapital.regiao,
                "capital_pais_ano_inicio": itemCapital.capital_pais.ano_inicio,
                "capital_pais_ano_termino": itemCapital.capital_pais.ano_fim
            }

            resultado.capitais.push(capital)
        }
    })

    return resultado
}

const getCidades = function(sigla){
    let resultado = false

    locEstados.forEach(function(item){
        if (item.sigla == String(sigla).toLocaleUpperCase()){
            let cidades = []

            item.cidades.forEach(function (itemCidades){
                cidades.push(itemCidades.nome)
            })

            resultado = {
                "uf": item.sigla,
                "descricao": item.nome,
                "quantidade_cidades": item.cidades.length,
                "cidades": cidades
            }
        }
    })

    return resultado
}

module.exports = {
    getDadosEstado,
    getListaDeEstados,
    getCapitalEstado,
    getEstadoRegiao,
    getCapitalPais,
    getCidades
}