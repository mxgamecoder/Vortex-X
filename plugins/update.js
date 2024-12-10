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
        const repoDir = './repo'; // Use a directory for the repository clone
        const branch = 'main'; // Replace with your branch name if it's different.

        // Clone only if the repo isn't already present or initialized properly
        if (!fs.existsSync(repoDir)) {
            console.log("Cloning repository...");
            await new Promise((resolve, reject) => {
                exec(`git clone -b ${branch} ${repoUrl} ${repoDir}`, (err, stdout, stderr) => {
                    if (err) {
                        console.error("Error while cloning repository:", stderr);
                        reject(`Failed to clone repo: ${stderr}`);
                    } else {
                        console.log("Repository cloned successfully.");
                        resolve(stdout);
                    }
                });
            });
        } else {
            console.log("Updating repository...");
            await new Promise((resolve, reject) => {
                exec(`git -C ${repoDir} pull origin ${branch}`, (err, stdout, stderr) => {
                    if (err) {
                        console.error("Error while pulling updates:", stderr);
                        reject(`Failed to pull updates: ${stderr}`);
                    } else {
                        console.log("Repository updated successfully.");
                        resolve(stdout);
                    }
                });
            });
        }

        await conn.sendMessage(from, { text: '*✅ Vortex-X Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error("Update failed with error:", error.message);
        reply(`*Error during update:* ${error.message}`);
    }
});
