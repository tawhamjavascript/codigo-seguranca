class AdminControlador {
    private _admin: Admin;

    constructor() {
        this._admin = new Admin(); 
    }

    logar(e: Event): void {
        e.preventDefault();
        const inputEmail: HTMLInputElement = <HTMLInputElement> document.querySelector("#email");
        const inputSenha: HTMLInputElement = <HTMLInputElement> document.querySelector("#senha");
        if (this._admin.email === inputEmail.value && this._admin.senha === inputSenha.value) {
            console.log("entrando aqui");
            window.location.assign("./Inserir.html");
        }
    }
}