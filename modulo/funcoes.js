/* *********************************************************************
* Objetivo: Obter uma lista de estados
* Data: 18/03/2026  
* Verção: 1.0
* Autor: Matheus
* **********************************************************************/

const informacoes = require("./estados_cidades.js")

const getListaDeEstados = function(){
    let locEstados = informacoes.listaDeEstados.estados
    let estados    = []
    let lista
    let quantidade
    
    locEstados.forEach(function(uf){
        estados.push(uf.sigla)
    })

    quantidade = estados.length

    lista = {estados, quantidade}
    
    return lista
}

const getDadosEstado = function(sigla){
    let locEstados = informacoes.listaDeEstados.estados

    console.log(locEstados.sigla)
    console.log(locEstados.nome)
    console.log(locEstados.capital)
    console.log(locEstados.regiao)
}

const getCapitalEstado = function(){
    
}

const getEstadoRegiao = function(){
    
}

const getCapitalPais = function(){
    
}

const getCidades = function(){
    
}