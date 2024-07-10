const { config } = require("../wdio.conf")
const path = require('path')

// ====================
// Runner Configuration
// ====================
config.runner = 'local'
config.port = 4724
// ============
// Capabilities
// ============
config.maxInstances = 1
config.capabilities = [{
    platformName: 'Android',
    browserName: 'Chrome',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '8.0.0',
    'appium:automationName': 'UiAutomator2',
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