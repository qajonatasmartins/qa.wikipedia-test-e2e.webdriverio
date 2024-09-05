import type { Options } from '@wdio/types'
import { config as sharedConfig } from './wdio.shared.conf'
import path from 'path'

// @ts-ignore
export const config: Options.Testrunner = {
  ...sharedConfig,
  ... {
    maxInstances: 5,
    capabilities: [
      {
        platformName: 'Android',
        'appium:uiautomator2ServerInstallTimeout': '50000',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': process.env.APP_PACKAGE,
        'appium:appActivity': process.env.APP_ACTIVITY,
        'appium:newCommandTimeout': 360,
        'appium:fullReset': true,
        "appium:unicodeKeyboard": true,
        "appium:autoGrantPermissions": true,
        'df:options': {
          recordVideo: true,
          screenshotOnFailure: true,
          build: new Date().toISOString(),
          saveDeviceLogs: true,
          tags: ['android'],
        },
        'appium:app': path.resolve(`./app/${process.env.APK_NAME}.apk`),
      }
    ],
    // services: ['appium'],
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
    // @ts-ignore
    beforeTest: async function (test, context) {
      await driver.executeScript('devicefarm: setSessionName', [{ name: `${test.title}` }])
    },
    // @ts-ignore
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
      // @ts-ignore
      await driver.executeScript('devicefarm: setSessionStatus', [{ status: passed ? 'passed' : 'failed' }])
      await driver.saveScreenshot(path.resolve(`./reports/local/develop/${test.title}-retries${retries.attempts}.png`))
    }
  }
}