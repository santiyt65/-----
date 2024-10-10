import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/5213339577315'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/5213332552253'
global.namechannel = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'
global.namechannel2 = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'
global.namecomu = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'
global.namecomu2 = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'
global.colab1 = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'
global.colab2 = 'ᵀᴴᴱ_ᵂᵃᵗᶜʰᵐᵉⁿ⁻ᵀᵉᵃᵐ⁷ᵘ⁷'

//Reacciones De Comandos.!
global.rwait = '⏱️'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de LuffyBot
//mensaje en espera
//Enlaces
var canal = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u' 
var canal2 = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u'  
var git = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u' 
var youtube = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u' 
var github = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u' 
var facebook = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u' 
let tiktok = 'https://whatsapp.com/channel/0029VaMi8cn9cDDQaoeY7P3u'

global.redes = [canal, canal2, git, youtube, github, facebook, tiktok].getRandom()

global.canales = [canal, canal2].getRandom()

//Imagen
//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.icono = [ 
'https://i.ibb.co/QvrnHvr/GTR33-BOT3.jpg'
].getRandom()

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363229122990393@newsletter",
serverMessageId: 100,
newsletterName: 'JadiBot H Bot EDGAR',
},
externalAdReply: { 
showAdAttribution: true,
title: packname,
body: '¡Super Team Bot De WhatsApp!',
mediaUrl: null,
description: null,
previewType: "PHOTO",
thumbnailUrl: icono,
sourceUrl: redes,
mediaType: 1,
renderLargerThumbnail: false
},
},
}}

export default handler
