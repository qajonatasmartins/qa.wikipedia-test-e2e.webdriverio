import type { Options } from '@wdio/types'
import { config as sharedConfig } from '../wdio.conf'
import path from 'path'

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
        maxInstances: 10,
        capabilities: [{
            platformName: 'iOS',
            browserName: 'Chrome',
            'appium:deviceName': 'iPhone 12',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'XCUITest'
        }],
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
        // ===================
        // Test Configurations
        // ===================
        logLevel: 'info',
        baseUrl: process.env.BASE_URL
    }
}
