class Cliente {
    _nome;
    _matricula = undefined;
    _fone = undefined;
    _endereco;
    _numerosFilhos;
    _rendaFamiliar;
    constructor(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar) {
        this._nome = nome;
        this._endereco = new Endereco(rua, numero, bairro, complemento, cidade, estado);
        this._fone = fone;
        this._matricula = matricula;
        this._numerosFilhos = numerosFilhos;
        this._rendaFamiliar = rendaFamiliar;
    }
    get nome() {
        return this._nome;
    }
    set nome(newNome) {
        this._nome = newNome;
    }
    set matricula(newMatricula) {
        if (this._matricula == undefined) {
            this._matricula = newMatricula;
        }
    }
    get fone() {
        return this._fone;
    }
    set fone(newFone) {
        this._fone = newFone;
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(endereco) {
        this._endereco = endereco;
    }
    get numerosFilhos() {
        return this._numerosFilhos;
    }
    set numerosFilhos(newNFilhos) {
        this._numerosFilhos = newNFilhos;
    }
    get rendaFamiliar() {
        return this._rendaFamiliar;
    }
    set rendaFamiliar(newRenda) {
        this._rendaFamiliar = newRenda;
    }
}
