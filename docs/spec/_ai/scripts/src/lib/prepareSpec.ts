import fs from 'fs-extra'
import path from 'path'
import { mapKeys } from 'radash'

// Function to recursively read Markdown files
async function readMarkdownFiles(
  dir: string,
  result: Record<string, string> = {},
): Promise<Record<string, string>> {
  const files = await fs.readdir(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory() && !file.startsWith('_')) {
      await readMarkdownFiles(filePath, result)
    } else if (file.endsWith('.md')) {
      const content = await fs.readFile(filePath, 'utf-8')
      result[filePath] = content
    }
  }

  return mapKeys(result, (key) => key.replace(dir, ''))
}

// Main function to execute the script and return the result
export async function getMarkdownFilesContent(
  directoryPath: string,
): Promise<Record<string, string>> {
  return await readMarkdownFiles(directoryPath)
}
