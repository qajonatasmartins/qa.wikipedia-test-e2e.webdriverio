import LoginAndroidPage from "./login.android.page";
import LoginIOSPage from "./login.ios.page";

export default class LoginPage {

    public getLoginPage() {
        return driver.isAndroid ? new LoginAndroidPage() : new LoginIOSPage()
    }
}