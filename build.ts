import { build } from 'vite'
import { dirname } from 'path'

const viteConfigs = ['vite.config.ts', 'vite.electron.config.ts']

;(async () => {
  try {
    const totalTimeLabel = 'Total bundling time'
    console.time(totalTimeLabel)

    for (const configFile of viteConfigs) {
      const consoleGroupName = `${dirname(configFile)}/`
      console.group(consoleGroupName)

      const timeLabel = 'Bundling time'
      console.time(timeLabel)

      await build({ configFile })

      console.timeEnd(timeLabel)
      console.groupEnd()
      console.log('\n')
    }

    console.timeEnd(totalTimeLabel)
    console.log('\n')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
