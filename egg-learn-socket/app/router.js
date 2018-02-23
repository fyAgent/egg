'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io } = app;
  router.redirect("/","/public/index.html");


  io.of("/chat").route("login",io.controller.login.in);
  io.of("/chat").route("sendMsg", io.controller.chat.sendMsg);


  
};
