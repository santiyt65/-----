import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, text, usedPrefix, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused}\n*${usedPrefix + command} Universe*`
  wikipedia(`${text}`).then((res) => {
conn.reply(m.chat, `${mid.buscador9}\n\n` + res.result.isi, fkontak, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title:  '𝙒𝙞𝙠𝙞𝙥𝙚𝙙𝙞𝙖', body: '𝙉𝙖𝙩𝙨𝙪𝙠𝙞𝘽𝙤𝙩 ❤️',          previewType: 0, thumbnail: imagen2, sourceUrl: accountsgb.getRandom}}})
}).catch((e) => {
conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
})};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['internet'];
handler.command = /^(wiki|wikipedia)$/i;
handler.exp = 40
handler.level = 3
handler.limit = 1
export default handler;

async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}