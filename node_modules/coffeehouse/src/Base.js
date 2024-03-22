/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
CoffeeHouse - Yusuf Usta
*/

"use strict";
const axios = require("axios");
const qs = require("querystring");

class Base {
  constructor(
    access_key,
    endpoint = "https://api.intellivoid.net/coffeehouse"
  ) {
    this.access_key = access_key;
    this.endpoint = endpoint;
    this.client = axios.create({
      baseURL: endpoint,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async _send(path, access_key = true, data = {}) {
    if (access_key) data["access_key"] = this.access_key;
    return this.client.post(path, qs.stringify(data));
  }
}

module.exports = Base;
