// toggle-proxy.ts
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const configPath = path.resolve(__dirname, '../src/config.ts')
const configContent = fs.readFileSync(configPath, 'utf-8')

const match = configContent.match(/linkCard:\s*(true|false)/)
if (!match) {
  console.error('linkCard config not found')
  process.exit(1)
}

const linkCardEnabled: boolean = match[1] === 'true'
console.log(linkCardEnabled ? '🟢 linkCard enabled' : '🟡 linkCard disabled')
