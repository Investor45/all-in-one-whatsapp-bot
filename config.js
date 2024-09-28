const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "237670217260" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348110572387";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_47_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2N0IrZWNrVzhHbGV2OHV2Nm53QlJOcnFGdFNVME9DQUxHdFJjbTloSHlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4MjRBZmZhOFNGMkxydkdCc25vMEt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyZDI2YTBhLTNiMDgtNDU1NC04NDEyLTg1YzExYWNjZDgyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDUsXG4gICAgICAxOTMsXG4gICAgICA3NSxcbiAgICAgIDU0LFxuICAgICAgOTIsXG4gICAgICAxMTgsXG4gICAgICA0OCxcbiAgICAgIDEwNCxcbiAgICAgIDIxNSxcbiAgICAgIDIxNCxcbiAgICAgIDE4NCxcbiAgICAgIDIwMSxcbiAgICAgIDgzLFxuICAgICAgNzgsXG4gICAgICA5OCxcbiAgICAgIDE4NyxcbiAgICAgIDEzMCxcbiAgICAgIDEyMCxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMzMsXG4gICAgICA4NSxcbiAgICAgIDcsXG4gICAgICAyMTYsXG4gICAgICA0NixcbiAgICAgIDIyMixcbiAgICAgIDI4LFxuICAgICAgNDQsXG4gICAgICAyMDMsXG4gICAgICAxODcsXG4gICAgICAxNDEsXG4gICAgICAyNDMsXG4gICAgICAxNTYsXG4gICAgICAzNyxcbiAgICAgIDczLFxuICAgICAgNTEsXG4gICAgICAyNSxcbiAgICAgIDE5NSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQVDNSRE5RWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjcwMjE3MjYwOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCiS0VOVEVDSOKAoiBBLkl+XCIsXG4gICAgXCJsaWRcIjogXCIyNDQ2NTAyOTYyMjE3NDE6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlodWdRUTFMRGV0d1lZWmlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbkZRZ3Q4Wm5qdjdyM3pKR2JueUlRUzdKOGdYd1FCMjFLTW0xWmV0VlVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImQ3S1dYcSthMGJUQ1hBSzdFai9vbVR2Z2JCbWkvWmFYYXhnTUFINzhJQVVhTTZEWDh2VEJkUWhSRFplV0tQcFU2WExrcEJKOUdTb0FtV2dUNThMc0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFSOU1CRkZ4Q09YMytQZzc0NTl2blJDemRKOFAvcWEvbk5VZjNZRUhuaGhHbWJaRk1kelJrMi9aQW5uRXZvZFY2Y0NrREFCMXRBMVJBQnZkVEE2eEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY3MDIxNzI2MDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzUwMjQyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxYdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFh0Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
