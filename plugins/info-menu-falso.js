import fs from 'fs'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import fetch from 'node-fetch'
import { parsePhoneNumber } from 'libphonenumber-js'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let picture = './media/menus/Menu1.jpg'
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak55 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let fake0 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")
let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}      
             m.react('📚') 
let menu = `\`¡HOLA!\` 👋🏻 • @${m.sender.replace(/@.+/, '')}\n${fantasy}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

> ├┈‧͙⁺˚*･༓☾　®　☽༓･*˚⁺‧͙ 
> ├┈ 𝒃𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 
> ├┈ *Canal oficial:* https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43 
    *Fecha y hora*
> ┣ 𝙵𝙴𝙲𝙷𝙰 𝚈 𝙷𝙾𝚁𝙰: \`${formatDate}\`
> ┣ 𝙿𝙰𝙸𝚂: \`${nombreLugar}\`
> ┣ 𝙲𝙸𝚄𝙳𝙰𝙳: \`${ciudad}\`
> ┣ 𝚄𝚃𝙸𝙻𝙸𝚉𝙰: ${wa}
> *╘━ꥇ۬════•| ✿ |•════╝* 
 ${readMore}

> *╭━ \`<FUNCIÓN DE SER UN SUB BOT/>\`
> ╠ 💫 _${usedPrefix}serbot_
> ╠ 💫 _${usedPrefix}serbot --code_
> ╠ 💫 _${usedPrefix}detener | stop_
> ╠ 💫 _${usedPrefix}code_
> *╘━ꥇ─────────────────═༻*
>  ↷ ɪɴғᴏ ᴅᴇ ʙᴏᴛ
> ├• ✐; ₊˚✦୧︰  .
> ├┈»»————- *️ ————-««
> ╠ ☬⃝ᩎ🌹 *${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *Registrados »* ${rtotalreg}/${totalreg}    
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsVersion']()}* ➺ _${vs}_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
> *╘━ꥇ۬════•| ✿ |•════╝* 

> ╭· · ─────── ·𖥸· ───── · 
> *< *información de ti* />*
> ├┈・─・﹕₊˚ ✦・୨୧・
> ┣ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}_` : '❌ _Sin registro_'}
> ┣ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
> ┣ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
> ┣ *${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏

> *╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
> ┃*< *información* />*
> ├┈・─・﹕₊˚ ✦・୨୧・
> ╠ *${lenguajeCD['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeCD['smsResultPareja']()}`}
> ╠ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏

>  *「 Info Usuario.*
> *︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*.
> ╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
> ┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
> ╰──╯ ░ - ̗̀↳🗝:❯ *${lenguajeCD['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}

> ╰───────────────────
> ╰──── +˚🧰 Experiencia:.
> ˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚⚓ Rango:.
> ˙·.˙··.˙·.┊ *°*+↷❯ *${lenguajeCD['smsBotonM5']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚💎 Diamantes:.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚👾 *FantasyCoins* :.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${money}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚🪙 Tokens:.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─ 

> ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
> ├┈ ↷   ɪɴғᴏ
> ├• ✐; ₊˚✦୧︰ Bᴏᴛ .
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}terminosycondiciones_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}grupos_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}estado_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}infobot_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}speedtest_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}donar_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}owner_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}script_
> ╘━ꥇ۬════•| ✿ |•════╝


> ╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
> ┃ *< 𝑅𝐸𝑃𝑂𝑅𝑇𝐴𝑅 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 />*
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂𖤍 💌 _${usedPrefix}reporte *texto*_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂𖤍 💌 _${usedPrefix}report *texto*_
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏


> ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
> ├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
> ├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
> ┈・──・──・﹕₊˚ ✦・୨୧・
>  ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 _${usedPrefix}botemporal *enlace* *cantidad*_
>  ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 _${usedPrefix}addbot *enlace* *cantidad*>
> *╘━ꥇ۬─────────────────═༻*

> ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
> ├┈ ↷sᴇʀ ᴜsᴜᴀʀɪᴀ(ᴏ)
> ├• ✐; ₊˚✦୧︰ᴘʀᴇᴍɪᴜᴍ  .
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 _${usedPrefix}listapremium | listprem_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 _${usedPrefix}pase premium_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 _${usedPrefix}pass premium_
> *╘━ꥇ۬─────────────────═༻*

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴊᴜᴇɢᴏs, ᴇsᴘᴇʀᴏ 
├• ✐; ₊˚✦୧︰ᴛᴇ ᴅɪᴠɪᴇʀᴛᴀs.
├┈・──・──・﹕₊˚ ✦・୨୧・
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}mates | matemáticas | math_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lanzar *cara* | *cruz*
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ppt *piedra : papel : tijera*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tictactoe | ttt *sala*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}deltictactoe | delttt_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topgays_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topotakus_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toppajer@s_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topput@s_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topintegrantes | topintegrante_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toplagrasa | topgrasa_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toppanafrescos | toppanafresco_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topshiposters | topshipost_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toplindos | toplind@s_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topfamosos | topfamos@s_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}topparejas | top5parejas_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}gay | gay *@tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}gay2 *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lesbiana *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}manca *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}manco *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pajero *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pajera *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}puto *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}puta *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}rata *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}love *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}doxear *nombre : @tag*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}doxxeame_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pregunta *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}apostar | slot *cantidad*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}formarpareja_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}dado_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}verdad_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}reto_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}multijuegos_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}juegos_
*╘━ꥇ۬─────────────────═༻* 
 
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ɪᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}simi | okgoogle *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}alexa | siri | cortana *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}simsimi | bixby *texto*_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
╠┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *bienvenida | welcome*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *avisos | detect*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *autonivel | autolevelup*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *restringir | restrict*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antillamar | anticall*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *publico | public*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *autovisto | autoread*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *temporal*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *stickers*_ 
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *autosticker*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *reacciones | reaction*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *audios*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *modocaliente | modohorny*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antiver | antiviewonce*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antieliminar | antidelete*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antinternacional | antifake*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antienlace | antilink*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antienlace2 | antilink2*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antitiktok | antitk*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antiyoutube | antiyt*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antitelegram | antitel*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antifacebook | antifb*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antinstagram | antig*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *antitwitter | antitw*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *soloprivados | pconly*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}on *:* off *sologrupos | gconly*_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏*


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ʀᴇsᴜᴍᴇɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}configuracion_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}settings_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺 _${usedPrefix}vergrupo_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 
 ${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴅᴇsᴄᴀʀɢᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}imagen | image *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pinterest | dlpinterest *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}wallpaper|wp *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}play | play2 *texto o link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}play.1 *texto o link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}play.2 *texto o link*_ 
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ytmp3 | yta *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ytmp4 | ytv *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pdocaudio | ytadoc *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pdocvieo | ytvdoc *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tw |twdl | twitter *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}facebook | fb *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}instagram *link video o imagen*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}verig | igstalk *usuario(a)*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ighistoria | igstory *usuario(a)*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tiktok *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tiktokimagen | ttimagen *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}mediafire | dlmediafire *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}clonarepo | gitclone *link*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}clima *país ciudad*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}consejo_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}morse codificar *texto*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}morse decodificar *morse*_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}fraseromantica_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}historia_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏*


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chatanonimo | anonimochat_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}anonimoch_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}start_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}next_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}leave_
*╘━════•| ✿ |•════╝* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}add *numero*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sacar | ban | kick  *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grupo *abrir : cerrar*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}group *open : close*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}daradmin | promote *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}quitar | demote *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanuser *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}admins *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}invocar *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tagall *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}hidetag *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}infogrupo | infogroup_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}advertencia *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}deladvertencia *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delwarn *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sivotar | upvote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}novotar | devote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delvoto | deletevoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}enlace | link_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}newnombre | nuevonombre *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}newdesc | descripcion *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}setwelcome | bienvenida *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}setbye | despedida *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}nuevoenlace | resetlink_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}on_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}off_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ғᴏʀᴍᴀ ᴛᴜ ᴘᴀʀᴇᴊᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}listaparejas | listship_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}mipareja | mylove_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pareja | couple *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}aceptar | accept *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}rechazar | decline *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}terminar | finish *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴠᴏᴛᴀᴄɪᴏɴᴇs ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sivotar | upvote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}novotar | devote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delvoto | deletevoto_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴᴛᴇɴɪᴅᴏ +18
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toimg | img | jpg *sticker*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toanime | jadianime *foto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tovn | vn *video o audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tovideo *audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tourl *video, imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toenlace  *video, imagen o audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tts es *texto*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʟᴏɢᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}logos *efecto texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}menulogos2_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ᴇғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}simpcard *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}hornycard *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lolice *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ytcomment *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}itssostupid_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pixelar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blur_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chica_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chico_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cristianoronaldo_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}messi_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}meme_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}meme2_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}itzy_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blackpink_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}kpop *blackpink : exo : bts*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lolivid_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}loli_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}navidad_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ppcouple_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}neko_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}waifu__
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chiho_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}elaina_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}eba_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}emilia_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cosplay_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bass_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blown_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}deep_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}earrape_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}fast_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}fat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}nightcore_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}reverse_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}robot_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}slow_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}smooth_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tupai_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʙᴜsǫᴜᴇᴅᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}animeinfo *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}mangainfo *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}google *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}letra | lirik *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}ytsearch | yts *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}wiki | wikipedia *texto*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎧 _${usedPrefix}audios_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}delchatgpt
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}del *<mensaje>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}qrcode *<texto>*__
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}horario_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}dropmail_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}botemporal *enlace* *cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}addbot *enlace* *cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pase premium_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pass premium_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}listapremium | listprem_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}transfer *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}dar *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}enviar *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}balance_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cartera | wallet_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}experiencia | exp_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}top | lb | leaderboard_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}nivel | level | lvl_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}rol | rango_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}inventario | inventory_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}aventura | adventure_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}caza | cazar | hunt_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pescar | fishing_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}animales_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}alimentos_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}curar | heal_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}buy_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}sell_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}verificar | registrar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}perfil | profile_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}myns_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}unreg *numero de serie*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minardiamantes | minargemas_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minargatacoins | minarcoins_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minarexperiencia | minarexp_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minar *:* minar2 *:* minar3_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}reclamar | regalo | claim_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadahora | hourly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadasemana | semanal | weekly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadames | mes | monthly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cofre | abrircofre | coffer_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}trabajar | work_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴛᴏᴘ ɢʟᴏʙᴀʟ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
 『𝑇𝑂𝑃 𝐺𝐿𝑂𝐵𝐴𝐿𝐸𝑆』
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}top | lb | leaderboard_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷sᴛɪᴄᴋᴇʀ ʏ ғɪʟᴛʀᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sticker | s *imagen o video*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sticker | s *url de tipo jpg*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}emojimix *😺+😆*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}scircle | círculo *imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}semoji | emoji *tipo emoji*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}attp *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}attp2 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp2 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp3 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp4 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp5 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp6 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}dado_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cs *:* cs2_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
『𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝐹 𝑆𝑇𝐼𝐶𝐾𝐸𝑅』
├┈ ↷  ᴍᴏᴅɪғɪᴄᴀʀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺_${usedPrefix}wm *packname|author*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺_${usedPrefix}wm *texto1|texto2*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}palmaditas | pat *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bofetada | slap *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}golpear *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}besar | kiss *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}alimentar | food *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}autoadmin_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grouplist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chetar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}leavegc_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cajafuerte_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blocklist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addowner *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delowner *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}block *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unblock *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}msg *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}resetuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanuser *_@tag_*
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}dardiamantes *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}añadirxp *<@tag> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bc *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcchats *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<audio>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<video>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<imagen>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcbot *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cleartpm_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}restart_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}update_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banlist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem *<@tag> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem2 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem3 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem4 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delprem *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}listcmd_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _*${usedPrefix}setppbot*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addcmd *<texto> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delcmd
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}saveimage
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}viewimage
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯*`.trim()
//await conn.sendFile(m.chat, fantasyImg, 'lp.jpg', menu, fake0, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝙉𝙖𝙩𝙨𝙪𝙠𝙞𝘽𝙤𝙩 ', previewType: 0, thumbnail: picture, sourceUrl: nn }}})
//await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fake0)

const natsuki = ['https://telegra.ph/file/fc75439751a71e3419c68.mp4',
'https://telegra.ph/file/60222a8e88addd43523b7.mp4',
'https://telegra.ph/file/efc37a04ba264b60ea1ec.mp4']

/*await conn.sendMessage(m.chat, { video: { url: natsuki.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fake0 })*/

await conn.sendMessage(m.chat, { video: { url: natsuki.getRandom() }, gifPlayback: true, caption: menu,
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363192435027853@newsletter',
newsletterName: "『✯ Team Comunity Natsuki 』",
serverMessageId: -1
},
forwardingScore: 999,
externalAdReply: {
mentionedJid: [m.sender],
title: gt,
body: textia,
thumbnailUrl: pp,
sourceUrl: md,
mediaType: 1,
renderLargerThumbnail: false
}}})

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(m|menú2|Menú2|menu2|Menu2|menucompleto|menubot|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
