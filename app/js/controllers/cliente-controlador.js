class ClienteControlador {
    _service;
    constructor() {
        this._service = new Service();
    }
    listar() {
        const clientes = this._service.listar();
        console.log(clientes);
        clientes.forEach((cliente) => {
            const dadosParagrafo = document.createElement("p");
            dadosParagrafo.textContent = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`;
            const botaoApagar = document.createElement("button");
            const botaoEditar = document.createElement("button");
            botaoApagar.textContent = "X";
            botaoEditar.textContent = "Editar";
            botaoApagar.addEventListener("click", (event) => {
                this._service.deletar(cliente.matricula);
                event.target.parentElement.remove();
            });
            botaoEditar.addEventListener("click", () => window.location.assign("Actualization.html"));
            dadosParagrafo.appendChild(botaoApagar);
            document.querySelector("listagem").appendChild(dadosParagrafo);
        });
    }
    procurar() {
        const inputMatricula = document.querySelector("#matricula");
        const cliente = this._service.procurar(inputMatricula.value);
        const div_procurar = document.getElementById("#search");
        const paragrafo_cliente = document.createElement("p");
        paragrafo_cliente.innerText = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`;
        div_procurar.appendChild(paragrafo_cliente);
    }
    formCampus() {
        const inputMatricula = document.querySelector("#matricula");
        const inputNome = document.querySelector("#nome");
        const inputFone = document.querySelector("#fone");
        const inputRua = document.querySelector("#rua");
        const inputNumero = document.querySelector("#numero");
        const inputBairro = document.querySelector("#bairro");
        const inputComplemento = document.querySelector("#complemento");
        const inputCidade = document.querySelector("#cidade");
        const inputEstado = document.querySelector("#estado");
        const inputNumeroFilho = document.querySelector("#numerosFilhos");
        const inputRendaFamiliar = document.querySelector("#rendaFamiliar");
        return [inputNome.value, inputRua.value, Number(inputNumero.value), inputBairro.value,
            inputComplemento.value, inputCidade.value, inputEstado.value, Number(inputFone.value),
            inputMatricula.value, Number(inputNumeroFilho.value), Number(inputRendaFamiliar.value)];
    }
    inserir(e) {
        e.preventDefault();
        this._service.cadastrar(...this.formCampus());
        window.location.assign("listar.html");
    }
    atualizar(e) {
        e.preventDefault();
        this._service.atualizar(...this.formCampus());
    }
    enviarEmail() {
        this._service.enviarEmail();
    }
}
