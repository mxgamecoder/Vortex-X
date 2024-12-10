const { cmd } = require('../command');
const axios = require('axios');

// Directly insert your GPT-4o API Key here
const openAIAPIKey = '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';

cmd({
    pattern: "ai",
    alias: ["gpt", "bot"],
    react: "📑",
    desc: "AI Chat using GPT-4o.",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, body, reply }) => {
    try {
        console.log("Processing user query...");

        const userInput = body.replace('.ai', '').trim(); // Clean user input
        if (!userInput) {
            return reply("❌ Please ask a question like `.ai hi`.");
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4", // GPT-4o is based on this model name
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: userInput }
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

        console.log("Response received from OpenAI:", response.data);

        if (
            response.data &&
            response.data.choices &&
            response.data.choices[0] &&
            response.data.choices[0].message
        ) {
            const replyText = response.data.choices[0].message.content;
            return reply(replyText);
        } else {
            return reply("🤖 No response from the AI model.");
        }
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return reply("❌ Failed to fetch AI response.");
    }
});
