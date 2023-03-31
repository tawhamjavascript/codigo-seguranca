class Admin {
    private _email: string = "admin@admin";
    private _senha: string = "admin"
    
    constructor () {

    }
    get email(): string {
        return this._email;
    }

    get senha (): string {
        return this._senha;
    }

}