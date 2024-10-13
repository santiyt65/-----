/*

código adaptado por @Wilmer ofc
código laborado por Wilmer 
dejar créditos 

*/

/*const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import PhoneNumber from 'awesome-phonenumber'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import { fileURLToPath } from 'url'
import crypto from 'crypto'
import fs from "fs"
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import pino from 'pino'
import * as ws from 'ws'
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js'

if (global.conns instanceof Array) console.log()
else global.conns = []

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJsonPath = join(__dirname, '../package.json')
const { name, author, version: versionSB, description } = JSON.parse(readFileSync(packageJsonPath, 'utf8'))

let folderNatsuki = 'natsukisessions', nombre = 'NatsukiBot', opcion = ''
let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner, text }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd) return _conn.sendMessage(m.chat, { text: `${lenguajeCD['smsSoloOwnerJB']()}` }, { quoted: m })

let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
text = (text ? text : (args[0] ? args[0] : '')).toLowerCase()

let message1 = `${lenguajeCD['smsJBConexion']()}\nwa.me/${global.conn.user.jid.split('@')[0]}?text=${usedPrefix}serbot`
if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
if (text.includes('qr')) {
return parent.sendMessage(m.chat, { text: message1 + '%20qr' }, { quoted: m })
} else if (text.includes('code')) {
return parent.sendMessage(m.chat, { text: message1 + '%20code' }, { quoted: m })
} else {
return parent.sendMessage(m.chat, { text: message1 + '%20code' }, { quoted: m })
}}

let authFoldercd = crypto.randomBytes(10).toString('hex').slice(0, 8)
async function serbot() {
if (!fs.existsSync(`./${folderNatsuki}/` + authFoldercd)){
fs.mkdirSync(`./${folderNatsuki}/` + authFoldercd, { recursive: true })
}
args[0] ? fs.writeFileSync(`./${folderNatsuki}/` + authFoldercd + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

const { state, saveState, saveCreds } = await useMultiFileAuthState(`./${folderNatsuki}/${authFoldercd}`)
const msgRetryCounterMap = (MessageRetryMap) => { }
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion()
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = text.includes('qr') || false
const methodCode = text.includes('code') || true
const MethodMobile = process.argv.includes("mobile")

if (text.includes('qr')) {
opcion = '1'
} else if (text.includes('code')) {
opcion = '2'
} else {
opcion = '2'
}

const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? [`${nombre} (sub bot)`, 'Edge', '2.0.0'] : ['Ubuntu', 'Edge', '110.0.1587.56'], 
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })), },
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '')

let txt = ''
if (!fs.existsSync(`./${folderNatsuki}/` + authFoldercd + "/creds.json")){
if (opcion == '1') {
txt = `${lenguajeCD['smsIniJadi']()}`
} else {  
txt = `${lenguajeCD['smsCodebt']()}`

let codeCD, codeGD 
setTimeout(async () => {
let codeBot = await conn.requestPairingCode(cleanedNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
codeCD = await parent.sendMessage(m.chat, { text: txt.trim(), mentions: [m.sender] }, { quoted: m })  
codeGD = await parent.sendMessage(m.chat, { text: codeBot }, { quoted: m })
}, 2000)

setTimeout(() => {
parent.sendMessage(m.chat, { delete: codeCD.key })
parent.sendMessage(m.chat, { delete: codeGD.key })
}, 50000) // 50 segundos
}
}
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = true
if (opcion == '1') {
let qrcode = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', txt.trim(), m)
setTimeout(() => {
parent.sendMessage(m.chat, { delete: qrcode.key })
}, 40000) //40 segundos
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn)
if (i < 0) { 
console.log(await creloadHandler(true).catch(console.error))
}
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed) {
parent.sendMessage(m.chat, { text: "> ⓘ 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 𝙿𝙴𝚁𝙳𝙸𝙳𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾" }, { quoted: m })
} else {
parent.sendMessage(m.chat, { text: `${lenguajeCD['smsJBConexionClose']()}` }, { quoted: m })
}}

if (global.db.data == null) loadDatabase()
if (connection == 'open') {
conn.isInit = true
global.conns.push(conn)
await parent.sendMessage(m.chat, {text : args[0] ? '✅ *¡Conectado con exito!*' : '> ⓘ 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙴𝚇𝙸𝚃𝙾𝚂𝙰 𝙼𝙴𝙽𝚃𝙴, 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝚁𝚂𝙴 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #serbot\n𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙻𝙰 𝚂𝙴𝚂𝙸𝙾𝙽 𝚄𝚂𝙴: #deletesession\n𝙿𝙰𝚁𝙰 𝙿𝙰𝚄𝚂𝙰𝚁 𝙴𝙻 𝚂𝚄𝙱 𝙱𝙾𝚃 𝚄𝚂𝙴 #stop\n𝙿𝚄𝙴𝙳𝙴𝚂 𝙷𝙰𝙲𝙴𝚁𝙼𝙴 𝚄𝙽𝙰 𝙳𝙾𝙽𝙰𝙲𝙸𝙾𝙽 𝚂𝙸 𝚃𝙴 𝙰𝙶𝚁𝙰𝙳𝙰 𝙴𝚂𝚃𝙴 𝙿𝚁𝙾𝚈𝙴𝙲𝚃𝙾. 𝙿𝙰𝚈𝙿𝙰𝙻:' }, { quoted: m })
args[0] ? console.log(`*Usuario de sub bot reconectandose: ${PhoneNumber('+' + (conn.user?.jid).replace('@s.whatsapp.net', '')).getNumber('international')} (${conn.getName(conn.user.jid)})*`) : console.log(`*Un Nuevo Usuario conectado para sub bot : ${PhoneNumber('+' + (conn.user?.jid).replace('@s.whatsapp.net', '')).getNumber('international')} (${conn.getName(conn.user.jid)})*`)
await sleep(5000)
if (args[0]) return
await parent.sendMessage(conn.user.jid, {text : '> ⓘ 𝚂𝙸 𝚂𝙴 𝙿𝙰𝚄𝚂𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙾 𝙳𝙴𝙹𝙰 𝙳𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁, 𝙴𝙽𝚅𝙸𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝚁𝚂𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴'}, { quoted: m })
await parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync(`./${folderNatsuki}/` + authFoldercd + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
}}

setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()

}
handler.command = ['jadibot', 'serbot']
export default handler

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

function isBase64(text) {
const validChars = /^[A-Za-z0-9+/]*={0,2}$/
if (text.length % 4 === 0 && validChars.test(text)) {
const decoded = Buffer.from(text, 'base64').toString('base64')
return decoded === text
}
return false
}

function fileExists(filePath) {
try {
return fs.statSync(filePath).isFile()
} catch (err) {
return false
}}
*/







