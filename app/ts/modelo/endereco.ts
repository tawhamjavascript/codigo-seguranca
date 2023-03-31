class Endereco {
    private _rua: string;
    private _numero : number;
    private _bairro: string;
    private _complemento: string;
    private _cidade: string;
    private _estado: string;

    constructor (rua: string, numero : number, bairro: string, complemento: string, cidade: string, estado: string) {
        this._rua = rua;
        this._numero = numero;
        this._bairro = bairro;
        this._complemento = complemento;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua (): string {
        return this._rua
    }
    set rua (newRua: string) {
        this._rua = newRua;
    }

    get numero (): number {
        return this._numero;
    }
    set numero(newNumero: number) {
        this._numero = newNumero;

    }

    get bairro(): string {
        return this._bairro;

    }
    set bairro(newBairro: string) {
        this._bairro = newBairro
    }

    get complemento(): string {
        return this._complemento;
    }

    set complemento(newComplemento: string) {
        this._complemento = newComplemento;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(newCidade: string) {
        this._cidade = newCidade;
    }


    get estado() : string {
        return this._estado;
    }

    set estado(newEstado: string) {
        this._estado = newEstado;
    }
}



