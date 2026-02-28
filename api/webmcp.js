const { Groq } = require('groq-sdk');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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

        // FIX: Correct response structure
        res.json({ result: completion.choices[0].message.content });
        
    } catch (error) {
        console.error("MANIFESTATION ANOMALY:", error);
        res.status(500).json({ 
            error: "Execution failed. Ensure your API keys are valid in the Vercel Dashboard.",
            details: error.message 
        });
    }
};
