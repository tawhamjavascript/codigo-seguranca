class AdminControlador {
    _admin;
    constructor() {
        this._admin = new Admin();
    }
    logar(e) {
        e.preventDefault();
        const inputEmail = document.querySelector("#email");
        const inputSenha = document.querySelector("#senha");
        if (this._admin.email === inputEmail.value && this._admin.senha === inputSenha.value) {
            console.log("entrando aqui");
            window.location.assign("./Inserir.html");
        }
    }
}
