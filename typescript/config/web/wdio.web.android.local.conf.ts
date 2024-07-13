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
        port: 4724,
        // ============
        // Capabilities
        // ============
        maxInstances: 1,
        capabilities: [{
            platformName: 'Android',
            browserName: 'Chrome',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '8.0.0',
            'appium:automationName': 'UiAutomator2',
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
        // @ts-ignore
        afterTest: async function (test, context, { error, result, duration, passed, retries }) {
            // @ts-ignore
            await driver.saveScreenshot(path.resolve(`./reports/web/develop/${test.title}-retries${retries.attempts}.png`))
        }
    }
}
