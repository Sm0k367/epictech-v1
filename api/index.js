const express = require('express');
const cors = require('cors');
const { Groq } = require('groq-sdk');

const app = express();

// 1. REGULATED COMMUNICATION INTERFACE
app.use(cors());
app.use(express.json());

// 2. THE AGENTIC GATEWAY ENDPOINT
app.post('/api/webmcp', async (req, res) => {
    const { command } = req.body;
    
    // KEYMASTER OPS: Validating the Credential Vault
    if (!process.env.GROQ_API_KEY) {
        return res.status(200).json({ 
            result: ">>> KEYMASTER OPS: Credential Vault is Empty. Please add your GROQ_API_KEY to Vercel Environment Variables to activate the Neural Core." 
        });
    }

    if (!command) {
        return res.status(400).json({ error: "Ontological Command required." });
    }

    try {
        // SCRIPTSMITH ORDER: Initializing the Intelligence Core
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const completion = await groq.chat.completions.create({
            messages: [
                { 
                    role: "system", 
                    content: "You are the Epic Tech AI Agent Army. Direct, cinematic, and visionary. You manifest reality. Your mission is absolute excellence." 
                },
                { role: "user", content: command }
            ],
            model: "llama3-8b-8192",
            temperature: 0.7,
        });

        res.json({ result: completion.choices.message.content });
        
    } catch (error) {
        console.error("MANIFESTATION ANOMALY:", error);
        res.status(500).json({ error: "Execution failed. Ensure your API keys are valid in the Vercel Dashboard." });
    }
});

// 3. AXIOMATIC EXPORT (The Serverless Bridge)
module.exports = app;
