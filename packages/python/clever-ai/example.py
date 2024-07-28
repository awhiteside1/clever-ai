import ollama

import asyncio
from ollama import AsyncClient

AI_MODEL = 'mistral-large:123b-instruct-2407-q2_K'
EMBED_MODEL = 'sciphi/triplex'


async def chat():
    message = {'role': 'user', 'content': 'Why is the sky blue?'}
    async for part in await AsyncClient().chat(model=AI_MODEL, messages=[message], stream=True):
        print(part['message']['content'], end='', flush=True)


asyncio.run(chat())

response = ollama.chat(
    model='mistral-large:123b-instruct-2407-q2_K',
    messages=[{
        'role': 'user',
        'content': 'use the game Plinko as a metaphor for how LLMs work in a blog post targeting nontechnical people. Slots are output token choices, pegs are weights/parameters, each output token generated is a disk dropped with the current context. Emit only the blog post without any other response message. '
    }],
    stream=True,
    # provide a weather checking tool to the model
    tools=[{
        'type': 'function',
        'function': {
            'name': 'get_current_weather',
            'description': 'Get the current weather for a city',
            'parameters': {
                'type': 'object',
                'properties': {
                    'city': {
                        'type': 'string',
                        'description': 'The name of the city',
                    },
                },
                'required': ['city'],
            },
        },
    },
    ],
    options=Options(temperature=0.7)
)
for chunk in response:
    print(chunk['message']['content'], end='', flush=True)
