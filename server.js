require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Groq } = require('groq-sdk');

const app = express();
const port = process.env.PORT || 3000;

// 1. REGULATED COMMUNICATION INTERFACE
app.use(cors());
app.use(express.json());

// 2. KEYMASTER OPS: INITIALIZE INTELLIGENCE CORE
// Authenticating into the global neural network silently and securely.
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// 3. THE AGENTIC GATEWAY ENDPOINT
app.post('/api/webmcp', async (req, res) => {
    const { command } = req.body;
    
    if (!command) {
        return res.status(400).json({ error: "Ontological Command required." });
    }

    try {
        // SCRIPTSMITH ORDER: Processing intent with Mythic Resonance
        const completion = await groq.chat.completions.create({
            messages: [
                { 
                    role: "system", 
                    content: "You are the Epic Tech AI Agent Army. Direct, cinematic, and visionary. You do not simulate; you manifest. Your mission is to provide production-ready intelligence on the first try." 
                },
                { role: "user", content: command }
            ],
            model: "llama3-8b-8192", // Optimized for speed and precision
            temperature: 0.7,
        });

        const manifestation = completion.choices.message.content;
        
        // SYNTHESIS & DELIVERY
        res.json({ result: manifestation });
        
    } catch (error) {
        console.error("MANIFESTATION ANOMALY:", error);
        res.status(500).json({ error: "Execution failed in the Neural Core. Check KeyMaster logs." });
    }
});

// 4. AXIOMATIC GENESIS
app.listen(port, () => {
    console.log(`Sovereign Nexus Live: Port ${port}`);
    console.log(`Architect of Evolution: Awaiting Commands...`);
});
