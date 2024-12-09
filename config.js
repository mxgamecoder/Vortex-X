const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "86MnSawA#cNzfH9WEpLhKir205sbdxpyhZ92xzu99zXhlfJnYQi0",
MONGODDB: process.env.MONGODB || "enter mongodb here",
};
