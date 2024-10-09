const handler = async (m, {isPrems, usedPrefix, conn}) => {
  
  const img = './Menu3.png';
  
  const texto = `
╔═════════════════⬣
║ MENU BOTON
║┈┈┈┈┈┈┈┈┈┈┈┈┈
║Mini Menu Con Botones
║${usedPrefix}allmenu
║${usedPrefix}menuaudios
║${usedPrefix}hornymenu
╚═════════════════⬣`;

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

 // await conn.sendFile(m.chat, img, 'mystic.jpg', texto, fkontak);
  await conn.sendButton2(m.chat, texto, msg, img, [['🔰 𝙼𝙴𝙽𝚄', '/allmenu'], ['Menu Audios', '/menu2'], ['Menu Horny', '/menuhorny'] ], fkontak, m)
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['menu', 'help'];
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
