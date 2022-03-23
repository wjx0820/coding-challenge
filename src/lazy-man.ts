class LazyMan {
  private name: string
  private tasks: Function[] = []
  private next() {
    const task = this.tasks.shift() // 取出当前task的第一个元素
    if (task) task()
  }

  constructor(name: string) {
    this.name = name

    setTimeout(() => {
      this.next()
    })
  }

  eat(food: string) {
    const task = () => {
      console.info(`${this.name}正在吃${food}`)
      this.next()
    }
    this.tasks.push(task)
    return this
  }

  sleep(seconds: number) {
    const task = () => {
      console.info(`${this.name}开始睡觉`)
      setTimeout(() => {
        console.info(`${this.name}睡了${seconds}秒`)
        this.next()
      }, seconds * 1000)
    }
    this.tasks.push(task)
    return this
  }
}

const me = new LazyMan('小明')
me.eat('面包').sleep(2).eat('饭')
