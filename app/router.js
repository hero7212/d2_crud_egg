'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/formTemplate', controller.formTemplate.index);
  router.get('/rowHandle', controller.rowHandle.index);
  router.get('/headers', controller.headers.index);
  router.get('/returnApi', controller.returnApi.index);
};
