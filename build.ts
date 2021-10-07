#!/usr/bin/env ts-node
import { build }  from 'vite'
import { dirname } from 'path'

const vConfigs = [
  'vite.config.ts',
  'vite.electron.config.ts'
]

const buildByConfig = (configFile: string) => build({ configFile })
;(async () => {
  try {
    const totalTimeLabel = 'Total bundling time'
    console.time(totalTimeLabel)

    for (const p of vConfigs) {
      const consoleGroupName = `${dirname(p)}/`
      console.group(consoleGroupName)

      const timeLabel = 'Bundling time'
      console.time(timeLabel)

      await buildByConfig(p)

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
