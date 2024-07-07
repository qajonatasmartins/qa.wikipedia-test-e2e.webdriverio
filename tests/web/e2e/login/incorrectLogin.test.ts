import { homePage, loginPage } from "../../../../constants"
import { ct0001 } from "../../../../data/web/login/login.data"

describe('Wikipedia - WEB', () => {

    it('[CT-0001] - Validar o login com usuário e senha incorreto', async () => {
        await homePage.openLogin()
        await loginPage.logIn(ct0001, '12345')
        expect(await loginPage.getTextLblMessageError()).toBe(ct0001.expect.message)
    })
})