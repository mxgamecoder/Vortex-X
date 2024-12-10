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
        // Check if the command sender is the owner
        if (sender !== config.ownerNumber) {
            return reply("*🚫 You are not authorized to use this command.*");
        }

        reply("*✅ Welcome, bot owner! You have access to this command.*");
    } catch (error) {
        console.error("Owner command error:", error);
        reply("*❌ Failed to execute owner command.*");
    }
});
