const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `😩 *Hello ${pushname}*
> *Vortex-X DOWNLOAD MENU* ⤵️

${menu.download}

> *Vortex-X MAIN MENU* 🤗

${menu.main}

> *Vortex-X GROUP MENU* 🥲

${menu.group}

> *Vortex-X OWNER MENU* 🤔

${menu.owner}

> *Vortex-X SEARCH MENU* 😁

${menu.search}

> *Vortex-X CONVERT MENU* 🙂

${menu.convert}

POWERED BY MX-GΔMΞCØDΞR 😞
`

await conn.sendMessage(from,{text:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
