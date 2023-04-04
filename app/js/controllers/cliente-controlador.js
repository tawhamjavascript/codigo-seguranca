class ClienteControlador {
    _service;
    inputMatricula;
    inputNome;
    inputFone;
    inputRua;
    inputNumero;
    inputBairro;
    inputComplemento;
    inputCidade;
    inputEstado;
    inputNumeroFilho;
    inputRendaFamiliar;
    constructor() {
        this._service = new Service();
        this.inputMatricula = document.querySelector("#matricula");
        this.inputNome = document.querySelector("#nome");
        this.inputFone = document.querySelector("#fone");
        this.inputRua = document.querySelector("#rua");
        this.inputNumero = document.querySelector("#numero");
        this.inputBairro = document.querySelector("#bairro");
        this.inputComplemento = document.querySelector("#complemento");
        this.inputCidade = document.querySelector("#cidade");
        this.inputEstado = document.querySelector("#estado");
        this.inputNumeroFilho = document.querySelector("#numerosFilhos");
        this.inputRendaFamiliar = document.querySelector("#rendaFamiliar");
    }
    listar() {
        const clientes = this._service.listar();
        const tbody = document.querySelector("#listagem");
        clientes.forEach((cliente) => {
            const tr = document.createElement('tr');
            let td = undefined;
            for (let property in cliente) {
                if (property === "_endereco") {
                    for (let prop in cliente.endereco) {
                        td = document.createElement("td");
                        td.textContent = cliente.endereco[prop].toString();
                        tr.appendChild(td);
                    }
                }
                else {
                    td = document.createElement("td");
                    td.textContent = cliente[property].toString();
                    tr.appendChild(td);
                }
            }
            td = document.createElement("td");
            const botaoApagar = document.createElement("button");
            const botaoEditar = document.createElement("button");
            botaoApagar.addEventListener("click", (event) => {
                this._service.deletar(cliente.matricula);
                event.target.parentElement.parentElement.remove();
            });
            botaoApagar.textContent = "X";
            td.appendChild(botaoApagar);
            tr.appendChild(td);
            botaoEditar.addEventListener("click", (e) => {
                e.preventDefault();
                this.inputNome.value = cliente.nome;
                this.inputFone.value = cliente.fone.toString();
                this.inputMatricula.value = cliente.matricula;
                this.inputBairro.value = cliente.endereco.bairro;
                this.inputNumero.value = cliente.endereco.numero.toString();
                this.inputRua.value = cliente.endereco.rua;
                this.inputComplemento.value = cliente.endereco.complemento;
                this.inputCidade.value = cliente.endereco.cidade;
                this.inputEstado.value = cliente.endereco.estado;
                this.inputRendaFamiliar.value = cliente.rendaFamiliar.toString();
                this.inputNumeroFilho.value = cliente.numerosFilhos.toString();
            });
            botaoEditar.textContent = "Editar";
            td = document.createElement("td");
            td.appendChild(botaoEditar);
            tr.appendChild(td);
            tbody.appendChild(tr);
        });
    }
    procurar() {
        const inputMatricula = document.querySelector("#matriculaProcurar");
        if (this.regexNumero(inputMatricula.value)) {
            const cliente = this._service.procurar(inputMatricula.value);
            console.log(cliente);
            const div_procurar = document.getElementById("search");
            const paragrafo_cliente = document.createElement("p");
            paragrafo_cliente.innerText = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`;
            div_procurar.appendChild(paragrafo_cliente);
        }
    }
    formCampus() {
        return [this.inputNome.value, this.inputRua.value, Number(this.inputNumero.value), this.inputBairro.value,
            this.inputComplemento.value, this.inputCidade.value, this.inputEstado.value, Number(this.inputFone.value),
            this.inputMatricula.value, Number(this.inputNumeroFilho.value), Number(this.inputRendaFamiliar.value)];
    }
    inserir(e) {
        e.preventDefault();
        if (this.testarCampos()) {
            const tbody = document.querySelector("#listagem");
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            this._service.cadastrar(...this.formCampus());
            this.listar();
            this.inputNome.value = "";
            this.inputFone.value = "";
            this.inputMatricula.value = "";
            this.inputBairro.value = "";
            this.inputNumero.value = "";
            this.inputRua.value = "";
            this.inputComplemento.value = "";
            this.inputCidade.value = "";
            this.inputEstado.value = "";
            this.inputRendaFamiliar.value = "";
            this.inputNumeroFilho.value = "";
        }
        else {
            alert("Ataque detectado");
        }
    }
    atualizar(e) {
        e.preventDefault();
        if (this.testarCampos()) {
            this._service.atualizar(...this.formCampus());
            const tbody = document.querySelector("#listagem");
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            this.inputNome.value = "";
            this.inputFone.value = "";
            this.inputMatricula.value = "";
            this.inputBairro.value = "";
            this.inputNumero.value = "";
            this.inputRua.value = "";
            this.inputComplemento.value = "";
            this.inputCidade.value = "";
            this.inputEstado.value = "";
            this.inputRendaFamiliar.value = "";
            this.inputNumeroFilho.value = "";
            this.listar();
        }
        else {
            alert("Ataque detectado");
        }
    }
    enviarEmail() {
        this._service.enviarEmail();
    }
    regexNumero(valor) {
        const regex = /^[0-9]+$/;
        if (regex.test(valor)) {
            return true;
        }
        return false;
    }
    regexString(valor) {
        const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
        if (regex.test(valor))
            return true;
        return false;
    }
    testarCampos() {
        if (this.regexNumero(this.inputFone.value) && this.regexNumero(this.inputMatricula.value) &&
            this.regexNumero(this.inputNumero.value) && this.regexNumero(this.inputNumeroFilho.value) &&
            this.regexNumero(this.inputRendaFamiliar.value) && this.regexString(this.inputNome.value) && this.regexString(this.inputBairro.value) &&
            this.regexString(this.inputCidade.value) && this.regexString(this.inputEstado.value)
            && this.regexString(this.inputRua.value)) {
            return true;
        }
        return false;
    }
}
