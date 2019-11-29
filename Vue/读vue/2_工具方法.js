

// function makeMap(
//   str,
//   expectsLowerCase
// ) {
//   var map = Object.create(null);
//   var list = str.split(',');
//   for (var i = 0; i < list.length; i++) {
//     map[list[i]] = true;
//   }
//   console.log(map);
//   return expectsLowerCase
//     ? function (val) { return map[val.toLowerCase()]; }
//     : function (val) { return map[val]; }
// }


// makeMap('slot,component', true)("SLOT") //true
// makeMap('slot,component')("slot") //true





/**
  * Create a cached version of a pure function.
  * 创建纯函数的缓存版本。
  * Object.create(null) 通过这方式创建的{}对象是干净的，没有prototype（原型属性）
//   */
// function cached(fn) {
//   var cache = Object.create(null);
//   return (function cachedFn(str) {
//     var hit = cache[str];
//     return hit || (cache[str] = fn(str))
//   })
// }



// /**
//  * Camelize a hyphen-delimited string.
//  */
// var camelizeRE = /-(\w)/g;
// var camelize = cached(function (str) {
//   return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
// });



// 闭包逻辑
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

// var myFunc = makeFunc();
// myFunc();
// myFunc();
// myFunc();



function setupHelp() {
  var helpText = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
    { 'id': 'age', 'help': 'Your age (you must be over 16)' }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
  }
  // for{} 不会形成作用域， 由于变量提升item会被提升到外面，循环后item 就为最后一条信息
  // 这也是通常使用闭包的原因
  console.log('////',item);
}

setupHelp()