const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
MONGODB: process.env.MONGODB || "mongodb+srv://mxgamecoder:mxgamecoder@cluster0.cefrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
SESSION_ID: process.env.SESSION_ID || "86MnSawA#cNzfH9WEpLhKir205sbdxpyhZ92xzu99zXhlfJnYQi0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/YFtmhOw.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 🤗 Vortex-X is alive 🙂, I am alive!!!'",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
