import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import chalk from 'chalk'
import type { Logger, LogType } from 'vite'

function customLogger(): Logger {
  const log = console.log

  const time = () => // i hate 12h time
    new Date().toLocaleTimeString('en-GB', { hour12: false }) // e.g. 21:42:03

  return {
    info(msg, options) {
      log(`${chalk.gray(`[${time()}]`)} ${msg}`)
    },
    warn(msg, options) {
      console.warn(chalk.yellow(`[${time()}] ${msg}`))
    },
    error(msg, options) {
      console.error(chalk.red(`[${time()}] ${msg}`))
    },
    warnOnce: () => {}, // optional no-op
    hasWarned: false,
    hasErrorLogged: (error: Error) => {
      return false;
    },
    clearScreen: (type: LogType) => {}
  }
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: './src',
  build: {
    outDir: 'dist'
  },
  customLogger: customLogger(),
})
