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
    const prompt = `You are a clinical documentation assistant. Generate a professional daily clinical note based on the following structured data.

Only include sections where data is provided. Skip any empty fields. Use clear medical terminology and proper clinical formatting.

Data:
${JSON.stringify(formData, null, 2)}

Format the note professionally with appropriate headings and sections. Use standard medical abbreviations where appropriate.`;
    // ==================================================

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: "You are a clinical documentation assistant. Generate clear, professional clinical notes. Use proper medical terminology and formatting. Only include information that was provided." 
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
