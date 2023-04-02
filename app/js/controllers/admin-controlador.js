class AdminControlador {
    _admin;
    constructor() {
        this._admin = new Admin();
    }
    logar() {
        const inputEmail = document.querySelector("#email");
        const inputSenha = document.querySelector("#senha");
        if (this._admin.email === inputEmail.value && this._admin.senha === inputSenha.value) {
            window.location.assign("listar.html");
        }
    }
}
