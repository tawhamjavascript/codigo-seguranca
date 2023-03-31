class Service {
    private _clientes: Clientes;

    constructor() {
        this._clientes = new Clientes();

    }

    cadastrar(nome: string, rua: string, numero : number, bairro: string, complemento: string, cidade: string, estado: string, fone: number, matricula: string, numerosFilhos: number, rendaFamiliar: number): void {
        this._clientes.inserir(new Cliente(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar));
    }

    procurar( matricula: string): Cliente {
        return this._clientes.procurar(matricula);
    }

    listar(): Array<Cliente> {
        return this._clientes.listar();
    }

    deletar(matricula: string): void {
        this._clientes.deletar(matricula);
    }

}