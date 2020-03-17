'use strict';

const Controller = require('egg').Controller;

class ReturnApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: {
        listUrl: '/v1/rule-group/list',
        addUrl: '/v1/rule-group/add',
        editUrl: '/v1/rule-group/update',
        deleteUrl: '/v1/rule-group/delete',
        columnsUrl: 'http://127.0.0.1:7001/',
        formTemplateUrl: 'http://127.0.0.1:7001/formTemplate',
        rowHandleUrl: 'http://127.0.0.1:7001/rowHandle',
        headersUrl: 'http://127.0.0.1:7001/headers',
      },
    };
  }
}

module.exports = ReturnApiController;
