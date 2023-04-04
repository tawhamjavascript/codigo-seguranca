

class ClienteControlador {
    private _service: Service;
    inputMatricula: HTMLInputElement;
    inputNome: HTMLInputElement;
    inputFone: HTMLInputElement; 
    inputRua: HTMLInputElement;
    inputNumero: HTMLInputElement;
    inputBairro: HTMLInputElement; 
    inputComplemento: HTMLInputElement; 
    inputCidade: HTMLInputElement;
    inputEstado: HTMLInputElement;
    inputNumeroFilho: HTMLInputElement;
    inputRendaFamiliar: HTMLInputElement;

    constructor() {
        this._service = new Service();
        this.inputMatricula  = <HTMLInputElement> document.querySelector("#matricula");
        this.inputNome  = <HTMLInputElement> document.querySelector("#nome");
        this.inputFone  = <HTMLInputElement> document.querySelector("#fone");
        this.inputRua = <HTMLInputElement> document.querySelector("#rua");
        this.inputNumero  = <HTMLInputElement> document.querySelector("#numero");
        this.inputBairro  = <HTMLInputElement> document.querySelector("#bairro");
        this.inputComplemento  = <HTMLInputElement> document.querySelector("#complemento");
        this.inputCidade  = <HTMLInputElement> document.querySelector("#cidade");
        this.inputEstado  = <HTMLInputElement> document.querySelector("#estado");
        this.inputNumeroFilho  = <HTMLInputElement> document.querySelector("#numerosFilhos");
        this.inputRendaFamiliar  = <HTMLInputElement> document.querySelector("#rendaFamiliar");
    }

    listar(): void {
        const clientes: Array<Cliente> = this._service.listar();
        const tbody = document.querySelector("#listagem");
        clientes.forEach((cliente: Cliente) => {
            const tr: HTMLTableRowElement = document.createElement('tr');
            let td: HTMLTableCellElement = undefined;
            for (let property in cliente) {
                if (property === "_endereco") {
                    for (let prop in cliente.endereco) {
                        td = document.createElement("td");
                        td.textContent = cliente.endereco[prop as keyof typeof cliente.endereco].toString();
                        tr.appendChild(td);
                    }
                }
                else {
                    td = document.createElement("td");
                    td.textContent = cliente[property as keyof typeof cliente].toString();
                    tr.appendChild(td);
                }
                
                
            }
            td = document.createElement("td");
            const botaoApagar: HTMLButtonElement = document.createElement("button");
                const botaoEditar: HTMLButtonElement = document.createElement("button");
                botaoApagar.addEventListener("click", (event: Event) => {
                    this._service.deletar(cliente.matricula);
                    (<Element>event.target).parentElement.parentElement.remove();
            });
            botaoApagar.textContent = "X";
            td.appendChild(botaoApagar);
            tr.appendChild(td);


    
            botaoEditar.addEventListener("click", (e: Event) => {
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

    procurar(): void {
        const inputMatricula: HTMLInputElement = <HTMLInputElement> document.querySelector("#matriculaProcurar");
        if (this.regexNumero(inputMatricula.value)) {
            const cliente: Cliente = this._service.procurar(inputMatricula.value);
            console.log(cliente);
            const div_procurar: HTMLDivElement = <HTMLDivElement> document.getElementById("search");
            const paragrafo_cliente: HTMLParagraphElement = document.createElement("p");
            paragrafo_cliente.innerText = `${cliente.nome} - ${cliente.matricula} - ${cliente.fone}`
            div_procurar.appendChild(paragrafo_cliente);
        }
    }

    formCampus(): [string, string, number, string, string, string, string, number, string, number, number] {
        return [this.inputNome.value, this.inputRua.value, Number(this.inputNumero.value), this.inputBairro.value,
            this.inputComplemento.value, this.inputCidade.value, this.inputEstado.value, Number(this.inputFone.value),
            this.inputMatricula.value, Number(this.inputNumeroFilho.value), Number(this.inputRendaFamiliar.value)]

    }

    inserir(e: Event): void  {
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

    atualizar(e: Event): void {
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
            alert("Ataque detectado")
        }
        

    }

    enviarEmail() {
        this._service.enviarEmail();
    }

    regexNumero(valor: string): boolean {
        const regex = /^[0-9]+$/;
        if (regex.test(valor)) {
            return true;
        }
        return false;
        
    }

    regexString(valor: string) : boolean {
        const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
        if (regex.test(valor)) return true
        return false;
    }

    testarCampos() : boolean {
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


