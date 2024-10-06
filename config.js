import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from 'cheerio';
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"

// [ Agrega el número que será el Bot y los demas que serán propietarios del BOT. ]
global.owner = [
    ["54 2604 ", 'santiyt65 [nicolas]', true],
    [""], 
    [""],
    [""]
    ]

global.mods = []
global.prems = []

global.isBaileysFail = false

global.tagusario = ['542604811354'];

global.obtenerQrWeb = 0; //1 o 0
global.keepAliveRender = 0; // 1 o 0

//------------------------------------------------

global.botNumberCode = "" 
global.confirmCode = "" 
//-----------------------------------------------

global.catalogo = fs.readFileSync('./media/MENUS/prueba0.png')

//------------------------------------------------
global.lenguajeCD = es
global.lenguajeGB = es
global.mid = esDefault
global.version_language = '1.0 (MID-CD)'

//APIS Keys

global.Key360 = ["Gata_Dios"] // key Ephoto360
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "Gata_Dios"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',        
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',        
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},

global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,        
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}

//------------------------------------------------
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//------------------------------------------------

global.official = [
    ["54 260 503 5392", 'SANTIYT65', 1], 
]

global.mail = '' // Add email
global.desc = '' // Add short description (20 caractres max)
global.desc2 = '' // Add long description (90 caractres max) (Este parámetro se aplicará sólo si su whasapp no tiene descripción)
global.country = '' // Add country, example: 🇪🇨
//------------------------------------------------

global.fantasy = "" // new name
global.wilmerofc = "" // fkontak2
global.packname = `├┈‧☾ slade ofc ☽‧͙\n├┈ ⟴ 𝚈𝚘𝚞𝚃𝚞𝚋𝚎:\n├┈ @slade-u2.oficial\n├┈ ⟴ 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖:\n├┈ @76_santiloez6\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`
global.author ="├┈‧☾ slade ofc ☽‧͙\n├┈⟴ 𝙶𝚒𝚝𝙷𝚞𝚋:\n├┈ santiyt65\n├┈ ⟴ 𝙿𝚊𝚢𝙿𝚊𝚕:\n├┈ @ElbaMoreno211\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`"

//----------------------------------------------------------


global.estilo2 = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: fantasy, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.textia = `ᴘᴏᴡᴇʀ ʙʏ ꜱᴀɴᴛɪʏᴛ65`


//-------------------------------------------------------------

// Hola 👋🏻
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda noche 🌃'; break; case 1: hour = 'Linda noche 🌃'; break; case 2: hour = 'Linda noche 🌃'; break; case 3: hour = 'Linda mañana 🥀'; break; case 4: hour = 'Linda mañana 🥀'; break; case 5: hour = 'Linda mañana 🥀'; break; case 6: hour = 'Linda mañana 🥀'; break; case 7: hour = 'Linda mañana 🥀'; break; case 8: hour = 'Linda mañana 🥀'; break; case 9: hour = 'Linda mañana 🥀'; break; case 10: hour = 'Buen dia 💫'; break; case 11: hour = 'Buen dia 💫'; break; case 12: hour = 'Buen dia 💫'; break; case 13: hour = 'Buen dia 💫'; break; case 14: hour = 'Bonita tarde 🌄'; break; case 15: hour = 'Bonita tarde 🌄'; break; case 16: hour = 'Bonita tarde 🌄'; break; case 17: hour = 'Bonito anochecer 🌇'; break; case 18: hour = 'Linda noche 🌃'; break; case 19: hour = 'Linda noche 🌃'; break; case 20: hour = 'Linda noche 🌃'; break; case 21: hour = 'Linda noche 🌃'; break; case 22: hour = 'Linda noche 🌃'; break; case 23: hour = 'Linda noche 🌃'; break;}
global.saludo = '' + hour

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

//------------------------------------------------

global.packname = 'ᴍɪᴛꜱᴜʀɪ';
global.author = 'ᴍɪᴛꜱᴜʀɪ';
global.wm = 'ᴍɪᴛꜱᴜʀɪ';
global.titulowm = 'ᴍɪᴛꜱᴜʀɪ';
global.titulowm2 = 'ᴍɪᴛꜱᴜʀɪ'
global.igfg = 'santiyt65';
global.wait = '*⏳️ Cargando Espere Un Momento...*';
global.msg = 'https://whatsapp.com/channel/0029VakEHYw3LdQOoDMxce2b'

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./Menu4.jpg');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nBot`;
global.gt = 'ᴍɪᴛꜱᴜʀɪ';
global.mysticbot = 'ᴍɪᴛꜱᴜʀɪ';
global.md = 'https://github.com/santiyt65/-----';
global.Mitsuribot = 'https://github.com/santiyt65/-----';
global.waitt = '*⏳ Cargando Espere Un Momento...*';
global.waittt = '*⏳ Cargando Espere Un Momento...*';
global.waitttt = '*⏳ Cargando Espere Un Momento...*';
global.nomorown = '54 9 260 481 1354';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
