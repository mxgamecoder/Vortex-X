const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "main",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    console.log("Running .update command..."); // Debug log
    try {
        const repoUrl = 'https://github.com/mxgamecoder/Vortex-X.git'; 
        const targetFolder = 'plugins'; 
        
        if (!fs.existsSync(targetFolder)) {
            console.log("Target folder does not exist. Creating...");
            fs.mkdirSync(targetFolder); 
        }

        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        console.log("Executing Git command:", gitCommand); // Debug log

        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    console.log("Git error:", stderr); // Debug log
                    reject(`Git command failed: ${stderr}`);
                } else {
                    console.log("Git output:", stdout); // Debug log
                    resolve(stdout);
                }
            });
        });

        console.log("Update completed successfully!"); // Debug log
        await conn.sendMessage(from, { text: '*✅ Vortex-X Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error("Update error:", error.message); // Debug log
        reply(`*Error during update:* ${error.message}`);
    }
});
