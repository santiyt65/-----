import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
//conn.sendFile(m.chat, ronaldo, 'error.jpg', `*Siiiuuuuuu*`, m)}
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝚂 𝙸 𝙶 𝚄 𝙸 𝙴 𝙽 𝚃 𝙴', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|cr7)$/i
export default handler