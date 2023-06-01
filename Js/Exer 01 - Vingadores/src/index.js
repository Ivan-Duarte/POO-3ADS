const personagem = {
    nome: "Steve Rogers",
    codinome:  "Capitão America",
    armaPrincipal: "Escudo de Mão",
    armaSecundaria: "",
    velocidade: 60, // considerando 0 de 100
    forca: 80, // considerando 0 de 100
    resistencia: 90, // considerando 0 de 100
    descricao: function(){
        return "Nome de Personagem: " + this.nome +  "\n"
        + "Codinome do Personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
    }
}
