const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349067082699";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_59_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNWQVV0N0l4dldGemNtWE9odFlxdm9VNmxkMi9FYjRtc0JET0s0d0lpOTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2NzA4MjY5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEMyQjAyN0FENzVFMEY4RUU2MTIyRkQ2NUFFRjQ4MkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTg1OTg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR6aDgwdXlWVGFHeEpGTkRiNndtLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzdmNTY3ZTYtOWU4Yy00ZDc4LWE4NWYtNzYzYzVjNTNlMWUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDI0OSxcbiAgICAgIDE3OSxcbiAgICAgIDIsXG4gICAgICAyMjMsXG4gICAgICAyMTQsXG4gICAgICAxMTAsXG4gICAgICAxMzMsXG4gICAgICAyMDUsXG4gICAgICA5NyxcbiAgICAgIDIyNCxcbiAgICAgIDE2MSxcbiAgICAgIDExMCxcbiAgICAgIDU5LFxuICAgICAgODcsXG4gICAgICAxMzYsXG4gICAgICAxOSxcbiAgICAgIDI1NSxcbiAgICAgIDE4LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNzYsXG4gICAgICAyNDUsXG4gICAgICAyMTMsXG4gICAgICAyMDYsXG4gICAgICAyNDgsXG4gICAgICAxMyxcbiAgICAgIDExMCxcbiAgICAgIDExLFxuICAgICAgNSxcbiAgICAgIDUxLFxuICAgICAgMTQ1LFxuICAgICAgMjQzLFxuICAgICAgMjI0LFxuICAgICAgNjYsXG4gICAgICA3OCxcbiAgICAgIDU1LFxuICAgICAgMTIwLFxuICAgICAgMjksXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNKQ01COFFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY3MDgyNjk5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUb21teSBDb25jZXB0XCIsXG4gICAgXCJsaWRcIjogXCI1NTY2Mjk2MDcxMzc2NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPd3A3RUZFUGp4bWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTZhMm15NFUyOGU1NGNOcTFja3hBT0laSlNSa2F4UFozOXhUN0Y1K2FoWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMUVhMYVFPRTRCSHNPTmFwS1BjdXd5MDRUYlc4dnNFVkJwTHJRdmg5cXVZS1NYTUNpbzE3YXprOGNhTms1UjluTlBVb2REZll2VjREdmh4VTA0QUpBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyZFowdGJ0aGJPL1FjRFZ3ZEZmb2M2YUtwQkF0dWN3cGhRRFpubmVqRGZGMEFUQ3hXR29NSVVjUk5GTi9vWU9HMWxOVDlLTVZXcGlkVjNudGozNDlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY3MDgyNjk5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE4NTk4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
