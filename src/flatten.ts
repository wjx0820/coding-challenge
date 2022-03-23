export function flatten1(arr: any[]): any[] {
  const res: any[] = []
  arr.forEach((item) => {
    if (Array.isArray(item))
      res.push(...item)

    else
      res.push(item)
  })
  return res
}

export function flatten2(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach((item) => {
    res = res.concat(item)
  })

  return res
}

// const arr = [1, [2, [3, [4, 5]]]]
// console.log(deepFlatten(arr))
