describe('Wikipedia', () => {

    it('[CT-004] - Validar o login incorreto no site wikipedia por xpath', async () => {

        /** Arrange: Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar. */
        await driver.url('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')

        const btnMenu = $('~navegação')
        const btnEnter = $('-ios class chain:**/XCUIElementTypeStaticText[`name == "Entrar"`]')
        const inpUsername = $('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "Introduza o seu nome de utilizador(a)"')
        const inpPassword = $('-ios predicate string:type == "XCUIElementTypeSecureTextField" AND value == "Introduza a sua palavra-passe"')
        const btnEnterLogin = $('//XCUIElementTypeButton[@name="Entrar"]')
        const txtMessageError = $('//XCUIElementTypeStaticText[contains(@name,"Tente novamente")]')
        const btnNotnow = $('~Agora Não')

        // /** Act: Esta etapa é onde executamos os passos do nosso teste */

        await btnMenu.click()
        await btnEnter.click()
        await driver.execute('mobile: scroll', { direction: "down" })
        await inpUsername.addValue('incorrect-user')
        await inpPassword.addValue('incorrect-pass')
        await btnEnterLogin.click()
        await btnNotnow.click()

        // /** Assert: Esta etapa é onde faremos nossa validação. 
        expect(await txtMessageError.getText()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos. Tente novamente, por favor.')
    })
})