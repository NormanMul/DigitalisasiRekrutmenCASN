'use server';

/**
 * @fileOverview An AI-powered candidate scoring system.
 *
 * - aiPoweredCandidateScoring - A function that assesses candidate suitability based on qualifications and experience.
 * - AIPoweredCandidateScoringInput - The input type for the aiPoweredCandidateScoring function.
 * - AIPoweredCandidateScoringOutput - The return type for the aiPoweredCandidateScoring function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredCandidateScoringInputSchema = z.object({
  jobDescription: z.string().describe('The job description for the position.'),
  candidateResume: z.string().describe('The resume of the candidate.'),
});
export type AIPoweredCandidateScoringInput = z.infer<typeof AIPoweredCandidateScoringInputSchema>;

const AIPoweredCandidateScoringOutputSchema = z.object({
  score: z.number().describe('A score representing the candidate suitability for the job.'),
  justification: z.string().describe('The justification for the assigned score.'),
});
export type AIPoweredCandidateScoringOutput = z.infer<typeof AIPoweredCandidateScoringOutputSchema>;

export async function aiPoweredCandidateScoring(input: AIPoweredCandidateScoringInput): Promise<AIPoweredCandidateScoringOutput> {
  return aiPoweredCandidateScoringFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredCandidateScoringPrompt',
  input: {schema: AIPoweredCandidateScoringInputSchema},
  output: {schema: AIPoweredCandidateScoringOutputSchema},
  prompt: `You are an AI assistant that helps selection committee members assess candidate suitability.

You will receive a job description and a candidate's resume. You will assess the candidate's suitability for the job based on their qualifications and experience.

You will output a score representing the candidate's suitability for the job, and a justification for the assigned score.

Job Description: {{{jobDescription}}}
Candidate Resume: {{{candidateResume}}}

Ensure that the score is a number between 0 and 100.
`,
});

const aiPoweredCandidateScoringFlow = ai.defineFlow(
  {
    name: 'aiPoweredCandidateScoringFlow',
    inputSchema: AIPoweredCandidateScoringInputSchema,
    outputSchema: AIPoweredCandidateScoringOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
