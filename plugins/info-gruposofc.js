const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*

*1.-* 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇
 https://chat.whatsapp.com/EhRTcJwjN76GRV9idvEfC5

*2.-* 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇 enlaces
https://chat.whatsapp.com/BSIjCoIEAzX9eEuDlMkVOq

*3.-* 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇 soporte
https://chat.whatsapp.com/Ir1oZN3sCjREM43QecNb0o

*4.-* 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇 2
https://chat.whatsapp.com/BtSERmZQvmRF2ZdUnT2eqW

*5.-* 𝔑𝔦𝔤𝔯𝔬𝔪𝔞𝔫𝔱𝔢𝔅𝔬𝔱-𝔐𝔇
https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q
*6.-* ℝ𝕠𝕤𝕒𝔹𝕠𝕥-𝕄𝔻
https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/sinombre913/NigromanteBot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「 LOS GRUPOS 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://whatsapp.com/channel/0029VaFOShR9mrGiarBG8m0q'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
