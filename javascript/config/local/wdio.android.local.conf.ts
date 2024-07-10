import type { Options } from '@wdio/types'
import { config as sharedConfig } from './wdio.shared.conf'
import path from 'path'

export const config: Options.Testrunner = {
    ...sharedConfig,
    ... {
        maxInstances: 1,
        capabilities: [
            {
                platformName: 'Android',
                'appium:deviceName': 'Android GoogleAPI Emulator',
                'appium:appPackage': process.env.APP_PACKAGE,
                'appium:appActivity': process.env.APP_ACTIVITY,
                'appium:newCommandTimeout': 360,
                'appium:fullReset': false,
                'appium:platformVersion': process.env.APP_VERSION,
                'appium:automationName': 'UiAutomator2',
                'appium:app': path.resolve(`./app/${process.env.APK_NAME}.apk`),
                "appium:unicodeKeyboard": true,
                "appium:autoGrantPermissions": true
            }
        ],
        services: ['appium'],
        // services: [
        //   ['appium', {
        //     args: {
        //       address: '127.0.0.1',
        //       port: 4723,
        //       logLevel: 'debug'
        //     },
        //     command: 'appium'
        //   }]
        // ],
        reporters: [
            'spec',
            [
                'allure',
                {
                    outputDir: path.resolve('./reports/local/develop/'),
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: false,
                },
            ],
        ],
        afterTest: async function (test, context, { error, result, duration, passed, retries }) {
            // @ts-ignore
            await driver.saveScreenshot(path.resolve(`./reports/local/develop/${test.title}-retries${retries.attempts}.png`))
            if (!passed) {
                await slack.sendMessageChat(test.title, test.parent, passed, error.message, slackPath.develop.app.productZ.zigpdv, `${await momentHelpers.getDateCurrent()}`)
            }
            if (process.env.LOG === 'true') {
                await qase.updateTestCase(projectsName.zigpdv, passed, test.title, error === undefined ? '' : error.message)
            }
        }
    }
}