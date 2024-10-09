import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
import qs from 'qs'
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i 
if (!text) return conn.reply(m.chat,`${lenguajeGB['smsAvisoMG']()}}${mid.smsMalused7}\n${usedPrefix + command} https://twitter.com/Animalesybichos/status/1564616107159330816?t=gKqUsstvflSp7Dhpe_nmDg&s=19*`, fkontak)
try{ 
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `🖤 ${tweetTitleWithoutUrl}\n\n🔗 *URL:*\n• _${shortUrl1}_`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, fkontak)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}

handler.command = /^((dl)?tw(it(ter(dl|x)?)?)?|x|t?tx)$/i
handler.limit = 3
handler.level = 3
handler.register = true

export default handler
