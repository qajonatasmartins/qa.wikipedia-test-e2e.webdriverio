describe('Sauce Demo - SwagLabs', () => {

    it('[CT-001] - Validar o login no site SwagLabs', async () => {

        /** Arrange: Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar. */
        await driver.url('https://www.saucedemo.com/v1/')
        const inpUsername = $('#user-name')
        const inpPassword = $('#password')
        const btnLogin = $('#login-button')
        const txtProducts = $('#inventory_filter_container div')

        /** Act: Esta etapa é onde executamos os passos do nosso teste */
        // await browser.switchContext('WEBVIEW_chrome')
        await browser.pause(3000)
        await inpUsername.setValue('standard_user')
        await inpPassword.setValue('secret_sauce')
        await btnLogin.click()

        /** Assert: Esta etapa é onde faremos nossa validação. 
         * É onde verificamos se os passos da etapa anterior (Act) surtiu o resultado esperado. 
         * Assim sabemos se o teste passou ou falhou. */
        expect(await txtProducts.isDisplayed()).toBe(true)
    })
})