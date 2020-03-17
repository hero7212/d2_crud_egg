'use strict';

const Controller = require('egg').Controller;

class FormTemplateController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: {
        name: {
          prop: 'name',
          title: '报警模板名称',
          value: '',
          component: {
            span: 24,
          },
        },
        device_type: {
          prop: 'device_type',
          title: '设备类型',
          value: '',
          component: {
            name: 'el-select',
            width: '100%',
            options: [
              {
                value: '2076',
                label: '测试模板',
              },
            ],
            clearable: true,
            span: 24,
          },
        },
      },
    };
  }
}

module.exports = FormTemplateController;
