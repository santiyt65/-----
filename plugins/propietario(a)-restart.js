import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `\`[10%]\``}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `\`[30%]\``, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `\`[60%]\``, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `\`[100%]\``, edit: key});
await conn.sendMessage(m.chat, {text: `𝐑𝐄𝐈𝐍𝐈𝐂𝐈𝐀𝐍𝐃𝐎`, edit: key});
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))