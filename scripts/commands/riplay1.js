const fs = require("fs");
module.exports.config = {
  name: "ripley1",
  version: "2.0.1",
  permission: 0,
  credits: "𝖠𝖱𝖸𝖠𝖭",
  description: "noprefix",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("magi") || react.includes("bessa") || 
react.includes("খানকি মাগি") || 
react.includes("চুদানি") ||
react.includes("চুদা") ||
react.includes("চুদ") ||
react.includes("ভুদা") || 
react.includes("buda") || 
react.includes("gali") ||
react.includes("galibaz") ||        react.includes("সাওয়া") || 
react.includes("khanki") ||
react.includes("maderxud") ||
react.includes("xud") || 
react.includes("xuda") || 
react.includes("xudi") ||
react.includes("cuda") ||
react.includes("cudi") ||
react.includes("mgi") ||
react.includes("nodi") || 
react.includes("নডি") ||
react.includes("মাগি") ||
react.includes("মাদারচুদ") ||
react.includes("চুদ") ||
react.includes("চুদা") ||
react.includes("চুদি") || 
react.includes("ষুদা") ||
react.includes("ষুদি") ||
react.includes("bal") ||
react.includes("খাংকির পোলা") ||
react.includes("খানকি মাকি") ||
react.includes("খানকি মাগি") || 
react.includes("SawYa") || 
react.includes("Sawya") || 
react.includes("tor mare xudi") || react.includes("vuda") || react.includes("heda") || react.includes("bap")) {
		var msg = {
				body: "●❯────────────────❮●\n   -♦𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥♦-   \n●❯────────────────❮●\n😾-দে্ঁখ্ঁ_আ্ঁর্ঁ_এ্ঁক্ঁ_বা্ঁর_গা্ঁলি্ঁ_দি্ঁলে্ঁ_ত্ঁরে্ঁ_কি্ঁন্ত্ঁ_কি্ঁক্ঁ_দি্ঁমু্ঁ°-😾"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 