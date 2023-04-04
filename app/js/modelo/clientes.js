class Clientes {
    _clientes;
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    listar() {
        return this._clientes;
    }
    procurar(matricula) {
        console.log(matricula);
        console.log(this._clientes);
        const cliente = this._clientes.find((cliente) => {
            return cliente.matricula === matricula;
        });
        console.log(cliente);
        return cliente;
    }
    deletar(matricula) {
        const index = this._clientes.findIndex((cliente) => cliente.matricula === matricula);
        this._clientes.splice(index, 1);
    }
    atualizar(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar) {
        const cliente = this.procurar(matricula);
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
