export default class LoginPage {

    get inpUsername() { return $("#wpName1") }
    get inpPassword() { return $("#wpPassword1") }
    get btnEnter() { return $("#wpLoginAttempt") }

    /**
     * Método para realizar o click no botão de [Entrar] no login
     */
    public async clickBtnEnter() {
        await this.btnEnter.waitForDisplayed({ timeoutMsg: 'O botão [Entrar] não foi exibido.' })
        await this.btnEnter.click()
    }

    /**
     * Método para informar o usuário do login
     * @param username - Nome do usuário 
     */
    public async setInpUsername(username: string) {
        await this.inpUsername.waitForDisplayed({ timeoutMsg: 'O campo "Nome do utilizador(a)" não foi exibido.' })
        await this.inpUsername.setValue(username)
    }

    /**
     * Método para informar o valor da senha do login
     * @param password - Senha do usuário
     */
    public async setInpPassword(password: string) {
        await this.inpPassword.waitForDisplayed({ timeoutMsg: 'O campo "Palavra-passe" não foi exibido.' })
        await this.inpPassword.setValue(password)
    }

    /**
     * Método para realizar o login no site do wikipedia
     * @param user - usuário e senha
     */
    public async logIn(user: IUser) {
        await Promise.all([
            this.setInpUsername(user.username),
            this.setInpPassword(user.password)
        ])
        await this.clickBtnEnter()
    }
}