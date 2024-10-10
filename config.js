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
    
    global.tagusario = ['542604035392'];
    
    global.obtenerQrWeb = 0; //1 o 0
    global.keepAliveRender = 0; // 1 o 0
    
    //------------------------------------------------
    
    global.botNumberCode = "" 
    global.confirmCode = "" 
    //-----------------------------------------------
    
    global.catalogo = fs.readFileSync('./media/menus/prueba1.png')
    
    //------------------------------------------------
    global.lenguajeCD = es
    global.lenguajeGB = es
    global.mid = esDefault
    global.version_language = '1.0 (MID-CD)'
    
    //APIS Keys
    
    global.Key360 = ["MITSURI-BOT-MD"] // key Ephoto360
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
    ["+54 260 403-5392", 'SANTIYT65', 1], 
    ]
    
    global.mail = '' // Add email
    global.desc = '' // Add short description (20 caractres max)
    global.desc2 = '' // Add long description (90 caractres max) (Este parámetro se aplicará sólo si su whasapp no tiene descripción)
    global.country = '' // Add country, example: 🇪🇨
    //------------------------------------------------
    global.fantasy = "ᴍɪᴛꜱᴜʀɪ-ʙᴏᴛ-ᴍᴅ ᵖᵒʷᵒʳᵉᵈ ᵇʸ\n𝓢𝓐𝓝𝓣𝓘𝓨𝓣65 𝓞𝓕𝓘𝓒𝓘𝓐𝓛" // new name
    global.wilmerofc = "ᴍɪᴛꜱᴜʀɪ-ʙᴏᴛ-ᴍᴅ " // fkontak2
    global.packname = `├┈‧͙⁺˚･༓☾  ☽༓･˚⁺‧͙\n├┈ ⟴ 𝚈𝚘𝚞𝚃𝚞𝚋𝚎:\n├┈ @.oficial\n├┈ ⟴ 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖:\n├┈ @\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`
    global.author =  ` ├┈‧͙･༓☾  ☽༓･˚\n├┈⟴ 𝙶𝚒𝚝𝙷𝚞𝚋:\n├┈ \n├┈ ⟴ 𝙿𝚊𝚢𝙿𝚊𝚕:\n├┈ @\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`
    
    //----------------------------------------------------------
    
    
    global.estilo2 = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: fantasy, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
    global.textia = `ᴘᴏᴡʀᴇᴅ ʙʏ ꜱᴀɴᴛɪʏᴛ65`
    
    
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
    
    global.vs = "1.8.0"
    global.vsJB = "3.0"
    global.gt = "ᴍɪᴛꜱᴜʀɪ ☃️"
    
    global.canalofc = "https://whatsapp.com/channel/0029VajKFjlJJhzU8fvTPn2L"
    global.yt = ""
    global.yt2 = ""
    global.ig = ""
    global.md = ""
    global.fb = ""
    global.tk = ""
    global.ths = ""
    global.paypal = 'https://paypal.me/'
    global.asistencia = 'https://wa.me/message/C45GXBEFTPONE1' //Contacto
    global.bot = 'wa.me/+54 260 403-5392'
    
    global.nna = '' // Cuentas
    global.nn2 = 'https://t.me/' // 
    global.nna2 = '' //Anime y social 
    global.nn = '' // FantasyBot-MD 
    global.nnn = '' // FantasyBot-MD 
    global.nnnt = '' // canal 
    global.nnntt = '' // canal 
    global.nnnttt = '' // FantasyBot-MD 
    global.nnnttt1 = '' // Anime y social 
    global.nnnttt2 = '' // canal
    global.nnnttt3 = '' // canal
    global.nnnttt4 = '' // canal 
    global.nnnttt5 = '' // anime y social 
    global.nnnttt6 = '' // FantasyBot-MD 
    global.channel1 = ''
    global.channel2 = ''
    global.channel3 = 'https://t.me/'
    //------------------------------------------------
    
    
    //------------------------------------------------
    
    global.rg = '♥︎ 𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶 ♥︎\n\n'
    global.resultado = rg
    
    global.ag = '♥︎ 𝑨𝑫𝑽𝑬𝑹𝑻𝑬𝑵𝑪𝑰𝑨 ♥︎\n\n'
    global.advertencia = ag
    
    global.iig = '♥︎ 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 ♥︎\n\n'
    global.informacion = iig
    
    global.fg = ' ♥︎ 𝑬𝑹𝑹𝑶𝑹 ♥︎\n\n'
    global.fallo = fg
    
    global.mg = '♥︎ 𝑳𝑶 𝑨𝑯 𝑼𝑺𝑨𝑫𝑳 𝑫𝑬 𝑴𝑨𝑵𝑬𝑹𝑨 𝑰𝑵𝑪𝑶𝑹𝑹𝑬𝑪𝑻𝑨 ♥︎\n\n'
    global.mal = mg
    
    global.eeg = '♥︎ 𝑹𝑬𝑷𝑶𝑹𝑻𝑬 ♥︎\n\n'
    global.envio = eeg
    
    global.eg = '♥︎ 𝑬𝑿𝑰𝑻𝑶 ♥︎\n\n'
    global.exito = eg
    
    //------------------------------------------------
    
    global.wm = "SANTIYT65"
    global.igfg = " ᴍɪᴛꜱᴜʀɪ🌺"
    global.wait = "⌛ *`Cargando...`*\n*✦✦⊹⊹⊹⊹⊹⊹⊹⊹✪* `[20%]`"
    global.waitt = "⏳ *`Cargando....`*\n*✦✦✦✦⊹⊹⊹⊹⊹⊹✪* `[40%]`"
    global.waittt = "⌛ *`Cargando...`*\n*✦✦✦✦✦✦⊹⊹⊹⊹✪* `[60%]`"
    global.waitttt = "⏳ *`Cargando....`*\n*✦✦✦✦✦✦✦✦⊹⊹✪* `[80%]`"
    global.waittttt = "⌛ *`Procesando...`*\n*✦✦✦✦✦✦✦✦✦✦✪* `[100%]`"
    global.nomorown = "50250101139"
    global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]
    
    //-----------------------------------------------
    
    // IMÁGENS 
    global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
    global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
    global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
    global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
    global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
    global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
    global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
    global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
    global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
    global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
    global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
    global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
    global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")
    
    global.img = ''
    global.img2 = ''
    
    global.img3 = '' //prem
    global.img4 = '' //prem
    
    global.img5 = ''
    global.img6 = ''
    global.img7 = ''
    global.img8 = ''
    global.img9 = ''
    
    global.img10 = ''
    global.img11 = ''
    global.img12 = ''
    global.img13 = ''
    global.img14 = ''
    global.img15 = ''
    
    global.img16 = '' //+18
    
    global.img17 = ''
    global.img18 = ''
    
    global.logogit = ''
    
    let nskvid = ''
    let nskvid2 = ''
    let nskvid3 = ''
    global.nskvid = [nskvid, nskvid2, nskvid3]
    // • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
    
    // • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
    // ❰ RANDOMS ❱
    global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia]
    global.redesMenu = [nna, nn, nn2, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb, tk]
    global.accountsgb = [channel1, channel2, channel3, tk, ig, yt, paypal, fb, ths, md, nna, asistencia]
    global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
    global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
    global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
    
    
    //----------------------------------------------------
    global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
    
    global.fantasyImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
    
    global.fantasyMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
    
    // • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
    
    // • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
    // ❰ RPG ❱
    global.flaaa = [
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];
    
    global.cmenut = "❖––––––『"
    global.cmenub = "┊✦ "
    global.cmenuf = "╰━═┅═━––––––๑\n"
    global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
     
    global.dmenut = "*❖─┅──┅〈*"
    global.dmenub = "*┊»*"
    global.dmenub2 = "*┊*"
    global.dmenuf = "*╰┅────────┅✦*"
    global.htjava = "⫹⫺"
    
    global.htki = "*⭑•̩̩͙⊱•••• ☪*"
    global.htka = "*☪ ••••̩̩͙⊰•⭑*"
    
    global.comienzo = "• • ◕◕════"
    global.fin = " • •"
    
    global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
    global.bottime = `𝐓 𝐈 𝐄 𝐌 𝐏 𝐎 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
    global.fgif = {
    key: {
    participant : '0@s.whatsapp.net'},
    message: { 
    "videoMessage": { 
    "title": wm,
    "h": `Hmm`,
    'seconds': '999999999', 
    'gifPlayback': 'true', 
    'caption': bottime,
    'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
    }}}
    
    
    global.multiplier = 85 // Cuanto más alto, más difícil subir de nivel 
    
    //Emojis RPG - Referencias
    global.rpg = {
    emoticon(string) {
    string = string.toLowerCase();
    let emot = {
          level: '🧬 Nivel : Level',
          limit: lenguajeCD.eDiamante(),
          exp: lenguajeCD.eExp(),
          bank: '🏦 Banco : Bank',
          diamond: lenguajeCD.eDiamantePlus(),
          health: '❤️ Salud : Health',
          kyubi: lenguajeCD.eMagia(),
          joincount: lenguajeCD.eToken(),
          emerald: lenguajeCD.eEsmeralda(),
          stamina: lenguajeCD.eEnergia(),
          role: '💪 Rango | Role',
          premium: '🎟️ Premium',
          pointxp: '📧 Puntos Exp : Point Xp',
          gold: lenguajeCD.eOro(),
          
          trash: lenguajeCD.eBasura(),
          crystal: '🔮 Cristal : Crystal',
          intelligence: '🧠 Inteligencia : Intelligence',
          string: lenguajeCD.eCuerda(),
          keygold: '🔑 Llave de Oro : Key Gold',
          keyiron: '🗝️ Llave de Hierro : Key Iron',
          emas: lenguajeCD.ePinata(),
          fishingrod: '🎣 Caña de Pescar : Fishing Rod',
          gems: '🍀 Gemas : Gemas',
          magicwand: '⚕️ Varita Mágica : Magic Wand',
          mana: '🪄 Hechizo : Spell',
          agility: '🤸‍♂️ Agilidad : Agility',
          darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
          iron: lenguajeCD.eHierro(),
          rock: lenguajeCD.eRoca(),
          potion: lenguajeCD.ePocion(),
          superior: '💼 Superior : Superior',
          robo: '🚔 Robo : Robo',
          upgrader: '🧰 Aumentar Mejora : Upgrade',
          wood: lenguajeCD.eMadera(),
          
          strength: '🦹‍ ♀️ Fuerza : Strength',
          arc: '🏹 Arco : Arc',
          armor: '🥼 Armadura : Armor',
          bow: '🏹 Super Arco : Super Bow',
          pickaxe: '⛏️ Pico : Peak',
          sword: lenguajeCD.eEspada(),
          
          common: lenguajeCD.eCComun(),
          uncoommon: lenguajeCD.ePComun(),
          mythic: lenguajeCD.eCMistica(),
          legendary: lenguajeCD.eClegendaria(),
          petFood: lenguajeCD.eAMascots(), //?
          pet: lenguajeCD.eCMascota(),//?
          
          bibitanggur: lenguajeCD.eSUva(), bibitapel: lenguajeCD.eSManzana(), bibitjeruk: lenguajeCD.eSNaranja(), bibitmangga: lenguajeCD.eSMango(), bibitpisang: lenguajeCD.eSPlatano(),
          
          ayam: '🐓 Pollo : Chicken',
          babi: '🐖 Puerco : Pig',
          Jabali: '🐗 Jabalí : Wild Boar',
          bull: '🐃 Toro : Bull',    
          buaya: '🐊 Cocodrilo : Alligator',    
          cat: lenguajeCD.eGato(),    
          centaur: lenguajeCD.eCentauro(),
          chicken: '🐓 Pollo : Chicken',
          cow: '🐄 Vaca : Cow', 
          dog: lenguajeCD.ePerro(),
          dragon: lenguajeCD.eDragon(),
          elephant: '🐘 Elefante : Elephant',
          fox: lenguajeCD.eZorro(),
          giraffe: '🦒 Jirafa : Giraffe',
          griffin: lenguajeCD.eAve(), //Mascota : Griffin',
          horse: lenguajeCD.eCaballo(),
          kambing: '🐐 Cabra : Goat',
          kerbau: '🐃 Búfalo : Buffalo',
          lion: '🦁 León : Lion',
          money: lenguajeCD.eGataCoins(),
          monyet: '🐒 Mono : Monkey',
          panda: '🐼 Panda',
          snake: '🐍 Serpiente : Snake',
          phonix: '🕊️ Fénix : Phoenix',
          rhinoceros: '🦏 Rinoceronte : Rhinoceros',
          wolf: lenguajeCD.eLobo(),
          tiger: '🐅 Tigre : Tiger',
          cumi: '🦑 Calamar : Squid',
          udang: '🦐 Camarón : Shrimp',
          ikan: '🐟 Pez : Fish',
          
          fideos: '🍝 Fideos : Noodles',
          ramuan: '🧪 Ingrediente NOVA : Ingredients',
          knife: '🔪 Cuchillo : Knife'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]];
    }}
    
    global.rpgg = { //Solo emojis 
    emoticon(string) {
    string = string.toLowerCase();
    let emott = {
          level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
          diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
          emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
          pointxp: '📧', gold: '👑',
          
          trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
          keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
          mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
          potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
          
          strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
          
          common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
          
          bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
          
          ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
          centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
          fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
          horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
          snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
          wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
          
          fideos: '🍝', ramuan: '🧪', knife: '🔪'
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
    }}
    
    global.rpgshop = { //Tienda
    emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
          exp: lenguajeCD.eExp(), limit: lenguajeCD.eDiamante(), diamond: lenguajeCD.eDiamantePlus(), joincount: lenguajeCD.eToken(),
          emerald: lenguajeCD.eEsmeralda(), berlian: lenguajeCD.eJoya(), kyubi: lenguajeCD.eMagia(), gold: lenguajeCD.eOro(),
          money: lenguajeCD.eGataCoins(), tiketcoin: lenguajeCD.eGataTickers(), stamina: lenguajeCD.eEnergia(),
                
          potion: lenguajeCD.ePocion(), aqua: lenguajeCD.eAgua(), trash: lenguajeCD.eBasura(), wood: lenguajeCD.eMadera(),
          rock: lenguajeCD.eRoca(), batu: lenguajeCD.ePiedra(), string: lenguajeCD.eCuerda(), iron: lenguajeCD.eHierro(),
          coal: lenguajeCD.eCarbon(), botol: lenguajeCD.eBotella(), kaleng: lenguajeCD.eLata(), kardus: lenguajeCD.eCarton(),
          
          eleksirb: lenguajeCD.eEletric(), emasbatang: lenguajeCD.eBarraOro(), emasbiasa: lenguajeCD.eOroComun(), rubah: lenguajeCD.eZorroG(),
          sampah: lenguajeCD.eBasuraG(), serigala: lenguajeCD.eLoboG(), kayu: lenguajeCD.eMaderaG(), sword: lenguajeCD.eEspada(),
          umpan: lenguajeCD.eCarnada(), healtmonster: lenguajeCD.eBillete(), emas: lenguajeCD.ePinata(), pancingan: lenguajeCD.eGancho(),
          pancing: lenguajeCD.eCanaPescar(),
           
          common: lenguajeCD.eCComun(), uncoommon: lenguajeCD.ePComun(), mythic: lenguajeCD.eCMistica(),
          pet: lenguajeCD.eCMascota(),//?
          gardenboxs: lenguajeCD.eCJardineria(),//?
          legendary: lenguajeCD.eClegendaria(),
          
          anggur: lenguajeCD.eUva(), apel: lenguajeCD.eManzana(), jeruk: lenguajeCD.eNaranja(), mangga: lenguajeCD.eMango(), pisang: lenguajeCD.ePlatano(),
          
          bibitanggur: lenguajeCD.eSUva(), bibitapel: lenguajeCD.eSManzana(), bibitjeruk: lenguajeCD.eSNaranja(), bibitmangga: lenguajeCD.eSMango(), bibitpisang: lenguajeCD.eSPlatano(),
          
          centaur: lenguajeCD.eCentauro(), griffin: lenguajeCD.eAve(), kucing: lenguajeCD.eGato(), naga: lenguajeCD.eDragon(),
          fox: lenguajeCD.eZorro(), kuda: lenguajeCD.eCaballo(), phonix: lenguajeCD.eFenix(), wolf: lenguajeCD.eLobo(),
          anjing: lenguajeCD.ePerro(),
     
          petFood: lenguajeCD.eAMascots(), //?
          makanancentaur: lenguajeCD.eCCentauro(), makanangriffin: lenguajeCD.eCAve(),
          makanankyubi: lenguajeCD.eCMagica(), makanannaga: lenguajeCD.eCDragon(), makananpet: lenguajeCD.eACaballo(), makananphonix: lenguajeCD.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
    }}
    
    global.rpgshopp = { //Tienda
    emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
          exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
          emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
          money: '🐱', tiketcoin: '🎫', stamina: '✨',
                
          potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
          rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
          coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
          
          eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
          sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
          umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
          pancing: '🎣',
           
          common: '📦', uncoommon: '🥡', mythic: '🗳️',
          pet: '📫',//?
          gardenboxs: '💐',//?
          legendary: '🎁',
          
          anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
          
          bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
          
          centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
           
          petFood: '🍖', //?
          makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
          makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
    }}
    // • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
    
    let file = fileURLToPath(import.meta.url);
    watchFile(file, () => {
    unwatchFile(file);
    console.log(chalk.redBright("Update 'config.js'"));
    import(`${file}?update=${Date.now()}`);
    })