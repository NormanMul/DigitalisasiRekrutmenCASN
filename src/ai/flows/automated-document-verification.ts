// automated-document-verification.ts
'use server';

/**
 * @fileOverview AI-powered document verification flow.
 *
 * The flow automatically verifies candidate documents against defined requirements using AI.
 * This reduces manual processing time and improves accuracy, leading to faster and more reliable applicant screening.
 *
 * - automatedDocumentVerification - A function that handles the document verification process.
 * - AutomatedDocumentVerificationInput - The input type for the automatedDocumentVerification function.
 * - AutomatedDocumentVerificationOutput - The return type for the automatedDocumentVerification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedDocumentVerificationInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A document to be verified, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  documentRequirements: z
    .string()
    .describe('The requirements for the document to be considered valid.'),
});
export type AutomatedDocumentVerificationInput = z.infer<
  typeof AutomatedDocumentVerificationInputSchema
>;

const AutomatedDocumentVerificationOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the document is valid or not.'),
  reason: z
    .string()
    .describe('The reason why the document is valid or invalid.'),
});

export type AutomatedDocumentVerificationOutput = z.infer<
  typeof AutomatedDocumentVerificationOutputSchema
>;

export async function automatedDocumentVerification(
  input: AutomatedDocumentVerificationInput
): Promise<AutomatedDocumentVerificationOutput> {
  return automatedDocumentVerificationFlow(input);
}

const automatedDocumentVerificationPrompt = ai.definePrompt({
  name: 'automatedDocumentVerificationPrompt',
  input: {schema: AutomatedDocumentVerificationInputSchema},
  output: {schema: AutomatedDocumentVerificationOutputSchema},
  prompt: `You are an AI assistant tasked with verifying documents against a set of requirements.

  Given the following document requirements:
  {{documentRequirements}}

  Analyze the following document:
  {{media url=documentDataUri}}

  Determine if the document meets the requirements and provide a reason for your decision.
  Response should be in JSON format:
  {
    "isValid": true/false,
    "reason": "explanation"
  }`,
});

const automatedDocumentVerificationFlow = ai.defineFlow(
  {
    name: 'automatedDocumentVerificationFlow',
    inputSchema: AutomatedDocumentVerificationInputSchema,
    outputSchema: AutomatedDocumentVerificationOutputSchema,
  },
  async input => {
    const {output} = await automatedDocumentVerificationPrompt(input);
    return output!;
  }
);
