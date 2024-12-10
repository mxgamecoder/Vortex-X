const {cmd , commands} = require('../command')

cmd({
    pattern: "botinfo",
    desc: "owner the bot",
    category: "owner",
    react: "🤔",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────◎◎▷
👋𝐇𝐄𝐋𝐋𝐎 ........................🔰

> ᗯᗴᒪᑕOᗰ TO Vortex-X ᗰᑌᒪTIᗪᗴᐯIᑕᗴ ᗯᕼᗩTՏᗩᑭᑭ ᗷOT☢︎︎

☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪 ☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

> Vortex-X 𝔹𝕆𝕋 𝕆𝕎𝔼ℕ𝔼ℝ 𝔸𝔹𝕆𝕌𝕋»

> ➪𝐌𝐘 𝐑𝐄𝐀𝐋 𝐍𝐀𝐌𝐄☞︎︎︎ MX-GΔMΞCØDΞR

> ➪𝐈'𝐌 𝐅𝐑𝐎𝐌☞︎︎︎ Zimbabwe 

> ➪𝐌𝐘 𝐀𝐆𝐄☞︎︎︎ ♕︎18 TO 20.♕︎


> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

 https://wa.me/2349021506036?text=_♕︎MX-GΔMΞCØDΞR♕︎_𝙸_𝚕𝚒𝚔𝚎_𝚖𝚎𝚎𝚝_𝚢𝚘𝚞👻👋_

> 𝐨𝐰𝐞𝐧𝐞𝐫 : MX-GΔMΞCØDΞR OᖴIᑕIᗩᒪ
╰───────────────◎◎▷
> © 2024 MX-GΔMΞCØDΞR
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/uKVe8kQ.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

