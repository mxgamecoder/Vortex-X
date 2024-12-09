const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "86MnSawA#cNzfH9WEpLhKir205sbdxpyhZ92xzu99zXhlfJnYQi0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/YFtmhOw.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 🤗 Vortex-X is alive don't fear, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
};
