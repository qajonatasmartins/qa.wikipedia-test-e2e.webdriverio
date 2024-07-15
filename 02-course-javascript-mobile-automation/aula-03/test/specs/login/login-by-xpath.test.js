describe('Sauce Demo - SwagLabs', () => {

    it('[CT-003] - Validar o login no site SwagLabs por XPATH', async () => {

        /** Arrange: Nesta etapa nós configuramos tudo o que é necessário para que o nosso teste possa rodar. */
        await driver.url('https://www.saucedemo.com/v1/')
        const inpUsername = $("//input[@data-test='username' and @name='user-name']")
        const inpPassword = $("//input[@data-test='password']")
        const btnLogin = $("//input[@value='LOGIN']")
        const txtProducts = $("//div[@class='product_label']")

        /** Act: Esta etapa é onde executamos os passos do nosso teste */
        await inpUsername.setValue('standard_user')
        await inpPassword.setValue('secret_sauce')
        await btnLogin.click()

        /** Assert: Esta etapa é onde faremos nossa validação. 
         * É onde verificamos se os passos da etapa anterior (Act) surtiu o resultado esperado. 
         * Assim sabemos se o teste passou ou falhou. */
        expect(await txtProducts.isDisplayed()).toBe(true)
    })
})