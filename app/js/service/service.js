class Service {
    _clientes;
    _admin;
    constructor() {
        this._clientes = new Clientes();
        this._admin = new Admin();
    }
    cadastrar(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar) {
        this._clientes.inserir(new Cliente(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar));
    }
    procurar(matricula) {
        return this._clientes.procurar(matricula);
    }
    listar() {
        return this._clientes.listar();
    }
    deletar(matricula) {
        this._clientes.deletar(matricula);
    }
    atualizar(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar) {
        this._clientes.atualizar(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula, numerosFilhos, rendaFamiliar);
    }
    enviarEmail() {
        const body = {
            data: this.listar(),
            email: this._admin.email
        };
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        };
        fetch("https://RuralCoarseKeys.tawham2.repl.co/email", options)
            .then(r => console.log(r));
    }
}
