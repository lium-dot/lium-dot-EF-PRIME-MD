// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdkVks3a3gwR1ZTa0hKcmFxdGR3QmtOYXQ0OTNjYks4QjhpRWtMTittST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialRxUkVndmNRQ3pHcGxFekZlTFFPdHkvZkVESEdtWEJ6YkxvQXdhN1RTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRUZHMndsZjJtZVJKNWc3YlRHcUdHREpXdmFoZXZseVJ3TVNnb3E0TjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRzFYYjNCL0JoRnVNN213SzQzWG9HNk1lazJRdmRWbzVScW04TFdOY1Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDVGw3SXFCMWphbnFWekxhM2VKbmtQVDUxOVRyNk40cXBRdnZ6eVFibGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNYUR3RFNjQ25aZjNIQytJeWp6aUVuV05jK3MwZytPR1JEdmxtblAxaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktvdzZCNjIrOHUwdDhycjkwVjNLdDV6QlR6ejFlSTUyWW90MTFHeWZVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHRTMGNkcDhHd0FhWWF6QjduRzhIT2dwOUZkc2lxbU5lSXZrcTY5ZTFWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHT3pUSlg0VGN4UmJUQzA1SzB0ckZCMmhXNEx0cW9MbTZGUmNPZ1VWUUpxVThnZWNtcFpuM0UxYWRoTGNsRWQySWhqVTZxc1dKTlpkNmZVVzFWZGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IkUzRjZ0Y3pUbW1lZGVWN2VJaEhiQUQvUGJhcUFuMS9Qem1YM0lINU9RV1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU4NDQzMTExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ5NUIyOTY2NEM5NDM4NTFDRDFGQTZFMzE3QUJGQkNEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDcyNDMzMTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikk0MmVOTTVyUXJHUFNrR2ppX295cFEiLCJwaG9uZUlkIjoiNmU4ZWVhMWQtZTY2Yy00N2U0LWE5YmUtZDgzZDJjYTZkMDM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVlNW9qNnZzYkRTZWl6ejZZZUpvbit6Mkw1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvU2JrL2NOMXNabzdDTkVMeUtQRkVIcXhxWUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0gxSE41QUQiLCJtZSI6eyJpZCI6IjI1NDc1ODQ0MzExMTo5NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLinJ7vuI7imIXhjq/imLzvuI7ihJLimLzvuI7ihJLinKnihLDinKvihJXimavimKDvuI7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IUjhva0VFSktpazhFR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhSN0JnS3hidk9ON0dualNWWFJjTnNFM0N6Q0ZsMWhnbWQ1OE9Ha3pSbGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVvUHRSSFRSNXc5djJzRDY0UDhCeWR2T3F4d0dyZmx0N3BwOXBrTnRmM1YydGs5dGZjZHVIZzhncWtBVi9UYjNLcnpjb05KelN2alV0MmVtNUVHN0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZdDNjYlh0STF6U2JTNzlSOUc0RUNKM3ozem8yOUNHUnlPU2l6blNKUjI3RnNlMVBNbk5LV1BFenR0RkpVeTdTc0JEN2d2NjZvZ2FrYXhZLzI2UTFnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRWV3WUNzVzd6amV4cDQwbFYwWERiQk53c3doWmRZWUpuZWZEaHBNMFpYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3MjQzMjk2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw4NyJ9",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
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
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
