import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned && !m.fromMe) {
    const join = `*< UNE UN BOT A TU GRUPO />*\n\n*—◉ Hola @${m.sender.split('@')[0]}, si deseas solicitar un Bot para tu grupo usa el comando #join mas el enlace de tu grupo.*\n\n*—◉ Ejemplo:*\n*◉ #join* https://chat.whatsapp.com/BSIjCoIEAzX9eEuDlMkVOq`.trim();
    this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen6, "mediaUrl": `https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q`, "sourceUrl": `https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q`}}}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(no digas eso papu)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/nopapu.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  

  return !0;
};
export default handler;
