export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`🌟 *Hola ${username}, Bienvenido A BOT H EDGAR* 🥷🏻
📲 _Si Deseas Escribe .menu Para Ver Mis Comandos_ 🫡

📌 *Cualquier Duda O Sugerencia Puedes Contactar A Mi Creador:* 🎉
📩 wa.me/5213331199136 📭 ✨`) 
user.pc = new Date * 1
}