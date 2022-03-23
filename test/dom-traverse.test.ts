import type { IWindow } from 'happy-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { breadthFirstTraverse, depthFirstTraverse1, depthFirstTraverse2 } from '../src/dom-traverse'

declare global {
  interface Window extends IWindow { }
}

describe('深度优先遍历dom', () => {
  beforeEach(async() => {
    document.body.innerHTML = `<div id="box">
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>`
    await window.happyDOM.whenAsyncComplete()
    await new Promise(resolve => setTimeout(resolve, 0))
  })
  function getDOM(): HTMLElement | null | undefined {
    return document.getElementById('box')
  }
  it('getDOM', () => {
    expect(getDOM()?.innerHTML).toMatchInlineSnapshot(`
      "
            <ul>
              <li>a</li>
              <li>b</li>
            </ul>
          "
    `)
  })
})
