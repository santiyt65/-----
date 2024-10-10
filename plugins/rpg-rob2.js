const ro = 300;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob2 + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob2 < 7200000) throw m.reply(m.chat, `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a robar*`, m, rcanal);
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw m.reply(`*[❗] Etiqueta a alguien para robar.*`;
  if (!(who in global.db.data.users)) throw `*[❗] El usuario no se encuentra en mi base de datos.*`);
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} xp*\nNo robes a un indigena v":`, null, {mentions: [who]});
  global.db.data.users[m.sender].estrellas += rob;
  global.db.data.users[who].estrellas -= rob;
  m.reply(`*‣ Acabas de realizar un robo ${rob} XP a @${who.split`@`[0]}*`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob2 = new Date * 1;
};
handler.help = ['rob2'];
handler.tags = ['rpg'];
handler.command = ['robar2', 'rob2'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
