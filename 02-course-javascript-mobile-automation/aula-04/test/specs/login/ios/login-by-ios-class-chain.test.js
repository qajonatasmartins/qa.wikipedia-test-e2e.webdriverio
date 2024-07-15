describe('Wikipedia', () => {

    it('[CT-002] - Validar o login incorreto no site wikipedia por ios class chain', async () => {

        /** Arrange: Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar. */
        await driver.url('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')

        const btnMenu = $('~navegação')
        const btnEnter = $('-ios class chain:**/XCUIElementTypeStaticText[`name == "Entrar"`]')

        // /** Act: Esta etapa é onde executamos os passos do nosso teste */

        await btnMenu.click()
        await btnEnter.click()

        // /** Assert: Esta etapa é onde faremos nossa validação. 
        await browser.pause(5000)
    })
})