const { cmd } = require('../command');
const axios = require('axios'); // Using Axios for HTTP requests

// Directly insert the API Key here (not recommended for production)
const openAIAPIKey = 'your_openai_api_key_here'; // Replace with your actual OpenAI API key

cmd({
    pattern: "ai",
    alias: ["gpt", "bot"],
    react: "📑",
    desc: "AI Chat using GPT-3.5.",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, q, reply }) => {
    try {
        if (!openAIAPIKey) {
            return reply("🔑 No API key provided.");
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: q || body }
                ],
                max_tokens: 200
            },
            {
                headers: {
                    Authorization: `Bearer ${openAIAPIKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.data && response.data.choices && response.data.choices[0]) {
            const replyText = response.data.choices[0].message.content;
            return reply(replyText);
        } else {
            return reply("No response from AI model.");
        }
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return reply("Failed to fetch response from AI.");
    }
});
