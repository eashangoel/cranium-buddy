# Clinical Documentation Helper

A professional web application for generating clinical daily notes and discharge summaries using AI assistance. Built for doctors to reduce time spent on repetitive clinical documentation.

## Features

- **Daily Notes Mode**: Structured form with 12 collapsible sections for entering clinical data
  - Vitals (BP, HR, RR, SpO2, Temperature)
  - Complete Blood Count (CBC)
  - Renal Function Tests
  - Liver Function Tests
  - Coagulation Profile
  - Electrolytes
  - Glycaemic Status
  - Inflammatory Markers
  - Minerals
  - Microbiology
  - Urine Routine
  - Imaging/Procedures

- **Discharge Summary Mode**: Paste patient history and generate clean discharge summaries

- **Professional UI**: Material Design-inspired interface with clean typography, proper spacing, and clinical aesthetic

- **Privacy First**: No patient data is stored. All processing happens in-memory during requests.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI for accessible tabs
- **Icons**: Lucide React
- **AI**: OpenAI GPT-3.5 Turbo

## Setup

### Prerequisites

- Node.js 20.9.0 or higher (recommended)
- OpenAI API key

### Installation

1. **Clone or download the repository**

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
```

You can get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).

4. **Run the development server:**

```bash
npm run dev
```

5. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Quick Deploy

1. **Push your code to GitHub**

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add environment variable:**
   - In Vercel project settings, go to "Environment Variables"
   - Add `OPENAI_API_KEY` with your OpenAI API key

4. **Deploy:**
   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variable
vercel env add OPENAI_API_KEY
```

## Customizing AI Prompts

The AI prompts can be customized to match your specific clinical documentation needs.

### Daily Notes Prompt

Edit `app/api/generate-daily-note/route.js`:

Look for the section marked with:
```javascript
// ==================================================
// TODO: CUSTOMIZE PROMPT BELOW
// ==================================================
```

Modify the prompt to adjust the format, style, and content of generated daily notes.

### Discharge Summary Prompt

Edit `app/api/generate-discharge-summary/route.js`:

Look for the section marked with:
```javascript
// ==================================================
// TODO: CUSTOMIZE PROMPT BELOW
// ==================================================
```

Modify the prompt to adjust the structure and sections of discharge summaries.

## Usage

### Daily Notes

1. Select the "Daily Notes" tab
2. Expand relevant sections (Vitals is open by default)
3. Enter clinical data in the form fields
4. Click "Generate Daily Note"
5. Review and edit the generated note in the right panel
6. Click "Copy to Clipboard" to copy the note

### Discharge Summary

1. Select the "Discharge Summary" tab
2. Paste patient history from Cranium in the text area
3. Click "Generate Discharge Summary"
4. Review and edit the generated summary
5. Click "Copy to Clipboard" to copy the summary

## Project Structure

```
aarthi-helper/
├── app/
│   ├── api/
│   │   ├── generate-daily-note/
│   │   │   └── route.js          # API endpoint for daily notes
│   │   └── generate-discharge-summary/
│   │       └── route.js          # API endpoint for discharge summaries
│   ├── globals.css               # Global styles and Material Design theme
│   ├── layout.js                 # Root layout
│   └── page.js                   # Main page with tabs
├── components/
│   ├── CollapsibleCard.js        # Reusable collapsible section
│   ├── DailyNotes.js             # Daily notes main component
│   ├── DischargeSummary.js       # Discharge summary component
│   ├── VitalsSection.js          # Vitals form section
│   ├── CBCSection.js             # CBC form section
│   ├── RenalSection.js           # Renal function tests section
│   ├── LiverSection.js           # Liver function tests section
│   ├── CoagulationSection.js     # Coagulation profile section
│   ├── ElectrolytesSection.js    # Electrolytes section
│   ├── GlycaemicSection.js       # Glycaemic status section
│   ├── InflammatorySection.js    # Inflammatory markers section
│   ├── MineralsSection.js        # Minerals section
│   ├── MicrobiologySection.js    # Microbiology section
│   ├── UrineSection.js           # Urine routine section
│   └── ImagingSection.js         # Imaging/procedures section
├── .env.local                    # Environment variables (create this)
├── .env.example                  # Environment variables template
└── package.json
```

## Security & Privacy

- ✅ OpenAI API key stored securely in environment variables
- ✅ API key never exposed to frontend
- ✅ No patient data persisted to database
- ✅ All processing happens in-memory during requests
- ✅ HTTPS enforced on Vercel deployment

## Disclaimer

**This is a drafting tool, NOT a diagnostic tool.**

All generated notes and summaries must be reviewed by qualified medical professionals before clinical use. The application does not replace clinical judgment or medical expertise.

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

This project is intended for internal clinical use.
