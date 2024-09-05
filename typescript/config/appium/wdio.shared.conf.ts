import type { Options } from '@wdio/types'
import { config as sharedConfig } from '../../config/wdio.conf'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })

// @ts-ignore
export const config: Options.Testrunner = {
  ...sharedConfig,
  ...{
    hostname: "127.0.0.1",
    connectionRetryCount: 0,
    port: 4723,
    path: '/wd/hub/',
    capabilities: [],
  }
}