
export default class HomePage {

    get inpSearch() { return $("#searchInput") }
    get btnSearch() { return $("#searchform button") }
    get btnEnter() { return $("#pt-login-2 a span") }

    /**
     * Método para clicar no botão [Entrar] para abrir a tela de login
     */
    public async clickBtnEnter() {
        await this.btnEnter.waitForDisplayed({ timeoutMsg: 'O botão [Entrar] não foi exibido.' })
        await this.btnEnter.click()
    }

    /**
     * Método para clicar no botão de [Pesquisar] da home
     */
    public async clickBtnSearch() {
        await this.btnSearch.waitForDisplayed({ timeoutMsg: 'O botão [Pesquisar] não foi exibido.' })
        await this.btnSearch.click()
    }

    /**
     * Método para informar um valor no campo de "Pesquisar na wikipedia" da home
     * @param searchValue - Texto para pesquisa
     */
    public async setInpSearch(searchValue: string) {
        await this.btnEnter.waitForDisplayed({ timeoutMsg: 'O campo "Pesquisar na Wikipédia" não foi exibido.' })
        await this.btnEnter.setValue(searchValue)
    }

    /**
     * Método para realizar a pesquisa por um valor de texto informado
     * @param searchValue - Texto para pesquisa
     */
    public async searchWikipediaFor(searchValue: string) {
        await this.setInpSearch(searchValue)
        await this.clickBtnSearch()
    }

}