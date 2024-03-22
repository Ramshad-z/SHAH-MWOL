const { LydiaAI } = require("./index");

async function speak(apikey, text) {
  const api = new LydiaAI(apikey);
  const session = await api.createSession();
  console.log("Session ID: " + session.id);
  session.think_thought(text).then((data) => console.log(data.output));
}

speak("Your API Key", "Merhaba Dünya");
