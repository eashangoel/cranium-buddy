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
    const prompt = `You are a clinical documentation assistant. Create a clean, professional discharge summary from the following patient history.

Structure it with standard sections such as:
- Chief Complaint / Reason for Admission
- History of Present Illness
- Hospital Course
- Laboratory and Diagnostic Findings
- Imaging Studies
- Discharge Medications
- Follow-up Instructions
- Discharge Condition

Use clear medical terminology and proper clinical formatting.

Patient History:
${patientHistory}

Generate a comprehensive, well-organized discharge summary.`;
    // ==================================================

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: "You are a clinical documentation assistant. Generate clear, professional discharge summaries. Use proper medical terminology and formatting." 
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
