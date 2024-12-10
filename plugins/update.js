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
        const branch = 'main'; // Replace 'main' with your repo's branch name if it's different

        // Check if the repository already exists
        if (!fs.existsSync('./.git')) {
            console.log("Repository doesn't exist. Cloning...");
            await new Promise((resolve, reject) => {
                exec(`git clone -b ${branch} ${repoUrl}`, (err, stdout, stderr) => {
                    if (err) {
                        console.error("Git clone error:", stderr);
                        reject(`Git clone failed: ${stderr}`);
                    } else {
                        console.log("Repository cloned successfully.");
                        resolve(stdout);
                    }
                });
            });
        } else {
            console.log("Repository exists. Pulling latest changes...");
            await new Promise((resolve, reject) => {
                exec(`git pull origin ${branch}`, (err, stdout, stderr) => {
                    if (err) {
                        console.error("Git pull error:", stderr);
                        reject(`Git pull failed: ${stderr}`);
                    } else {
                        console.log("Repository updated successfully.");
                        resolve(stdout);
                    }
                });
            });
        }

        await conn.sendMessage(from, { text: '*✅ Vortex-X Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error("Update error:", error.message);
        reply(`*Error during update:* ${error.message}`);
    }
});
