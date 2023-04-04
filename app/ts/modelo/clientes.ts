class Clientes {
    private _clientes: Array<Cliente>;

    constructor () {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }    
    procurar(matricula: string): Cliente {
        console.log(matricula);
        console.log(this._clientes);

        const cliente = this._clientes.find((cliente: Cliente) => {
            return cliente.matricula === matricula
        });
        console.log(cliente)
        return cliente

    }

    deletar(matricula: string): void {
        const index: number = this._clientes.findIndex((cliente: Cliente) => cliente.matricula === matricula);
        this._clientes.splice(index, 1);

    }
    atualizar(nome: string, rua: string, numero : number, bairro: string, complemento: string,
              cidade: string, estado: string, fone: number, matricula: string,
              numerosFilhos: number, rendaFamiliar: number): void {

        const cliente: Cliente = this.procurar(matricula);
        cliente.nome = nome;
        cliente.endereco.rua = rua;
        cliente.endereco.numero = numero;
        cliente.endereco.bairro = bairro;
        cliente.endereco.complemento = complemento;
        cliente.endereco.cidade = cidade;
        cliente.endereco.estado = estado;
        cliente.fone = fone;
        cliente.matricula = matricula;
        cliente.numerosFilhos = numerosFilhos;
        cliente.numerosFilhos = numerosFilhos;
        cliente.rendaFamiliar = rendaFamiliar;
    }
}