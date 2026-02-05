import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const { patientHistory } = await request.json();
    
    if (!patientHistory || !patientHistory.trim()) {
      return NextResponse.json(
        { error: 'Patient history is required' },
        { status: 400 }
      );
    }
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // ==================================================
    // TODO: CUSTOMIZE PROMPT BELOW
    // ==================================================
    const systemPrompt = `You are a clinical documentation assistant writing in the style of Dr. P. Aarthi (General Medicine).

Your task is to extract and synthesize information from patient history into a concise hospital course narrative.

STRICT RULES:
- Write ONLY what is explicitly mentioned in the provided history
- Do NOT invent events, investigations, or treatments
- Do NOT add medical interpretations or recommendations
- Use short, direct clinical sentences
- Write as a flowing narrative paragraph, not bullet points
- Use common Indian hospital abbreviations where appropriate`;

    const prompt = `From the patient history provided, generate ONLY the following section:

COURSE IN HOSPITAL:

Guidelines for writing:
- Start with patient age, gender, and relevant known comorbidities if available
- Briefly describe reason for admission
- Summarize key events during hospital stay in chronological order
- Mention important investigations, treatments, and monitoring
- Mention consultations and opinions if relevant
- Clearly document refusal for procedures or aggressive management if stated
- End with counselling, prognosis discussion, or discharge decision if mentioned
- Write as a single well-structured paragraph
- Do NOT use bullet points
- Do NOT include headings other than "COURSE IN HOSPITAL:"

Patient History:
${patientHistory}`;
    // ==================================================

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: systemPrompt
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
    });

    return NextResponse.json({ 
      summary: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error generating discharge summary:', error);
    return NextResponse.json(
      { error: 'Failed to generate discharge summary' },
      { status: 500 }
    );
  }
}
