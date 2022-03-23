export function deepFlatten1(arr: any[]): any[] {
  const res: any[] = []

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = deepFlatten1(item) // 递归
      flatItem.forEach(n => res.push(n))
    }
    else {
      res.push(item)
    }
  })

  return res
}
export function deepFlatten2(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach((item) => {
    res = res.concat(Array.isArray(item) ? deepFlatten2(item) : item)
  })

  return res
}

// const arr = [1, [2, [3, [4, 5]]]]
// console.log(deepFlatten1(arr))
