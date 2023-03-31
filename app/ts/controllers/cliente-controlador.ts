class ClienteControlador {
    private _service: Service;

    constructor() {
        this._service = new Service();
    }

    listar(): void {
        const clientes: Array<Cliente> = this._service.listar();
        clientes.forEach((cliente: Cliente) => {
            const dadosParagrafo: HTMLParagraphElement = document.createElement("p");
            dadosParagrafo.textContent = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`;
            const botaoApagar: HTMLButtonElement = document.createElement("button");
            const botaoEditar: HTMLButtonElement = document.createElement("button");
            botaoApagar.textContent = "X";
            botaoEditar.textContent = "Editar";
            botaoApagar.addEventListener("click", (event: Event) => {
                this._service.deletar(cliente.matricula);
                (<Element>event.target).parentElement.remove();
            })

            botaoEditar.addEventListener("click", () => window.location.assign("Actualization.html"));
            dadosParagrafo.appendChild(botaoApagar);
            document.body.appendChild(dadosParagrafo);
        })
    }

    procurar(): void {
        const inputMatricula: HTMLInputElement = <HTMLInputElement> document.querySelector("#matricula");
        const cliente: Cliente = this._service.procurar(inputMatricula.value);
        const div_procurar: HTMLDivElement = <HTMLDivElement> document.getElementById("#search");
        const paragrafo_cliente: HTMLParagraphElement = document.createElement("p");
        paragrafo_cliente.innerText = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`
        div_procurar.appendChild(paragrafo_cliente);
    }

    formCampus(): [string, string, number, string, string, string, string, number, string, number, number] {
        const inputMatricula: HTMLInputElement = <HTMLInputElement> document.querySelector("#matricula");
        const inputNome: HTMLInputElement = <HTMLInputElement> document.querySelector("#nome");
        const inputFone: HTMLInputElement = <HTMLInputElement> document.querySelector("#fone");
        const inputRua: HTMLInputElement = <HTMLInputElement> document.querySelector("#rua");
        const inputNumero: HTMLInputElement = <HTMLInputElement> document.querySelector("#numero");
        const inputBairro: HTMLInputElement = <HTMLInputElement> document.querySelector("#bairro");
        const inputComplemento: HTMLInputElement = <HTMLInputElement> document.querySelector("#complemento");
        const inputCidade: HTMLInputElement = <HTMLInputElement> document.querySelector("#cidade");
        const inputEstado: HTMLInputElement = <HTMLInputElement> document.querySelector("#estado");
        const inputNumeroFilho: HTMLInputElement = <HTMLInputElement> document.querySelector("#numerosFilhos");
        const inputRendaFamiliar: HTMLInputElement = <HTMLInputElement> document.querySelector("#rendaFamiliar");
        return [inputNome.value, inputRua.value, Number(inputNumero.value), inputBairro.value,
            inputComplemento.value, inputCidade.value, inputEstado.value, Number(inputFone.value),
            inputMatricula.value, Number(inputNumeroFilho.value), Number(inputRendaFamiliar.value)]


    }

    inserir(e: Event): void  {
        e.preventDefault();
        this._service.cadastrar(...this.formCampus());

    }

    atualizar(e: Event): void {
        e.preventDefault();
        this._service.atualizar(...this.formCampus());

    }
}


