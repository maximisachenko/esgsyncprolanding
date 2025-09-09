const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// OpenAI API proxy endpoint
app.post('/api/openai', async (req, res) => {
    try {
        const { prompt, level, language } = req.body;
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `You are an AI assistant that selects text variants for ESG reports. 
                        For each stage (summary, nextSteps, cta, premiumTeaser), select one variant (A, B, or C) based on the ESG level: ${level} and language: ${language}.
                        
                        Return ONLY a JSON object with this exact structure:
                        {
                            "summary": "A",
                            "nextSteps": "B", 
                            "cta": "C",
                            "premiumTeaser": "A"
                        }
                        
                        Each value must be exactly "A", "B", or "C". No other text or explanation.`
                    }
                ],
                max_tokens: 100,
                temperature: 0.7
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ error: 'Failed to process AI request' });
    }
});

app.listen(PORT, () => {
    console.log(`AI Proxy server running on http://localhost:${PORT}`);
});
