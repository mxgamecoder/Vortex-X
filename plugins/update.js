const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

// Command to handle GitHub updates
cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update bot repo from GitHub",
    category: "main",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    console.log("Running .update command...");
    try {
        const repoUrl = 'https://github.com/mxgamecoder/Vortex-X.git';
        const repoDir = '.'; // Assuming the bot repo is already in the current working directory
        const branch = 'main'; // Replace with your branch name if it's different.

        console.log("Updating repository...");
        await new Promise((resolve, reject) => {
            exec(`git -C ${repoDir} pull origin ${branch}`, (err, stdout, stderr) => {
                if (err) {
                    console.error("Error while pulling updates:", stderr);
                    reject(`Failed to pull updates: ${stderr}`);
                } else {
                    console.log("Repository updated successfully.");
                    console.log(stdout);
                    resolve(stdout);
                }
            });
        });

        // Notify success before restarting
        await conn.sendMessage(from, { text: '*✅ Vortex-X Update completed successfully! Restarting bot...*' }, { quoted: mek });

        console.log("Restarting bot...");
        process.exit(0); // Terminate the process to trigger a restart by PM2 or another process manager
    } catch (error) {
        console.error("Update failed with error:", error.message);
        reply(`*Error during update:* ${error.message}`);
    }
});
