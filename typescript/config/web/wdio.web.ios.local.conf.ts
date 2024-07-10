import type { Options } from '@wdio/types'
import { config as sharedConfig } from '../wdio.conf.ts'
import path from 'path'

// @ts-ignore
export const config: Options.Testrunner = {
    ...sharedConfig,
    ...{
        // ====================
        // Runner Configuration
        // ====================
        runner: 'local',
        port: 4723,
        // ============
        // Capabilities
        // ============
        maxInstances: 1,
        capabilities: [{
            platformName: 'iOS',
            browserName: 'safari technology preview',
            'appium:deviceName': 'iPhone 12',
            'appium:platformVersion': '17.2',
            'appium:newCommandTimeout': 3600,
            'appium:automationName': 'XCUITest',
            "appium:unicodeKeyboard": true
        }],
        services: ['appium'],
        reporters: [
            'spec',
            [
                'allure',
                {
                    outputDir: path.resolve('./reports/web/develop/'),
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: false,
                },
            ],
        ],
        afterTest: async function (test, context, { error, result, duration, passed, retries }) {
            // @ts-ignore
            await driver.saveScreenshot(path.resolve(`./reports/web/develop/${test.title}-retries${retries.attempts}.png`))
        }
    }
}
