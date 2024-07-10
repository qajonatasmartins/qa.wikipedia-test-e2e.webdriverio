import LoginAndroidPage from "./login.android.page"

export default class LoginIOSPage extends LoginAndroidPage {

    get inpUsername() { return $("-ios class chain:**/XCUIElementTypeTextField[`value CONTAINS 'utilizador'`]") }
    get inpPassword() { return $("-ios class chain:**/XCUIElementTypeSecureTextField[`value CONTAINS 'palavra-passe'`]") }
    get btnNotnow() { return $('~Agora Não') }
    get btnEnter() { return $("-ios class chain:**/XCUIElementTypeButton[`name == 'Entrar'`]") }
    get lblMessageError() { return $("-ios class chain:**/XCUIElementTypeOther[`name == 'principal'`]/XCUIElementTypeOther[8]/XCUIElementTypeStaticText") }

    /**
    * Método para clicar no botão [Agora não] do iOS
    */
    public async clickBtnNotNow() {
        await this.btnNotnow.waitForExist({ timeoutMsg: 'O pop-up perguntando se quer ou não salvar a senha não foi exibido.' })
        await this.btnNotnow.click()
    }

    /**
     * Método para realizar o login no site do wikipedia
     * @param user - usuário e senha
     */
    public async logIn(user: IUser, captchaText: string = '') {
        await Promise.all([
            this.setInpUsername(user.username),
            this.setInpPassword(user.password)
        ])
        if (await this.isExistingInpCaptchaPass()) {
            await this.setInpCaptchaPass(captchaText)
        }
        await this.clickBtnEnter()
        await this.clickBtnNotNow()
    }
}