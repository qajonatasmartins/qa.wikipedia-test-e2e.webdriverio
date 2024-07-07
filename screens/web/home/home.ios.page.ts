import HomeAndroidPage from "./home.android.page"

export default class HomeIOSPage extends HomeAndroidPage {

    get btnMainMenu() { return $("-ios class chain:**/XCUIElementTypeOther[`name == 'navegação'`]/XCUIElementTypeOther") }
    get btnEnter() { return $("-ios class chain:**/XCUIElementTypeLink[`name == 'Entrar'`]") }

}
