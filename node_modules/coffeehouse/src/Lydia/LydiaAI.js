const Base = require("../Base");
const Session = require("./LydiaSession");

class LydiaAI extends Base {
  constructor(access_key) {
    super(access_key);
  }

  async createSession(language = "en") {
    var data = await this._send("/v1/lydia/session/create", true, {
      target_language: language,
    });

    if (data.data.payload === undefined)
      return new Session(data.data.results, this);
    else return new Session(data.data.payload, this);
  }

  async getSession(sessionid) {
    var data = await this._send("/v1/lydia/session/get", true, {
      session_id: sessionid,
    });
    if (data.data.payload === undefined)
      return new Session(data.data.results, this);
    else return new Session(data.data.payload, this);
  }

  async think_thought(sessionid, text) {
    return this._send("/v1/lydia/session/think", true, {
      session_id: sessionid,
      input: text,
    });
  }
}

module.exports = LydiaAI;
