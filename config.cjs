// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU080UWN4V2loQjFGZ3FGNGJlRGdPYkNaak81c2p6czNBb05Gd0FxTzBHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemJSVlZiL2lzVkJDTW5UdzFQa1JYUkRMWjhnZkU2NU5ubDlXQ1loblNpRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSE5oSXQ2bDc2RXV5VEFzWmhvcjJvbmswTnVMZm4rNkJ2S3ZndndpL1gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Z1IwOFczTGpReFFEOUJKQzlwa21mMDJqNEpWcWY0R3BsQWdGSncwMXdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BQVZ5TVBCdDh2aXZXY2RmcGlTZ21DYk5TMURYeXliYXlqZVFaVW5BbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlXN1E2Y3N1ZU1WTkc3YmppYVVNeDhxZ2RCdW0xSHVyVUhISVFxd2Z3VjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtzZkF1VG84L3MvUFJYOWtpQ0N3a1VENEU2RlV4MFptays5VUladGIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTZzaUhLWExBZEZhWmhXOGdYRkdtRm5rZXpZNFdIZ0NYOWpMeEhYMFlIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV4Smx3eDB6VDdMRmE4R3FTcDBpTlZ3NWdTY2RpditMc0o4NGF5eWQzSjdzYnBPZkV6M1Z5aU9TRmlQbS9HblZxRGNCejJGQmwwT0hMR1Q5bTA2bUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJackdFbm4rZm1XNGF5QklUYzFDVzdLK2FRQ3RQNTF6UGhsclZxM3dtcWVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3ODYyMDk2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRDVFMUE4NDlGQ0Q0NzZGMTYzNzRBQkYwODU1QUI0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3MjQwNzQ2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Nzg2MjA5NjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDQ2RTdDODZBNkZFRTAxNDUzQ0E5NkFGM0IxRTgwNkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzI0MDc0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzc4NjIwOTYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJFRkYwMTQ4NTREMjI5NDdENDk5RUU5NTYyMjZEMTM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDcyNDA3NTd9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhDM1A5UXFaVEFhQnVVVkFlOU5wLXciLCJwaG9uZUlkIjoiNmY0NGEyM2ItMmZhOS00MTBiLWI3MGEtY2RkYTRmMmM2NmUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1UMXVoTU1rUkNaUGRrWUY2bjlhODFXZ3YzVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUUZpc3ZhOXhFSElVRmh0dUNtUFNGL3R2Y1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0RHUTNCV1ciLCJtZSI6eyJpZCI6IjI1NDc3ODYyMDk2MToxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLimIXhjq/imLzvuI7ihJLimLzvuI7ihJLinKnihLDinKvihJXimasifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPSnYvUUZFSnVPazhFR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJkd2pldUpqTG9tQm81QmovOU02Tm5LdzQvazlma0tCMTNXNURvYXZpbDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxZRDVITUFmRHZGODJNUlo4azF5NWdMbWNrM2grVU1pa2I5NUw3TXFwZkRIUlhJdWRYNjJJdm0xTGNzWnhzc1lMeElyVExRMkdPZUM3cDNGbE5rckJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiK09nUm9xMDhFSXR5cVQ1VTVHbmhGbXJiaTRNM29YRFcxUjIvTkVPN3BkbE5rdVhwREFuenIxSlRNN29VOXZrdGNpMXhFMG5TSElnZGh6VlMxajNDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3ODYyMDk2MToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWGNJM3JpWXk2SmdhT1FZLy9UT2paeXNPUDVQWDVDZ2RkMXVRNkdyNHBmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3MjQwNzQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlsLyJ9",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || ' Ꭿℒℒℰℕ ℐЅ ᏇᎯTℂℋℐℕᎶ👀 ℐℕ ᎶℋᎾЅT ℳᎾⅅℰ👻 ',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "private",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254778620961",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
