const fs = require('fs'); // File system module (part of Node.js, no need to add in package.json)
const { exec } = require('child_process'); // For executing shell commands
const { cmd } = require('../command'); // Assuming you have a command system setup

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "main",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    console.log("Starting the .update command..."); // Debug log
    try {
        const repoUrl = 'https://github.com/mxgamecoder/Vortex-X.git'; // Change to your repo URL
        const targetFolder = 'plugins'; // Change to the folder where you want to clone/update the repo

        // Check if the folder exists
        if (!fs.existsSync(targetFolder)) {
            console.log(`Target folder '${targetFolder}' does not exist. Creating...`);
            fs.mkdirSync(targetFolder); // Create the folder
        }

        // Determine if it's a pull (if .git exists) or clone operation
        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        console.log("Executing Git command:", gitCommand); // Debug log

        // Run the Git command
        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    console.error("Git error:", stderr); // Debug log for errors
                    reject(`Git command failed: ${stderr}`);
                } else {
                    console.log("Git command output:", stdout); // Debug log for success
                    resolve(stdout);
                }
            });
        });

        console.log("Update completed successfully!"); // Debug log for successful completion
        await conn.sendMessage(from, { text: '*✅ Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error("Update error:", error.message); // Debug log for any caught error
        reply(`*Error during update:* ${error.message}`);
    }
});
