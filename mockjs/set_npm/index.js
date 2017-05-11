// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        /* number  -----------------------------*/

        'n|+1': 1, //起始值为 1，每次增 1
        'n1|1-20.1-9': 3, //浮点数
        'n2|2-70': 1, //区间

        /* string  字符串 ------------------------*/
        'string1|5-15': 'a', //重复区间   
        'string1|3': 's ', //重复次数

        /* boolean  --------------------------*/
        'bool|1': true,
        'bool2|2-5': false, //2/2+5

        /* obj -----------------------*/
        'obj': { //就是一个obj对象
            'name|2-1': 'h_',
            'id|1-30.1-9': 2
        },
        'obj2|1-3': { //随机在对象里面抽取 1-3 个字段
            'name|2-1': 'h_',
            'id|1-30.1-9': 2
        },
        /* @ 占位 ----------------------*/
        '@zw': {
            'lower': '@character("lower")', //小写
            'upper': '@character("upper")', //大写
            'number': '@character("number")', //数字
            'symbol': '@character("symbol")', //特殊符号
            'aeiou': '@character("abc")', //指定范围
        },
        /*@ Date -----------*/
        'date': {
            'date': '@date()',
            'yyyy-MM-dd': '@date("yyyy-MM-dd")',
            'yy-MM-dd': '@date("yy-MM-dd")',
            'y-MM-dd': '@date("y-MM-dd")',
            'y-M-d': '@date("y-M-d")',
        },
        'time': {
            'time1': '@time("HH:mm:ss")',
            'time2': '@time("H:m:s")'
        },
        'datetime': '@datetime(yyyy-MM-dd HH:mm:ss)',
        'now': '@now()',

        /* img -------------------*/
        'img': "@image('200x100', '#894FC4', '#FFF', 'png', '生成图片')", //Random.image( size, background, foreground, format, text )

    }]
});




/**
 Random.range(10)
 Mock.mock('@range(10)')
 
 
 @boolean()   真假值
 @natural()   自然
 @integer()   整数 正整——负整
 @float()     浮点
 @character() 字母
        'lower': '@character("lower")', //小写
        'upper': '@character("upper")', //大写
        'number': '@character("number")', //数字
        'symbol': '@character("symbol")', //特殊符号
        'aeiou': '@character("abc")', //指定范围

 @string()    字符串
 @range()   
 
 */






// 输出结果
console.log(JSON.stringify(data, null, 4))