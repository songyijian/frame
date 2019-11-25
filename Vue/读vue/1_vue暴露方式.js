/*
 * @Description: vue暴露方式
 * @Author: yijian.song
 * @Date: 2019-11-25 16:28:53
 * @LastEditors: 
 * @LastEditTime: 2019-11-25 17:05:39
 */


(function (global, factory) {
  /**
   * global  = window（浏览器下）
   * factory =  vue（原型，类）
   */
  console.log(global, factory);

  /**
   * 1、支持exports 就直接通过 module.exports 暴露出去
   * 2、支持的amd 就通过 define方法暴露出去
   * 3、通过window. 方式直接暴露
   */  
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.Vue = factory());

}(this, function () { 
  'use strict';

  function Vue(){ console.log(Vue) }
  return "Vue";
}));



// (function(_this){
//   //浏览器下的this === window
//   console.log(this, _this);  
// })(this)
