const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "86MnSawA#cNzfH9WEpLhKir205sbdxpyhZ92xzu99zXhlfJnYQi0",
MONGODB: process.env.MONGODB || "mongodb+srv://mxgamecoder:mxgamecoder@cluster0.cefrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};
