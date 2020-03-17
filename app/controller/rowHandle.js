'use strict';

const Controller = require('egg').Controller;

class RowHandleController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: {
        columnHeader: '操作',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
          show: true,
          disabled: false,
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show: true,
          disabled: false,
        },
      },
    };
  }
}

module.exports = RowHandleController;
