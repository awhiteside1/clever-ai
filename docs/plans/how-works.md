# How it Works

Given

1. a problem or set of constraints
2. context of the problem

If we could

1. generate ideas to solve that problem, varying on methodology used, influences, etc
2. evaluate each idea quantitatively for feasibility, alignment, impact, etc

Then we could

1. Create a library of mental models, problem solving approaches, methodologies, etc
2. Generate a bunch of ideas using randomly selected approaches.
3. Evaluate those ideas and bucket them into Good, neutral, and Bad
4. Bias future generation parameters towards the choices that netted in ‘good’ ideas, and away from those which were not
   deemed ‘good’
5. Repeat until statistics says we should stop, giving us possible global maximums
6. Take the top ideas and create variations from each, evaluating them and taking the top ideas

Resulting in the best ideas humanity would probably come up with for this situation

### Generating an Idea

1. Prompt an LLM:

> “Given **Context**, Apply **Methodology X** to **Problem** to form an **Idea** that will result in **Desired Outcomes
**. Always follow **Rules**, Consider **Priorities**. Show your work step by step, then output the result as JSON.”

2. Cajole the output into valid format.

You now have an idea that is statistically probable to occur.

### Evaluating an Idea
