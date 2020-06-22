/*
 * @Description: 类
 * @Author: yijian.song
 * @Version: 3.0.0
 * @Date: 2020-04-01 16:38:40
 * @LastEditors: yijian.song
 * @LastEditTime: 2020-04-01 16:55:10
 */



// 类生命一个全新的数据类型
class Ts {
  font: string | undefined;
  clor?: string | undefined;
  size: number;
  constructor() { }
  getSize() { 
    console.log(this.size)
  }
  
}

// function log<T>(o: T) { 
//   console.log(o)
// }
// var h = new Ts()
// h.font = "黑体"
// h.clor = "red"
// h.size = 100

// 范型制定类型
// log<Ts>(h)

class SetFont<T>{
  box:Array<T> ;

  constructor(){
    this.box:Array<T> = []
  }

  add(inf:T){

    

  }
 
  
}

