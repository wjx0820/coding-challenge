export function customNew<T>(constructor: Function, ...args: any[]): T {
  // 1. 创建一个空对象，继承 constructor 的原型
  const obj = Object.create(constructor.prototype)
  // 2. 将 obj 作为 this ，执行 constructor ，传入参数
  const res = constructor.apply(obj, args)
  // 3. 如果返回的是值类型，那么就返回 obj
  return res instanceof Object ? res : obj
}

// class Foo {
//     // 属性
//     name: string
//     city: string
//     n: number

//     constructor(name: string, n: number) {
//         this.name = name
//         this.city = '北京'
//         this.n = n
//     }

//     getName() {
//         return this.name
//     }
// }

// const f = new Foo('双越', 100)
// // const f = customNew<Foo>(Foo, '双越', 100)
// console.info(f)
// console.info(f.getName())
