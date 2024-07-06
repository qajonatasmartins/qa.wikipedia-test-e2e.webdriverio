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
            platformName: 'Android',
            browserName: 'Chrome',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2'
        }],
        reporters: [
            'spec',
            [
                'allure',
                {
                    outputDir: path.resolve('./reports/web/production/'),
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: false,
                },
            ],
        ],
        // ===================
        // Test Configurations
        // ===================
        logLevel: 'info'
    }
}
