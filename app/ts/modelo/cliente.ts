class Cliente {
    private _nome: string;
    private _matricula: string = undefined;
    private _fone: number = undefined;
    private _endereco: Endereco;
    private _numerosFilhos: number;
    private _rendaFamiliar: number;

    constructor(nome: string, rua: string, numero : number, bairro: string, complemento: string, cidade: string, estado: string, fone: number, matricula: string, numerosFilhos: number, rendaFamiliar: number) {
        this._nome = nome;
        this._endereco = new Endereco(rua, numero, bairro, complemento, cidade, estado);
        this._fone = fone;
        this._matricula = matricula;
        this._numerosFilhos = numerosFilhos;
        this._rendaFamiliar = rendaFamiliar;
    }

    get nome() : string {
        return this._nome;
    }
    set nome(newNome: string) {
        this._nome = newNome;
    }
    set matricula(newMatricula: string) {
        if (this._matricula == undefined){
            this._matricula = newMatricula
        }
    } 
    
    get fone(): number {
        return this._fone;
    }

    set fone (newFone) {
        this._fone = newFone;

    }
    get endereco(): Endereco {
        return this._endereco;

    }
    set endereco (endereco: Endereco) {
        this._endereco = endereco;
    }

    get numerosFilhos(): number {
        return this._numerosFilhos;

    }
    set numerosFilhos(newNFilhos: number)  {
        this._numerosFilhos = newNFilhos;
    }

    get rendaFamiliar(): number {
        return this._rendaFamiliar;
    }
    set rendaFamiliar(newRenda: number) {
        this._rendaFamiliar = newRenda;
    }

}