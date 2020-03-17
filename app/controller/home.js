'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: [
        {
          title: '报警模板名称',
          key: 'name',
          width: 'auto',
        },
        {
          title: '设备类型',
          key: 'device_type',
          width: 'auto',
        },
      ],
    };
  }
}

module.exports = HomeController;