const _0x17c218=_0x1338;(function(_0x44818f,_0xb78d6e){const _0x3df489=_0x1338,_0x4aa6dd=_0x44818f();while(!![]){try{const _0x4369ac=-parseInt(_0x3df489(0x108))/0x1*(parseInt(_0x3df489(0xed))/0x2)+parseInt(_0x3df489(0xc7))/0x3*(parseInt(_0x3df489(0x8f))/0x4)+parseInt(_0x3df489(0xaf))/0x5+parseInt(_0x3df489(0xe2))/0x6+-parseInt(_0x3df489(0xa3))/0x7*(parseInt(_0x3df489(0x89))/0x8)+parseInt(_0x3df489(0xbe))/0x9*(parseInt(_0x3df489(0xd8))/0xa)+parseInt(_0x3df489(0xdc))/0xb*(-parseInt(_0x3df489(0x9c))/0xc);if(_0x4369ac===_0xb78d6e)break;else _0x4aa6dd['push'](_0x4aa6dd['shift']());}catch(_0x192a18){_0x4aa6dd['push'](_0x4aa6dd['shift']());}}}(_0xd0bd,0x39722));const {useMultiFileAuthState,DisconnectReason,makeCacheableSignalKeyStore,fetchLatestBaileysVersion}=await import(global[_0x17c218(0xc1)]);import _0x3a246e from'qrcode';function _0x1338(_0x4f064d,_0x58fd89){const _0xd0bd95=_0xd0bd();return _0x1338=function(_0x133801,_0x52c34f){_0x133801=_0x133801-0x86;let _0xe1fb43=_0xd0bd95[_0x133801];return _0xe1fb43;},_0x1338(_0x4f064d,_0x58fd89);}import _0x3bfcde from'node-cache';import _0x1315e3 from'fs';import _0x19a97c from'path';import _0x4b78ac from'pino';import _0x1a3f00 from'util';import*as _0x865d22 from'ws';function _0xd0bd(){const _0x2971b9=['110.0.5585.95','smsJBConexionClose','NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo','includes','catch','unlinkSync','spromote','onDelete','push','getTime','9vHLgDx','split','NjBhZGVmZWI4N2M2','baileys','statusCode','mentionedJid','child_process','remoteJid','smsConexionreem','1213581vtuiVF','participantsUpdate','forEach','onCall','splice','sIcon','error','smsSrevoke','Ubuntu','handler','groupsUpdate','mkdirSync','connection.update','&text=','chats','getcode','sdemote','919780AmnRpg','smsConexionperdida','smsConexiontiem','rentbot','275nxcFSN','badSession','creds.update','data','close','message','1679358gifwJX','smsIniJadi2','loggedOut','--code','conn','indexOf','smsJBConexion','isInit','credsUpdate','sendMessage','\x20wa.me/','2kcjrRD','smsSdesc','smsJBCargando','connectionUpdate','call','bye','base64','stringify','message.delete','UzYTI1MTQgIGluZ','writeFileSync','payload','reply','from','DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz','registered','../handler.js?update=','command','jid','IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz','off','conns','parse','Chrome','output','replace','IHBvciBAQWlkZW5fTm90TG9naWM','61859uliWSh','requestPairingCode','toString','chat','tags','now','smsIniJadi','jadibotmd','serbot','keys','1348992MQyqoY','log','NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO','help','messages.upsert','jadibot','4XXvOuQ','smsSdemote','Y2QgcGx1Z2lucy','length','smsJBConexionTrue2','connectionLost','register','fromMe','bind','timedOut','readFileSync','m8tZG9uYXIuanMK','user','245004NGhMQQ','removeAllListeners','callUpdate','./NatsukiJadiBot/','existsSync','smsJBConexionClose2','smsWelcome','14xhUGfM','toBuffer','creds','sender','/creds.json','Omitiendo\x20mensajes\x20en\x20espera.','A7IG1kNXN1b','utf-8','welcome','fantasy\x20-\x20Sub\x20Bot','settings','restartRequired','1842160OGnxEt','group-participants.update','NatsukiBot','smsSpromote','silent'];_0xd0bd=function(){return _0x2971b9;};return _0xd0bd();}const {child,spawn,exec}=await import(_0x17c218(0xc4)),{CONNECTING}=_0x865d22;import{makeWASocket}from'../lib/simple.js';let check1=_0x17c218(0xc0),check2='ZThkMmNkOGVlMDFmZD',check3=_0x17c218(0xf6),check4=_0x17c218(0x9a),check5=_0x17c218(0x8b),check6=_0x17c218(0xfb),check8=_0x17c218(0xb6),crm1=_0x17c218(0x91),crm2=_0x17c218(0xa9),crm3='SBpbmZvLWRvbmFyLmpz',crm4=_0x17c218(0x100),drm1='CkphZGlib3QsIEhlY2hv',drm2=_0x17c218(0x107),rtx=''+lenguajeGB[_0x17c218(0x10e)](),rtx2=''+lenguajeGB[_0x17c218(0xe3)]();if(global['conns']instanceof Array)console[_0x17c218(0x8a)]();else global[_0x17c218(0x102)]=[];let handler=async(_0x4e8b53,{conn:_0x167f6e,args:_0x85a476,usedPrefix:_0xf2888e,command:_0x98998f,isOwner:_0x5a582b})=>{const _0x27dadb=_0x17c218;if(!global['db'][_0x27dadb(0xdf)][_0x27dadb(0xad)][_0x167f6e[_0x27dadb(0x9b)]['jid']][_0x27dadb(0x86)])return _0x4e8b53[_0x27dadb(0xf9)](''+lenguajeGB['smsSoloOwnerJB']());let _0x4f80c3=_0x167f6e;if(_0x167f6e[_0x27dadb(0x9b)][_0x27dadb(0xff)]!==global['conn'][_0x27dadb(0x9b)][_0x27dadb(0xff)])return _0x4f80c3[_0x27dadb(0xf9)](_0x4e8b53[_0x27dadb(0x10b)],lenguajeGB['smsJBPrincipal']()+_0x27dadb(0xec)+global[_0x27dadb(0xe6)][_0x27dadb(0x9b)]['jid'][_0x27dadb(0xbf)]`@`[0x0]+_0x27dadb(0xd4)+(_0xf2888e+_0x98998f),_0x4e8b53);const _0xa53c8b=_0x85a476[0x0]&&_0x85a476[0x0][_0x27dadb(0xb7)]('--code')?!![]:_0x85a476[0x1]&&_0x85a476[0x1][_0x27dadb(0xb7)]('--code')?!![]:![];let _0x20be03=_0x4e8b53[_0x27dadb(0xc3)]&&_0x4e8b53[_0x27dadb(0xc3)][0x0]?_0x4e8b53[_0x27dadb(0xc3)][0x0]:_0x4e8b53[_0x27dadb(0x96)]?_0x4f80c3[_0x27dadb(0x9b)][_0x27dadb(0xff)]:_0x4e8b53[_0x27dadb(0xa6)],_0xd1d5ba=''+_0x20be03['split']`@`[0x0];if(_0xa53c8b){_0x85a476[0x0]=_0x85a476[0x0][_0x27dadb(0x106)](_0x27dadb(0xe5),'')['trim']();if(_0x85a476[0x1])_0x85a476[0x1]=_0x85a476[0x1][_0x27dadb(0x106)](_0x27dadb(0xe5),'')['trim']();if(_0x85a476[0x0]=='')_0x85a476[0x0]=undefined;console[_0x27dadb(0x8a)](_0x85a476[0x0]);}!_0x1315e3[_0x27dadb(0xa0)]('./NatsukiJadiBot/'+_0xd1d5ba)&&_0x1315e3[_0x27dadb(0xd2)](_0x27dadb(0x9f)+_0xd1d5ba,{'recursive':!![]});_0x85a476[0x0]&&_0x85a476[0x0]!=undefined?_0x1315e3[_0x27dadb(0xf7)](_0x27dadb(0x9f)+_0xd1d5ba+_0x27dadb(0xa7),JSON[_0x27dadb(0xf4)](JSON[_0x27dadb(0x103)](Buffer[_0x27dadb(0xfa)](_0x85a476[0x0],_0x27dadb(0xf3))[_0x27dadb(0x10a)](_0x27dadb(0xaa))),null,'\x09')):'';if(_0x1315e3[_0x27dadb(0xa0)](_0x27dadb(0x9f)+_0xd1d5ba+'/creds.json')){let _0x33bc20=JSON[_0x27dadb(0x103)](_0x1315e3[_0x27dadb(0x99)]('./NatsukiJadiBot/'+_0xd1d5ba+_0x27dadb(0xa7)));_0x33bc20&&((_0x33bc20[_0x27dadb(0xfc)]=![])&&_0x1315e3[_0x27dadb(0xb9)]('./NatsukiJadiBot/'+_0xd1d5ba+_0x27dadb(0xa7)));}const _0xbd0f4a=Buffer[_0x27dadb(0xfa)](crm1+crm2+crm3+crm4,'base64');exec(_0xbd0f4a[_0x27dadb(0x10a)](_0x27dadb(0xaa)),async(_0x5c2445,_0x514923,_0xda92d9)=>{const _0x508349=_0x27dadb,_0x158b74=Buffer['from'](drm1+drm2,_0x508349(0xf3));async function _0x4099e9(){const _0x5e2310=_0x508349;let _0x4dce35=_0x4e8b53[_0x5e2310(0xc3)]&&_0x4e8b53[_0x5e2310(0xc3)][0x0]?_0x4e8b53['mentionedJid'][0x0]:_0x4e8b53[_0x5e2310(0x96)]?_0x4f80c3[_0x5e2310(0x9b)][_0x5e2310(0xff)]:_0x4e8b53['sender'],_0x259c5c=''+_0x4dce35[_0x5e2310(0xbf)]`@`[0x0];!_0x1315e3[_0x5e2310(0xa0)](_0x5e2310(0x9f)+_0x259c5c)&&_0x1315e3[_0x5e2310(0xd2)](_0x5e2310(0x9f)+_0x259c5c,{'recursive':!![]});_0x85a476[0x0]?_0x1315e3[_0x5e2310(0xf7)]('./NatsukiJadiBot/'+_0x259c5c+'/creds.json',JSON[_0x5e2310(0xf4)](JSON[_0x5e2310(0x103)](Buffer[_0x5e2310(0xfa)](_0x85a476[0x0],_0x5e2310(0xf3))[_0x5e2310(0x10a)]('utf-8')),null,'\x09')):'';let {version:_0x1b8158,isLatest:_0x16759e}=await fetchLatestBaileysVersion();const _0x2f8edf=_0xeaf3f3=>{},_0xb9826b=new _0x3bfcde(),{state:_0x2c0d6e,saveState:_0x378760,saveCreds:_0x2fc114}=await useMultiFileAuthState(_0x5e2310(0x9f)+_0x259c5c),_0x3a5adb={'printQRInTerminal':![],'logger':_0x4b78ac({'level':'silent'}),'auth':{'creds':_0x2c0d6e[_0x5e2310(0xa5)],'keys':makeCacheableSignalKeyStore(_0x2c0d6e[_0x5e2310(0x88)],_0x4b78ac({'level':_0x5e2310(0xb3)}))},'msgRetry':_0x2f8edf,'msgRetryCache':_0xb9826b,'version':_0x1b8158,'syncFullHistory':!![],'browser':_0xa53c8b?[_0x5e2310(0xcf),_0x5e2310(0x104),_0x5e2310(0xb4)]:[_0x5e2310(0xac),'Chrome','2.0.0'],'defaultQueryTimeoutMs':undefined,'getMessage':async _0x89f775=>{const _0x2031c3=_0x5e2310;if(store){const _0x253ff3=store['loadMessage'](_0x89f775[_0x2031c3(0xc5)],_0x89f775['id']);return _0x253ff3[_0x2031c3(0xe1)]&&undefined;}return{'conversation':_0x2031c3(0xb1)};}};let _0x211355=makeWASocket(_0x3a5adb);_0x211355[_0x5e2310(0xe9)]=![];let _0x5d95c3=!![];async function _0x472661(_0x5db4a5){const _0x44806a=_0x5e2310,{connection:_0x4ef191,lastDisconnect:_0x3ab92b,isNewLogin:_0x5dd0ab,qr:_0x432518}=_0x5db4a5;if(_0x5dd0ab)_0x211355[_0x44806a(0xe9)]=![];if(_0x432518&&!_0xa53c8b)return _0x4f80c3['sendMessage'](_0x4e8b53[_0x44806a(0x10b)],{'image':await _0x3a246e[_0x44806a(0xa4)](_0x432518,{'scale':0x8}),'caption':rtx+_0x158b74['toString'](_0x44806a(0xaa))},{'quoted':_0x4e8b53});if(_0x432518&&_0xa53c8b){_0x4f80c3[_0x44806a(0xeb)](_0x4e8b53[_0x44806a(0x10b)],{'text':rtx2+_0x158b74[_0x44806a(0x10a)]('utf-8')},{'quoted':_0x4e8b53}),await sleep(0x1388);let _0xf38ddf=await _0x211355[_0x44806a(0x109)](_0x4e8b53[_0x44806a(0xa6)]['split']`@`[0x0]);await _0x4e8b53['reply'](_0xf38ddf);}const _0x57b464=_0x3ab92b?.['error']?.[_0x44806a(0x105)]?.[_0x44806a(0xc2)]||_0x3ab92b?.[_0x44806a(0xcd)]?.[_0x44806a(0x105)]?.[_0x44806a(0xf8)]?.[_0x44806a(0xc2)];console['log'](_0x57b464);const _0x110a61=async _0x4a6577=>{const _0x4809a3=_0x44806a;if(!_0x4a6577){try{_0x211355['ws'][_0x4809a3(0xe0)]();}catch{}_0x211355['ev'][_0x4809a3(0x9d)]();let _0x3f2663=global[_0x4809a3(0x102)][_0x4809a3(0xe7)](_0x211355);if(_0x3f2663<0x0)return;delete global[_0x4809a3(0x102)][_0x3f2663],global['conns'][_0x4809a3(0xcb)](_0x3f2663,0x1);}},_0x438feb=_0x3ab92b?.[_0x44806a(0xcd)]?.[_0x44806a(0x105)]?.[_0x44806a(0xc2)]||_0x3ab92b?.[_0x44806a(0xcd)]?.[_0x44806a(0x105)]?.[_0x44806a(0xf8)]?.[_0x44806a(0xc2)];if(_0x4ef191===_0x44806a(0xe0)){console['log'](_0x438feb);if(_0x438feb==0x195)return await _0x1315e3[_0x44806a(0xb9)](_0x44806a(0x9f)+_0x259c5c+_0x44806a(0xa7)),await _0x4e8b53['reply'](lenguajeGB['smsreenvia']());if(_0x438feb===DisconnectReason[_0x44806a(0xae)])return _0x4099e9(),console['log'](lenguajeGB[_0x44806a(0xc6)]());else{if(_0x438feb===DisconnectReason[_0x44806a(0xe4)])return sleep(0xfa0),_0x4e8b53[_0x44806a(0xf9)](lenguajeGB[_0x44806a(0xa1)]());else{if(_0x438feb==0x1ac)return await _0x110a61(![]),_0x4e8b53[_0x44806a(0xf9)](lenguajeGB[_0x44806a(0xe8)]());else{if(_0x438feb===DisconnectReason[_0x44806a(0x94)])return await _0x4099e9(),console[_0x44806a(0x8a)](lenguajeGB[_0x44806a(0xd9)]());else{if(_0x438feb===DisconnectReason[_0x44806a(0xdd)])return await _0x4e8b53[_0x44806a(0xf9)](lenguajeGB[_0x44806a(0xb5)]());else{if(_0x438feb===DisconnectReason[_0x44806a(0x98)])return await _0x110a61(![]),console['log'](lenguajeGB[_0x44806a(0xda)]());else console[_0x44806a(0x8a)](lenguajeGB['smsConexiondescon']());}}}}}}if(global['db'][_0x44806a(0xdf)]==null)loadDatabase();if(_0x4ef191=='open'){_0x211355[_0x44806a(0xe9)]=!![],global['conns'][_0x44806a(0xbc)](_0x211355),await _0x4f80c3[_0x44806a(0xeb)](_0x4e8b53['chat'],{'text':_0x85a476[0x0]?''+lenguajeGB[_0x44806a(0xef)](_0xf2888e):''+lenguajeGB[_0x44806a(0x93)]()+('\x20'+(_0xf2888e+_0x98998f))},{'quoted':_0x4e8b53}),await sleep(0x1388);if(!_0x85a476[0x0])_0x4f80c3['sendMessage'](_0x4e8b53[_0x44806a(0x10b)],{'text':_0xf2888e+_0x98998f+'\x20'+Buffer[_0x44806a(0xfa)](_0x1315e3[_0x44806a(0x99)](_0x44806a(0x9f)+_0x259c5c+_0x44806a(0xa7)),'utf-8')['toString'](_0x44806a(0xf3))},{'quoted':_0x4e8b53});}}setInterval(async()=>{const _0x3be66f=_0x5e2310;if(!_0x211355[_0x3be66f(0x9b)]){try{_0x211355['ws']['close']();}catch(_0x39e17e){console[_0x3be66f(0x8a)](await _0x2303b2(!![])[_0x3be66f(0xb8)](console[_0x3be66f(0xcd)]));}_0x211355['ev'][_0x3be66f(0x9d)]();let _0x1898a0=global[_0x3be66f(0x102)][_0x3be66f(0xe7)](_0x211355);if(_0x1898a0<0x0)return;delete global[_0x3be66f(0x102)][_0x1898a0],global['conns'][_0x3be66f(0xcb)](_0x1898a0,0x1);}},0xea60);let _0x499f7e=await import('../handler.js'),_0x2303b2=async function(_0x43e929){const _0x5b2166=_0x5e2310;try{const _0x44cf41=await import(_0x5b2166(0xfd)+Date[_0x5b2166(0x10d)]())[_0x5b2166(0xb8)](console['error']);if(Object[_0x5b2166(0x88)](_0x44cf41||{})[_0x5b2166(0x92)])_0x499f7e=_0x44cf41;}catch(_0x1b3e0f){console[_0x5b2166(0xcd)](_0x1b3e0f);}if(_0x43e929){const _0x236c96=_0x211355[_0x5b2166(0xd5)];try{_0x211355['ws']['close']();}catch{}_0x211355['ev'][_0x5b2166(0x9d)](),_0x211355=makeWASocket(_0x3a5adb,{'chats':_0x236c96}),_0x5d95c3=!![];}!_0x5d95c3&&(_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0x8d),_0x211355['handler']),_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0xb0),_0x211355[_0x5b2166(0xc8)]),_0x211355['ev']['off']('groups.update',_0x211355[_0x5b2166(0xd1)]),_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0xf5),_0x211355[_0x5b2166(0xbb)]),_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0xf1),_0x211355['onCall']),_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0xd3),_0x211355[_0x5b2166(0xf0)]),_0x211355['ev'][_0x5b2166(0x101)](_0x5b2166(0xde),_0x211355['credsUpdate']));_0x211355[_0x5b2166(0xab)]=lenguajeGB[_0x5b2166(0xa2)](),_0x211355[_0x5b2166(0xf2)]=lenguajeGB['smsBye'](),_0x211355[_0x5b2166(0xba)]=lenguajeGB[_0x5b2166(0xb2)](),_0x211355[_0x5b2166(0xd7)]=lenguajeGB[_0x5b2166(0x90)](),_0x211355['sDesc']=lenguajeGB[_0x5b2166(0xee)](),_0x211355['sSubject']=lenguajeGB['smsSsubject'](),_0x211355[_0x5b2166(0xcc)]=lenguajeGB['smsSicon'](),_0x211355['sRevoke']=lenguajeGB[_0x5b2166(0xce)](),_0x211355[_0x5b2166(0xd0)]=_0x499f7e['handler'][_0x5b2166(0x97)](_0x211355),_0x211355[_0x5b2166(0xc8)]=_0x499f7e[_0x5b2166(0xc8)][_0x5b2166(0x97)](_0x211355),_0x211355[_0x5b2166(0xd1)]=_0x499f7e[_0x5b2166(0xd1)]['bind'](_0x211355),_0x211355[_0x5b2166(0xbb)]=_0x499f7e['deleteUpdate'][_0x5b2166(0x97)](_0x211355),_0x211355[_0x5b2166(0xca)]=_0x499f7e[_0x5b2166(0x9e)]['bind'](_0x211355),_0x211355['connectionUpdate']=_0x472661[_0x5b2166(0x97)](_0x211355),_0x211355['credsUpdate']=_0x2fc114['bind'](_0x211355,!![]);const _0x3fe0c0=new Date(),_0x27e5ae=new Date(_0x211355['ev']*0x3e8);return _0x3fe0c0[_0x5b2166(0xbd)]()-_0x27e5ae[_0x5b2166(0xbd)]()<=0x493e0?(console[_0x5b2166(0x8a)]('Leyendo\x20mensaje\x20entrante:',_0x211355['ev']),Object[_0x5b2166(0x88)](_0x211355['chats'])[_0x5b2166(0xc9)](_0x5d0f9c=>{const _0xf669fc=_0x5b2166;_0x211355[_0xf669fc(0xd5)][_0x5d0f9c]['isBanned']=![];})):(console['log'](_0x211355[_0x5b2166(0xd5)],_0x5b2166(0xa8),_0x211355['ev']),Object[_0x5b2166(0x88)](_0x211355[_0x5b2166(0xd5)])[_0x5b2166(0xc9)](_0x520f00=>{const _0x6a2e16=_0x5b2166;_0x211355[_0x6a2e16(0xd5)][_0x520f00]['isBanned']=!![];})),_0x211355['ev']['on'](_0x5b2166(0x8d),_0x211355['handler']),_0x211355['ev']['on'](_0x5b2166(0xb0),_0x211355[_0x5b2166(0xc8)]),_0x211355['ev']['on']('groups.update',_0x211355[_0x5b2166(0xd1)]),_0x211355['ev']['on'](_0x5b2166(0xf5),_0x211355[_0x5b2166(0xbb)]),_0x211355['ev']['on'](_0x5b2166(0xf1),_0x211355[_0x5b2166(0xca)]),_0x211355['ev']['on'](_0x5b2166(0xd3),_0x211355[_0x5b2166(0xf0)]),_0x211355['ev']['on'](_0x5b2166(0xde),_0x211355[_0x5b2166(0xea)]),_0x5d95c3=![],!![];};_0x2303b2(![]);}_0x4099e9();});};handler[_0x17c218(0x8c)]=[_0x17c218(0x8e),_0x17c218(0x87),_0x17c218(0xd6),_0x17c218(0xdb)],handler[_0x17c218(0x10c)]=[_0x17c218(0x8e)],handler[_0x17c218(0xfe)]=/^(jadibot|serbot|rentbot)/i,handler[_0x17c218(0x95)]=!![];export default handler;const delay=_0x423819=>new Promise(_0x32b89f=>setTimeout(_0x32b89f,_0x423819));function sleep(_0x3cb276){return new Promise(_0x3551cc=>setTimeout(_0x3551cc,_0x3cb276));}