const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "👤",
    desc: "Owner only command.",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { from, reply, sender }) => {
    try {
        console.log("Sender ID received:", sender); // Log sender ID for debugging

        // Compare the actual sender's ID
        if (sender !== config.ownerNumber) {
            console.log("Expected owner number:", config.ownerNumber);
            return reply("*🚫 You are not authorized to use this Vortex-X command.*");
        }

        reply("*✅ Welcome, bot owner! You have access to this Vortex-X command.*");
    } catch (error) {
        console.error("Owner command error:", error);
        reply("*❌ Failed to execute owner command.*");
    }
});
