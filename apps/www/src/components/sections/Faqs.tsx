import { Container } from '@/components/layouts/Container'

const faqs = [
  [
    {
      question: 'Why would I ask Clever instead of ChatGPT, Claude, etc?',
      answer: (
        <>
          Chatbots that provide direct LLM access are general purpose and
          intentionally bare-bones. While possible to use them for idea
          generation, you would need to do many time consuming and repetitive
          tasks: file uploading, thread organization and isolation, prompt
          copy/paste, etc.
          <br />
          <br />
          While LLMs appear very capable, it's important to remember that they
          work by predicting the next token (word) over and over again until
          they predict a terminator. They do not have any understanding of what
          they emit and cannot perform actual reasoning or logic. Clever models
          idea generation as hundreds of subtasks, which drastically improves
          quality.
        </>
      ),
    },
    {
      question: 'What data do you store? Is it secure?',
      answer:
        'You control what Clever can use as context within a project by sharing folders or files with us. We never store copies of your data, and only access specific files if they are relevant to an active discussion. You can confirm this by checking the audit logs from your cloud storage provider. ',
    },
  ],
  [
    {
      question: 'How can I improve the ideas I generate?',
      answer:
        'Clever generates ideas by extracting context from your project files, then evaluates them based on project criteria. You can see both of these features and their current knowledge in project settings in your account. ',
    },
    {
      question: 'Is it free? How do you make money?',
      answer:
        'While in beta, clever is free with limits as we improve the product. There will eventually be a paid plan with high limits.  ',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
