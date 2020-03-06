

function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}


var obj = {
  name: '嘿，我是obj的宝宝',
}

var data = {
  name:'嘿，我是data的宝宝',
  fn:function(){
    console.log(this.name);
  }
}
var name = '嘿，我是window的宝宝'

// data.fn()
// data.fn.apply(obj)
// polyfillBind(data.fn, obj)()
// console.log(data.fn.length);

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

// console.log(toArray([1, 2, 3], 0));
// console.log(toArray('1234', 0));





/**
 *  很简单的，继承方法，遍历拷贝到继承者身上
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}


console.log(toObject([1, 2, 3]));


