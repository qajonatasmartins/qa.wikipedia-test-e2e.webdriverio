export default class LoginAndroidPage {

    get inpUsername() { return $("#wpName1") }
    get inpPassword() { return $("#wpPassword1") }
    get inpCaptchaPass() { return $("#mw-input-captchaWord") }
    get btnEnter() { return $("#wpLoginAttempt") }
    get lblMessageError() { return $("#userloginForm form .cdx-message--error div") }

    /**
     * Método para realizar o click no botão de [Entrar] no login
     */
    async clickBtnEnter() {
        await this.btnEnter.waitForExist({ timeoutMsg: 'O botão [Entrar] não foi exibido.' })
        await this.btnEnter.click()
    }

    /**
     * Método para informar o usuário do login
     * @param username - Nome do usuário 
     */
    async setInpUsername(username) {
        await this.inpUsername.waitForExist({ timeoutMsg: 'O campo "Nome do utilizador(a)" não foi exibido.' })
        await this.inpUsername.setValue(username)
    }

    /**
     * Método para inserir o texto no captcha da tela
     * @param captchaText - texto da imagem
     */
    async setInpCaptchaPass(captchaText) {
        await this.inpCaptchaPass.waitForExist({ timeoutMsg: 'O campo "Introduza o texto que vê na imagem" não foi exibido.' })
        await this.inpCaptchaPass.setValue(captchaText)
    }

    async isExistingInpCaptchaPass() {
        return await this.inpCaptchaPass.isExisting()
    }

    /**
     * Método para informar o valor da senha do login
     * @param password - Senha do usuário
     */
    async setInpPassword(password) {
        await this.inpPassword.waitForExist({ timeoutMsg: 'O campo "Palavra-passe" não foi exibido.' })
        await this.inpPassword.setValue(password)
    }

    /**
     * Método para obter o texto de erro na tela de login
     * @returns 
     */
    async getTextLblMessageError() {
        await this.lblMessageError.waitForExist({ timeoutMsg: 'O pop-up com mensagem de validação não foi exibida.' })
        return await this.lblMessageError.getText()
    }

    /**
     * Método para realizar o login no site do wikipedia
     * @param user - usuário e senha
     */
    async logIn(username, password, captchaText = '') {
        await Promise.all([
            this.setInpUsername(username),
            this.setInpPassword(password)
        ])
        if (await this.isExistingInpCaptchaPass()) {
            await this.setInpCaptchaPass(captchaText)
        }
        await this.clickBtnEnter()
    }
}