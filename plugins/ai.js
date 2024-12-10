const { cmd } = require('../command');
const axios = require('axios');

// Replace with your Cohere token
const cohereAPIKey = '1NivFxhIGqmIry7vzCx2Hr44gohIQoqvP80qQFW3';

cmd({
    pattern: "ai",
    alias: ["gpt", "bot"],
    react: "🤖",
    desc: "AI chatbot using Cohere",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, q, reply }) => {
    try {
        const response = await axios.post(
            'https://api.cohere.ai/generate',
            {
                prompt: q || body,
                max_tokens: 200
            },
            {
                headers: {
                    Authorization: `Bearer ${cohereAPIKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const replyText = response?.data?.generations?.[0]?.text || "Sorry, failed to process your request.";
        return reply(replyText);
    } catch (error) {
        console.error("Cohere API error:", error);
        return reply("Failed to fetch AI response.");
    }
});
