 import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Ingresa Un Link De Facebook', m);
  }

  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, 'Error al obtener datos. Verifica el enlace.', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, 'No se encontraron resultados.', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, 'Error al procesar los datos.', m);
  }

  if (!data) {
    return conn.reply(m.chat, 'No se encontró una resolución adecuada.', m);
  }

  let video = data.url;
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: null, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, 'Error al enviar el video.', m);
  }
};

handler.command = /^(facebook|fb)$/i;

export default handler;    








/*import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused5}\n${usedPrefix + command} https://www.facebook.com/watch?v=636541475139`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused5}\n${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
try { 
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}${mid.smsfb2}`, fkontak, m)
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}` 
}
conn.sendFile(m.chat, r2es, 'error.mp4', `✅ ${mid.smsfb}\n${wm}`, m);
} catch (err1) {
try {
const req = await igeh(args[0])
conn.sendMessage(m.chat, {video: {url: req.url_list}}, m)
} catch (err1_2) {
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendFile(m.chat, VIDEO, 'error.mp4', `✅ ${mid.smsfb}\n${wm}`, m);
} catch (err2) {
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendFile(m.chat, urll, 'error.mp4', `✅ ${mid.smsfb}\n${wm}`, m);
handler.limit = 3
} catch (err3) {
try {
const res = await fbDownloader(args[0]);
for (const result of res.download) {
const ur = result.url;
await conn.sendFile(m.chat, ur, 'error.mp4', `✅ ${mid.smsfb}\n${wm}`, m);
handler.limit = 3
}} catch (err4) {
try {
const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
const json = await res3.json();
const url3 = await json.video;
await conn.sendFile(m.chat, url3, 'error.mp4', `✅ ${mid.smsfb}\n${wm}`, m);
handler.limit = 3
} catch (err5) {
try {
const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `✅ ${mid.smsfb}\n${wm}`, m);
handler.limit = 3
} catch (err6) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(err6)
handler.limit = false
}}}}}}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
//handler.limit = 3 
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // get cookie from request
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
 });
} else {
ig.push(response.data.url[0].url);
}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message);
});
} catch (e) {
reject(e.message);
}})}





import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑, 𝐄𝐉𝐄𝐌𝐏𝐋𝐈:\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
try {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐎 𝐒𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊.`, fkontak, m)
let Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let Jjson = await Rres.json()
let VIDEO = Jjson.result[0]
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
conn.sendFile(m.chat, VIDEO, 'error.mp4', ` 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}`, m)    
} catch (err1) {
console.log('1 ' + err1)    
try {
let ress = await fg.fbdl(args[0])
let urll = await ress.data[0].url    
await conn.sendFile(m.chat, urll, 'error.mp4', ' 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}', m)     
} catch (err2) {
console.log('2 ' + err2)    
try {
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', '𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}', m)}
} catch (err3) {
console.log('3 ' + err3)    
try { 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}', m)
} catch (err4) {
console.log('4 ' + err4)    
try {
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = await json.video
await conn.sendFile(m.chat, url3, 'error.mp4', '𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}', m)         
} catch (err5) {
console.log('5 ' + err5)    
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0])).catch(async _ => await savefrom(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n${wm}', m)    
} catch (err6) {
console.log('6 ' + err6)    
await m.reply(`${lenguajeGB['smsAvisoFG']()}𝐀𝐋𝐆𝐎 𝐒𝐀𝐋𝐈𝐎́ 𝐌𝐀𝐋, 𝐑𝐄𝐂𝐔𝐄𝐑𝐃𝐀 𝐈𝐍𝐆𝐑𝐄𝐒𝐀𝐑 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐕𝐀𝐋𝐈𝐃𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊.`)
}}}}}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
handler.limit = 3
export default handler*/
