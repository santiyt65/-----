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