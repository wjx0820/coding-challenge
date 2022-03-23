export function getType(x: any): string {
  const originType = Object.prototype.toString.call(x) // '[object Object]'
  const spaceIndex = originType.indexOf(' ')
  const type = originType.slice(spaceIndex + 1, -1) // 'Object'
  return type.toLowerCase() // 'object'
}
