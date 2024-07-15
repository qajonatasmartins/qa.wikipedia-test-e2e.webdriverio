describe('Wikipedia', () => {

    it('[CT-001] - Validar o login incorreto no site wikipedia por acessibility id', async () => {

        /** Arrange: Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar. */
        await driver.url('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')

        const btnMenu = $('~navegação')

        // /** Act: Esta etapa é onde executamos os passos do nosso teste */

        await btnMenu.click()

        // /** Assert: Esta etapa é onde faremos nossa validação. 
        await browser.pause(5000)
    })
})