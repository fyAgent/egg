'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/queryid", controller.query.queryId);
  router.post("/add",controller.add.addName);
  router.post("/reset",controller.reset.reset);
  router.post("/del", controller.del.del);
  router.post("/multiplyDel", controller.del.multiplyDel);
};
