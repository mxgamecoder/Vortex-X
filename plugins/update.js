const { exec } = require('child_process');
const fs = require('fs');
const { cmd } = require('../command');

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update and restart the bot",
    category: "main",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/mxgamecoder/Vortex-X.git';
        const targetFolder = './main/plugins'; // Set target directory

        console.log("Running .update command...");
        
        // Pull repo changes
        exec(`git -C ${targetFolder} pull`, (err, stdout, stderr) => {
            if (err) {
                console.error("Error during Git Pull: ", stderr);
                reply(`Failed to pull updates: ${stderr}`);
            } else {
                console.log("Pulled changes successfully.");
                console.log(stdout);

                reply('*✅ Vortex-X Update completed successfully, restarting bot...*');

                // Restart the process
                process.exit(0);
            }
        });
    } catch (error) {
        console.error("Error during update: ", error);
        reply(`*Error during update:* ${error.message}`);
    }
});
