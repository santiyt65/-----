const handler = async (m, {isPrems, usedPrefix, conn}) => {
  
  const img = './Menu4.jpg';
  
  const texto = `
╔═════════════════⬣
║ JadiBot BOT H EDGAR
║┈┈┈┈┈┈┈┈┈┈┈┈┈
║ JadiBot Con Boton 
║ Escoge Tu Opinión 
║ Preferida 
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
  await conn.sendButton2(m.chat, texto, msg, img, [['Opcion QR', '#jadibotedgarsubbot'], ['Opcion Codigo', '#codeedgarsubbot'] ], fkontak, m)
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['code', 'qr', 'jadibot', 'serbot'];
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
