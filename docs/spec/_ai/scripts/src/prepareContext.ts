import { getMarkdownFilesContent } from './lib/prepareSpec'
import { generateLLMCompletion } from './lib/llm.ts'

const run = async () => {
  const prompts = await getMarkdownFilesContent('./system')
  const data = await getMarkdownFilesContent('../../')

  await generateLLMCompletion(
    Object.values(prompts)!.pop()!,
    data['framework/events.md'],
    'Events API Component',
  )
}
const preparePrompt = (
  system: Record<string, string>,
  specification: Record<string, string>,
) => {}

run().catch(console.error)
