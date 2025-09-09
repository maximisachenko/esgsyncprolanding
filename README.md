# ESGSyncPRO Landing Page

A modern ESG assessment landing page with AI-powered PDF generation and multilingual support.

## 🚀 Features

- **AI-Powered PDF Generation** - Unique text variants for each report
- **Multilingual Support** - English and Polish languages
- **Responsive Design** - Mobile-first approach for all screen sizes
- **ESG Assessment Tool** - Interactive questionnaire with scoring
- **PDF Export** - Automated PDF generation with personalized content
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## ✅ AI Setup

**GOOD NEWS**: The OpenAI API key is already configured and ready to use!

The system includes:
- **Environment variable support** with fallback key
- **Pre-configured API key** as fallback
- **Fallback AI-like selection** if API is unavailable
- **Smart text generation** for unique PDFs

## 🔒 Security Notes

- **Environment variables supported** - use `process.env.OPENAI_API_KEY`
- **Fallback key included** for development
- **`.env` files excluded** from Git (see `.gitignore`)
- **Example file provided** (`env.example`)
- Never commit real API keys to public repositories

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. The AI features are ready to use out of the box!

## 🤖 AI Features

The system includes intelligent text selection for PDF generation:

- **Context Analysis** - Analyzes ESG level (low/medium/high) and language (en/pl)
- **Pattern Recognition** - Uses smart patterns for different contexts
- **Unique Generation** - Each PDF gets different text combinations
- **Fallback System** - Works even without OpenAI API access

## 📁 Project Structure

```
esgsyncprolanding/
├── css/
│   ├── tailwind.css   # Tailwind source file with custom utilities
│   └── main.css       # Compiled CSS (generated)
├── assets/            # Images, fonts, and other static assets
├── public/            # Video files and media
├── index.html         # Main entry point with AI integration
├── pdf-template.js    # PDF generation with AI text selection
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── API_KEY_SETUP.md   # API key configuration guide
```

## 📦 Build for Production

Build the CSS for production:

```bash
npm run build:css
# or
yarn build:css
```
## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by HTML and Tailwind CSS

Built with ❤️ on Rocket.new