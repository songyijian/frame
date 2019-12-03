
/**
   * 检查是否是对象类型
   */
function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}


/**
 深度对比函数
 */
function looseEqual(a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a); //有可能是数组
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        // 数组的深度对比
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        // 时间对比
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        // 对象obj
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* 除上面几个对象忽略的 */
        return false
      }
    } catch (e) {
      /* 不被能被处理的异常情况 */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}



// console.log(

//   looseEqual(
//     {
//       a: 1,
//       f: [2, 3]
//     }
//     , {
//       a:1,
//       f:[2,3,4]
//     }
//   )

// );


//  val 在数组里面的位置
function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}


// console.log(
//   looseIndexOf(
//     [
//       {
//         a: 1,
//         f: [2, 3]
//       }, {
//         a: 1,
//         f: [2, 3]
//       }
//     ],

//     {
//       a: 1,
//       f: [2, 3]
//     }
//   )

// )



function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}



// var fn = once(function () {
//   console.log('xxxx')
// })
// for(var i=0; i<3; i++){
//   fn() // 只执行了一次
// }





function isReserved(str) {
  // str.charCodeAt(index)
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

// console.log(
//   isReserved('sdfdf'),
//   isReserved('_dfdf'),

//   '12'.charCodeAt(0)
// );



var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}


// var c = parsePath('a.c')
// console.log(c({ a: { c: { b: 1234 } } }));

var c = parsePath('a.c')({ a: { c: { b: 1234 } } })
console.log(c);

