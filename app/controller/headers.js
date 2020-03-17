'use strict';

const Controller = require('egg').Controller;

class HeadersController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: [
        {
          tag: 'el-input',
          placeholder: '报警模板名称查询',
          model: 'name',
          clearEvent: 'list',
          child: [
            {
              tag: 'i',
              slot: 'suffix',
              class: 'el-input__icon el-icon-search',
              clickEvent: 'list',
            },
          ],
        },
      ],
    };
  }
}

module.exports = HeadersController;
