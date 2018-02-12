'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    
    this.ctx.body = await this.app.mysql.get("test",{id:1});
  }
}

module.exports = HomeController;
