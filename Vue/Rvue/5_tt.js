
// 一些驼峰处理吧 

var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function (str) {
  return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, '');
};

// Sa:igSd[abc]Fdf
// console.log(
//   classify('saig-sd[abc]_fdf')
// );
