const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//criando copia
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}
//adicionando a propriedade ataques ao objeto pokemon1, um array vazio
pokemon1.ataques = []
// console.log(pokemon1)
//criando o objeto ataque1
const ataque1 = {
    nome: "Investida",
    dano:40,
    tipo: "normal",
    precisao:100
}
//adicionando o objeto ataque no na propriedade-array ataques
pokemon1.ataques.push(ataque1)

//adicionando a propriedade ataques a partir de espalhamento - MEU ERRO TÁ AQUI
pokemon2.ataques = [...pokemon1.ataques];//PERGUNTAR NA AULA

//e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.
// pokemon1.ataques.push({
//     nome: "Folha navalha",
//     dano: 45,
//     tipo: "grama",
//     precisao: 100
// })
const ataque2 = {
    nome: "Folha navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
}
pokemon1.ataques.push(ataque2)

//f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.

const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 40
}
// pokemon2.ataques = [] //PERGUNTAR NA AULA___________
pokemon2.ataques.push(ataque3)

console.log("Pokemon 1: ", pokemon1)
console.log("Pokemon 2: ", pokemon2)