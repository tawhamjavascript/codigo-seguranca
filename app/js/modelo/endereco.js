class Endereco {
    _rua;
    _numero;
    _bairro;
    _complemento;
    _cidade;
    _estado;
    constructor(rua, numero, bairro, complemento, cidade, estado) {
        this._rua = rua;
        this._numero = numero;
        this._bairro = bairro;
        this._complemento = complemento;
        this._cidade = cidade;
        this._estado = estado;
    }
    get rua() {
        return this._rua;
    }
    set rua(newRua) {
        this._rua = newRua;
    }
    get numero() {
        return this._numero;
    }
    set numero(newNumero) {
        this._numero = newNumero;
    }
    get bairro() {
        return this._bairro;
    }
    set bairro(newBairro) {
        this._bairro = newBairro;
    }
    get complemento() {
        return this._complemento;
    }
    set complemento(newComplemento) {
        this._complemento = newComplemento;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(newCidade) {
        this._cidade = newCidade;
    }
    get estado() {
        return this._estado;
    }
    set estado(newEstado) {
        this._estado = newEstado;
    }
}
