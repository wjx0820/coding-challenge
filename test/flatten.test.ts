import { describe, expect, it } from 'vitest'
import { flatten1, flatten2 } from '../src/flatten'

describe('数组扁平化', () => {
  it('空数组', () => {
    const res = flatten1([])
    expect(res).toEqual([])
  })
  it('非嵌套数组', () => {
    const arr = [1, 2, 3]
    const res = flatten1(arr)
    expect(res).toEqual([1, 2, 3])
  })
  it('一级嵌套', () => {
    const arr = [1, 2, [3, 4], 5]
    const res = flatten1(arr)
    expect(res).toEqual([1, 2, 3, 4, 5])
  })
  it('二级嵌套', () => {
    const arr = [1, 2, [30, 40, [500]]]
    const res = flatten1(arr)
    expect(res).toEqual([1, 2, 30, 40, [500]])
  })
})
