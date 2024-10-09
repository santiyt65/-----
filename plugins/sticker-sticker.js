import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import '../plugins/_settings.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)
  try {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 7 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎!!')
      let img = await q.download?.()
      if (!img) throw `> ⓘ _𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚀𝚄𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙲𝙾𝙽 \`.jpg o .png\` 𝚈 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}_`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `*CREANDO STICKER, UN MOMENTO POR FAVOR...*`, m, FakeChannel)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: gt, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
    else throw `> ⓘ _𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚀𝚄𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙲𝙾𝙽 \`.jpg o .png\` 𝚈 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}_`
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}







/*import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 7 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎!!')
      let img = await q.download?.()
      if (!img) throw `𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝘼 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝘾𝙊𝙉 .jpg .png 𝙔 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊!! *${usedPrefix + command}_*`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
await conn.reply(m.chat, `*CREANDO SU STICKER, UN MOMENTO POR FAVOR...* `, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
    else throw '𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝘼 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝘾𝙊𝙉 .jpg .png 𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝘾𝙊𝙉 .jpg. 𝙔 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊!!'
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}*/