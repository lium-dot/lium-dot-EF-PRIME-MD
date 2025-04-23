// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JKMEY5U2RKSlQ3dWs4WVlJU01TU3ZhbnhJbzBjeUpXNk9qQnh2TDJVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXd3THlOcUIwU3JNYW44TU5QU04vSGlHT0xxN2N6RVZCYkpSN2M5S2F5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTEZnN3M0ekVmZFRTK1ZOeWhRcHROcmdDWTd4VkEvc2hlZnorS2xaaW5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMR0NEckM1Sit2MWtjeGZhUENYaG8wVXgwMTNuemJBdUw2ZzVxMEJQMmdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEeXhwVGgxdGdNOGRublAzZDRyRzNQRWdhak42UFh5MVdDT25iSzRIRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllmZjFZSnBSTTc5TXZTeHpYaFQrdkdHazVhOG1LdHFNMkNVbk8zdjhVSGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVA2WStvOERLYW9zdkVUcVRWbXBobGt5WVJlQjNURVZxenFqSlUxQVYwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHJhSTVqTjRLclRMNnZMVkQyZUVFbnV6RElPaExvWFFsVmJqVXFEdGl5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJUUlVBc25GeEN4QzRhUFM3eGdwbG1iakwraWhHSFlLeklPZ0d5c1ZqdGZSbGNRQ3dwK1hIbjZWZ3FMQUg3UEFiWXJ5aVR0eUVrakY1elF2ZTVvQWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJObnhGTGtnaWVVVXc3cXByUTZjcXIwS3NWN0w3aGhHWmdnbmZsby9jcFM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODQ0MzExMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMTA3MEJDRDQzRTU5NkFGNUQ1RDIxNUNEM0MxMEMyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NDM2MDQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDM0RTcyQTY0Q0RGMjM2MzQ1QkUxQTE4MEQ4MjFDMTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTQzNjA0NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic09TT3prOVpSMWVJcklCYVltUVZkZyIsInBob25lSWQiOiJmODU4MmRlMy01ZTQ3LTRlN2MtYTFmOC04YTQ3MWM3YjcwNWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2MySVRaZGhKbjFRaSt6T25Jc0NacVBMdXhjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoYnBFbHUvR0R5QXgvUTdKSk9waGtZSEZlZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZMjRIQ01TWSIsIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjY5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKYheGOr+KYvO+4juKEkuKYvO+4juKEkuKcqeKEsOKcq+KEleKZqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGFsb004Q0VQTDZwTUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3lFWWh1Wk1hSG1uck9RUkQvU0g4TDBZUWYzZGhXNEk0U3JrcDJOVFBrTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR015aHFsYkZoQUxKZXFjZTc4YnMwMS9lODEwWDM5VkF2NEJIaFRWb2taWG4rZXdIQ1dTZk5oSDZLK0grQ1ZOa0NRMCtDZkpBcHR3Ly84QzBOYnZoQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Imh2VVFDUWdVN085SUtoQlArcGZpb0htRWI2SkxENmF6aGM4dGpuQzlOd2JTc3RFeGZoSERsTVoxS2RnRFIxeVI1U01XajBaZCtuYXRrWTlJeVFicWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4NDQzMTExOjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzaEdJYm1UR2g1cDZ6a0VRLzBoL0M5R0VIOTNZVnVDT0VxNUtkalV6NUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU0MzYwMzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFZPIn0=",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "265993702468",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
