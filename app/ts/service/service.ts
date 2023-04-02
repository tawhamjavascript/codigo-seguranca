class Service {
    private _clientes: Clientes;
    private _admin: Admin

    constructor() {
        this._clientes = new Clientes();
        this._admin = new Admin();

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

    atualizar(nome: string, rua: string, numero : number, bairro: string, complemento: string,
              cidade: string, estado: string, fone: number, matricula: string,
              numerosFilhos: number, rendaFamiliar: number): void {

       this._clientes.atualizar(nome, rua, numero, bairro, complemento, cidade, estado, fone, matricula,
           numerosFilhos, rendaFamiliar);


    }
    enviarEmail(): void {
        const body: {data: Array<Cliente>, email: string} = {
            data: this.listar(),
            email: this._admin.email

        }
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