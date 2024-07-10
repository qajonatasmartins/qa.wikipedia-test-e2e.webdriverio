import { config } from "../../../config/wdio.conf"

export default class HomeAndroidPage {

    get btnMainMenu() { return $("#mw-mf-main-menu-button") }
    get btnEnter() { return $("a[data-event-name='menu.login']") }

    async openWikipedia() {
        await browser.url(`${config.baseUrl}`)
    }

    /**
    * Método para clicar no botão para abrir o menu da home
    */
    async clickBtnMainMenu() {
        await this.btnMainMenu.waitForEnabled({ timeoutMsg: 'O botão do menu não foi exibido.' })
        await this.btnMainMenu.click()
    }

    /**
     * Método para clicar no botão [Entrar] para abrir a tela de login
     */
    async clickBtnEnter() {
        await this.btnEnter.waitForExist({ timeoutMsg: 'O botão [Entrar] não foi exibido.' })
        await this.btnEnter.click()
    }

    /**
     * Método para abrir a tela de login
     */
    async openLogin() {
        await this.openWikipedia()
        await this.clickBtnMainMenu()
        await this.clickBtnEnter()
    }
}
