const { config } = require("../wdio.conf")
const path = require('path')

// ====================
// Runner Configuration
// ====================
config.runner = 'local'
config.port = 4723
// ============
// Capabilities
// ============
config.maxInstances = 1
config.capabilities = [{
    platformName: 'iOS',
    browserName: 'safari technology preview',
    'appium:deviceName': 'iPhone 12',
    'appium:platformVersion': '17.2',
    'appium:newCommandTimeout': 3600,
    'appium:automationName': 'XCUITest',
    "appium:unicodeKeyboard": true
}]
config.services = ['appium']
config.reporters = [
    'spec',
    [
        'allure',
        {
            outputDir: path.resolve('./reports/web/develop/'),
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        },
    ],
]

exports.config = config