const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].lastcofre2 + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre2 < 86400000) throw `> 🎁 Ya Reclamastes Tu Cofre\n> ⏰️Regresa En: *${msToTime(time - new Date())}* Para Volver A Reclamar`;

  const img = 'https://telegra.ph/file/75ce1ab8dad03125527e1.jpg';
  const dia = Math.floor(Math.random() * 30);
  const tok = Math.floor(Math.random() * 10);
  const ai = Math.floor(Math.random() * 4000);
  const expp = Math.floor(Math.random() * 5000);

  global.db.data.users[m.sender].estrellas += dia;
  global.db.data.users[m.sender].money += ai;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  const texto2 = `
╭━〔 ${global.botname} 〕⬣
┃🚩 *Obtienes Un Cofre*
┃ ${saludo}
╰━━━━━━━━━━━━⬣

╭━〔 ${global.botname} 〕⬣
┃ *${dia} Estrellas* 🌟
┃ *${tok} Tokens* 💰
┃ *${ai} Coins* ❤️
┃ *${expp} Exp* ⚡
╰━━━━━━━━━━━━⬣`;

  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

 // await conn.sendFile(m.chat, img, 'yoshiko.jpg', texto, fkontak);
//   await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)  
   
   async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*♡〜ლ(๑癶 Ⓞⓑⓣⓔⓝⓘⓔⓝⓓⓞ Ⓒⓞⓕⓡⓔ Ⓡⓤⓡⓤⓢⓗⓘ Ⓡⓤ Ⓑⓞⓣ ⓂⒹ 癶๑)ლ〜♡*`, mentions: conn.parseMention(texto2)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
  global.db.data.users[m.sender].lastcofre2 = new Date * 1;
};
handler.help = ['daily2'];
handler.tags = ['rpg'];
handler.command = ['coffer2', 'cofre2', 'abrircofre2', 'cofreabrir2'];
handler.level = 3;
handler.group = true;
handler.register = true
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}