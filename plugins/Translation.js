import axios from "axios";
import config from "../config.cjs";

const translateCommand = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";

  if (!["translate", "trans"].includes(cmd)) return;

  const repliedText = m.quoted?.body || m.quoted?.text || "";
  const textBody = m.body.slice(prefix.length + cmd.length).trim();

  let text = "";
  let langCode = config.DEFAULT_LANG || "en";

  // Scenario: replied to message & textBody is a language code
  if (repliedText && /^[a-z]{2}$/i.test(textBody)) {
    text = repliedText;
    langCode = textBody;
  } 
  // Scenario: replied to message & textBody includes "->"
  else if (repliedText && textBody.startsWith("->")) {
    langCode = textBody.slice(2).trim();
    text = repliedText;
  } 
  // Scenario: normal text input with optional -> language code
  else if (textBody) {
    const separatorIndex = textBody.lastIndexOf("->");
    if (separatorIndex !== -1) {
      langCode = textBody.slice(separatorIndex + 2).trim();
      text = textBody.slice(0, separatorIndex).trim();
    } else {
      text = textBody;
    }
  } 
  // Scenario: no text and no reply — usage error
  else {
    return Matrix.sendMessage(m.from, { text: "❌ *Usage:* `.translate <text> -> <language_code>`\nOr reply to a message with `.translate en`" }, { quoted: m });
  }

  // Still no text found? Error out
  if (!text) {
    return Matrix.sendMessage(m.from, { text: "❌ *No text found to translate.*" }, { quoted: m });
  }

  try {
    await Matrix.sendMessage(m.from, { react: { text: "⏳", key: m.key } });

    const { data } = await axios.get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langCode}&dt=t&q=${encodeURIComponent(text)}`
    );

    const translatedText = data[0].map(item => item[0]).join("");
    const detectedLang = data[2] || "auto";

    const resultMsg = `🌐 *Translate Result:*\n\n*From:* ${detectedLang.toUpperCase()}\n*To:* ${langCode.toUpperCase()}\n\n${translatedText}`;

    await Matrix.sendMessage(m.from, { react: { text: "✅", key: m.key } });

    await Matrix.sendMessage(m.from, { text: resultMsg }, { quoted: m });

  } catch (err) {
    console.error("Translate Command Error:", err);
    Matrix.sendMessage(m.from, { text: "❌ *An error occurred while translating. Please try again.*" }, { quoted: m });
  }
};

export default translateCommand;