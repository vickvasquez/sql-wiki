#!/usr/bin/env node
import path from 'node:path'
import fs from 'node:fs'
import { parseArgs } from 'node:util';

import { getDirname } from '../utils/getDirAndFilename.mjs';

const options = {
  title: { type: 'string' },
  fileName: { type: 'string' },
  description: { type: 'string', default: '' },
  type: { type: 'string', default: 'blog' }
}

const ALLOWED_TYPES = ['blog', 'concept', 'faq', 'gist']

const usage = `
  USAGE:

  pnpm create-post --title=<title> --description=<description> --type=<type> --fileName=<filename>

    --title         Title of post
    --description   Description of post
    --type          Type of post must be one of [${ALLOWED_TYPES.join(',')}]
    --fileName      Filename to new post, must be in kebab-case

  Example:

  pnpm create-post --title="This a title of a post" --description="This a description of a post" --type="faq" --fileName="what-is-foo?"
`
let values

try {
  ({ values } = parseArgs({ options }))

  if (!values.title || values.title === '') {
    throw new Error('Title of post is required')
  }

  if (!values.fileName || values.fileName === '') {
    throw new Error('File name of post is required')
  }

  if (!ALLOWED_TYPES.includes(values.type)) {
    throw new Error('The type of post is not allowed')
  }
} catch (err) {
  const { code } = err

  if (code === 'ERR_PARSE_ARGS_UNKNOWN_OPTION') {
    console.error('Hay un argumento no válido')
  } else {
    console.error(err.message)
  }

  console.log(usage)
  process.exit(1)
}


; (async () => {
  const { title, fileName, type, description } = values
  const __dirname = getDirname(import.meta.url)
  const templatePath = path.join(__dirname, '../.template/post.mdx')
  const targetPath = path.join(__dirname, `../src/pages/${type}/${fileName}.mdx`)

  try {
    await fs.promises.access(targetPath, fs.constants.F_OK)

    console.info(`[ERROR] The filename "${fileName}" already exists`)
    return
  } catch (err) {}

  try {
    const content = await fs.promises.readFile(templatePath, { encoding: 'utf8' })

    const newContent = content
      .replace('{{ title }}', title)
      .replace('{{ description }}', description || title)
      .replace('{{ date }}', new Date().toLocaleString().split(',')[0])

    await fs.promises.writeFile(targetPath, newContent)

    console.log('[INFO] File was created successfully')
    console.log(`[INFO] Start edit file ${targetPath}`)
    console.log(`[INFO] Happy coding :)`)
  } catch (err) {
    console.log(err.message)
  }
})()
