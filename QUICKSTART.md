# Quick Start Guide

## ⚠️ Important: Node Version Requirement

This app requires **Node.js 20.9.0 or higher**. Your current system has Node.js 16.15.1.

### Options:

1. **Upgrade Node.js** (Recommended for local development)
   - Download from: https://nodejs.org/
   - Or use nvm: `nvm install 20 && nvm use 20`

2. **Deploy directly to Vercel** (Works immediately)
   - Vercel will use the correct Node version automatically
   - See deployment instructions below

## Setup in 3 Steps

### 1. Add Your OpenAI API Key

Open `.env.local` and add your key:

```
OPENAI_API_KEY=sk-your-actual-key-here
```

Get your key from: https://platform.openai.com/api-keys

### 2. Run Locally (after upgrading Node)

```bash
npm run dev
```

Open http://localhost:3000

### 3. Or Deploy to Vercel Now

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add your OpenAI API key when prompted
```

## What's Included

✅ **Daily Notes Mode**
- Structured form with 12 collapsible sections
- Vitals, CBC, Renal, Liver, Coagulation, Electrolytes, etc.
- Two-column layout (form on left, output on right)
- Generate, edit, and copy clinical notes

✅ **Discharge Summary Mode**
- Paste patient history from Cranium
- Generate clean, structured discharge summaries
- Edit and copy output

✅ **Professional UI**
- Material Design-inspired
- Responsive (works on mobile)
- Clean typography and spacing
- Clinical aesthetic (not chatbot-like)

✅ **Privacy & Security**
- No data storage
- API key secured in environment variables
- All processing in-memory only

✅ **Customizable AI Prompts**
- Clearly marked placeholder sections
- Easy to modify for your specific needs
- Located in `app/api/` directory

## Usage

### Daily Notes
1. Click "Daily Notes" tab
2. Fill in relevant sections (only fill what you have)
3. Click "Generate Daily Note"
4. Review, edit if needed
5. Click "Copy to Clipboard"

### Discharge Summary
1. Click "Discharge Summary" tab
2. Paste patient history
3. Click "Generate Discharge Summary"
4. Review, edit if needed
5. Click "Copy to Clipboard"

## Customizing Prompts

### Daily Notes Prompt
Edit: `app/api/generate-daily-note/route.js`

Look for:
```javascript
// ==================================================
// TODO: CUSTOMIZE PROMPT BELOW
// ==================================================
```

### Discharge Summary Prompt
Edit: `app/api/generate-discharge-summary/route.js`

Look for the same marker.

## Troubleshooting

### "OpenAI API key not configured"
- Check that `.env.local` exists
- Verify your API key is correct
- Restart the dev server after adding the key

### Build fails with Node version error
- Upgrade Node.js to version 20.9.0 or higher
- Or deploy to Vercel which handles this automatically

### API requests failing
- Check your OpenAI API key is valid
- Ensure you have API credits
- Check browser console for detailed errors

## Next Steps

1. **Test the app** with sample data
2. **Customize the prompts** for your workflow
3. **Deploy to Vercel** for production use
4. **Share with colleagues** (after deployment)

## Support

- Full documentation: `README.md`
- Next.js docs: https://nextjs.org/docs
- OpenAI docs: https://platform.openai.com/docs
- Vercel docs: https://vercel.com/docs

---

**Disclaimer:** This is a drafting tool. All generated content must be reviewed by qualified medical professionals before clinical use.
