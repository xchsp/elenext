import { pascalCase } from 'pascal-case'
import { paramCase } from 'param-case'

const config = {
  prefixCls: 'el'
}

export function getCompName(name: string) {
  return pascalCase(config.prefixCls) + pascalCase(name)
}

export function getBlockCls(block: string) {
  return `${config.prefixCls}-${paramCase(block)}`
}

export default config
