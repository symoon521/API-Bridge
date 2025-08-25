'use server';

/**
 * @fileOverview An AI agent that translates natural language prompts into API calls.
 *
 * - textToApi - A function that handles the conversion of natural language to API calls.
 * - TextToApiInput - The input type for the textToApi function.
 * - TextToApiOutput - The return type for the textToApi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TextToApiInputSchema = z.object({
  prompt: z
    .string()
    .describe(
      'A natural language prompt describing the desired API call and its purpose.'
    ),
});
export type TextToApiInput = z.infer<typeof TextToApiInputSchema>;

const TextToApiOutputSchema = z.object({
  apiCall: z
    .string()
    .describe(
      'The generated API call, integrating public data and user data as needed.'
    ),
  explanation: z
    .string()
    .describe(
      'An explanation of how the API call was constructed and which data sources were used.'
    ),
});
export type TextToApiOutput = z.infer<typeof TextToApiOutputSchema>;

export async function textToApi(input: TextToApiInput): Promise<TextToApiOutput> {
  return textToApiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'textToApiPrompt',
  input: {schema: TextToApiInputSchema},
  output: {schema: TextToApiOutputSchema},
  prompt: `You are an AI API integration expert. Your goal is to translate a user's natural language request into a functional API call. You should consider both public data sources and the user's own data to create the most relevant and useful API call. Also include an explanation on how the API call was constructed.

User Prompt: {{{prompt}}}

Output the API call and explanation in the following JSON format:
{
  "apiCall": "...",
  "explanation": "..."
}`,
});

const textToApiFlow = ai.defineFlow(
  {
    name: 'textToApiFlow',
    inputSchema: TextToApiInputSchema,
    outputSchema: TextToApiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
