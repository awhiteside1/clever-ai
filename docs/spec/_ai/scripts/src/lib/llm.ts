import { ollama, streamText } from 'modelfusion'

const basePrompt = (
  feature: string,
  filesystem: string,
) => `Using the JSON formatted filesystem contents below, which have files described in your system prompt, to plan, describe, then fully implement in typescript as described the feature: ${feature}

JSON Files:
${filesystem}

`

export const generateLLMCompletion = async (
  system: string,
  messages: string,
  feature: string,
) => {
  const textStream = await streamText({
    model: ollama
      .CompletionTextGenerator({ model: 'mistral-nemo' })
      .withInstructionPrompt(),
    prompt: {
      instruction: basePrompt(feature, messages),
      system:
        'You are an expert typescript developer who will write typescript code that implements the requested feature. Ensure you put code in fences, write modern esm typescript and name things well. ',
    },
  })
  for await (const textPart of textStream) {
    process.stdout.write(textPart)
  }
}
