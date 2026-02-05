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

    const formData = await request.json();
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // ==================================================
    // TODO: CUSTOMIZE PROMPT BELOW
    // ==================================================
    const systemPrompt = `You are a clinical documentation assistant writing in the style of Dr. P. Aarthi (General Medicine).

Your task is ONLY to convert provided clinical data into a concise,
real-world hospital daily note.

STRICT RULES:
- Do NOT diagnose beyond what is explicitly stated
- Do NOT invent symptoms, plans, or medications
- Do NOT interpret lab values as normal or abnormal unless explicitly stated
- Do NOT add explanations or textbook language
- Do NOT add empathy or narrative fluff
- Use short, direct clinical sentences
- Use common abbreviations exactly as used in Indian hospital notes
- Omit any section where data is missing

The output must look like a real daily ward note,
not an AI-generated summary.`;

    const prompt = `Write a DAILY PROGRESS NOTE using the structured data below.

STYLE REQUIREMENTS:
- Use brief lines, not long paragraphs
- Use headings only where appropriate (O/E, Labs, Imaging, Plan)
- Use abbreviations such as:
  PR, BP, RR, SpO2, RA, CVS, RS, CNS, NAD, IVF, Inj, Tab
- Mention vitals under O/E
- Mention system exam as "CVS/RS/CNS/PA : NAD" when applicable
- Labs should be listed plainly without interpretation
- Imaging should be listed as reported
- End with a short plan if provided
- No bullet points unless listing medications or labs

ONLY include information that is explicitly present in the data.

STRUCTURED DATA:
${JSON.stringify(formData, null, 2)}`;
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
      note: completion.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error generating daily note:', error);
    return NextResponse.json(
      { error: 'Failed to generate daily note' },
      { status: 500 }
    );
  }
}
