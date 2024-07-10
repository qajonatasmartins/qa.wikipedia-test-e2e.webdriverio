import HomeAndroidPage from "./home.android.page"
import HomeIOSPage from "./home.ios.page"

export default class HomePage {

    getHomePage() {
        return driver.isAndroid ? new HomeAndroidPage() : new HomeIOSPage()
    }

}
