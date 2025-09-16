'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating payment receipts.
 *
 * - generatePaymentReceipt - A function that generates a payment receipt.
 * - GeneratePaymentReceiptInput - The input type for the generatePaymentReceipt function.
 * - GeneratePaymentReceiptOutput - The return type for the generatePaymentReceipt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePaymentReceiptInputSchema = z.object({
  tenantName: z.string().describe('The name of the tenant making the payment.'),
  paymentAmount: z.number().describe('The amount paid by the tenant.'),
  paymentDate: z.string().describe('The date when the payment was made (YYYY-MM-DD).'),
  propertyAddress: z.string().describe('The address of the property the tenant is renting.'),
  receiptId: z.string().describe('A unique identifier for this receipt.'),
  paystackReference: z.string().describe('The transaction reference ID from Paystack.'),
});
export type GeneratePaymentReceiptInput = z.infer<typeof GeneratePaymentReceiptInputSchema>;

const GeneratePaymentReceiptOutputSchema = z.object({
  receiptText: z.string().describe('The generated payment receipt text.'),
});
export type GeneratePaymentReceiptOutput = z.infer<typeof GeneratePaymentReceiptOutputSchema>;

export async function generatePaymentReceipt(input: GeneratePaymentReceiptInput): Promise<GeneratePaymentReceiptOutput> {
  return generatePaymentReceiptFlow(input);
}

const generatePaymentReceiptPrompt = ai.definePrompt({
  name: 'generatePaymentReceiptPrompt',
  input: {schema: GeneratePaymentReceiptInputSchema},
  output: {schema: GeneratePaymentReceiptOutputSchema},
  prompt: `You are an AI assistant specialized in generating payment receipts for tenants in Nigeria. 
  The currency is Naira (₦).
  Create a detailed and well-formatted digital receipt based on the information provided.

  Tenant Name: {{{tenantName}}}
  Payment Amount: ₦{{{paymentAmount}}}
  Payment Date: {{{paymentDate}}}
  Property Address: {{{propertyAddress}}}
  Receipt ID: {{{receiptId}}}
  Paystack Reference: {{{paystackReference}}}

  Generate a professional and easy-to-understand receipt, including all the above details.
  `,
});

const generatePaymentReceiptFlow = ai.defineFlow(
  {
    name: 'generatePaymentReceiptFlow',
    inputSchema: GeneratePaymentReceiptInputSchema,
    outputSchema: GeneratePaymentReceiptOutputSchema,
  },
  async input => {
    const {output} = await generatePaymentReceiptPrompt(input);
    return output!;
  }
);
