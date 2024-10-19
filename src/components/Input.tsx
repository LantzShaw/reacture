/**
 * 受控与非受控组件
 */

import { FC, forwardRef, useEffect, useState } from 'react'

type InputProps = {
  defaultValue: string
  value?: string
  onChange?: (value: string) => void
}

const Input: FC<InputProps> = ({ defaultValue, value, onChange }, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue)

useEffect(() => {
  // NOTE: 主要用于同步内部状态 internalValue，确保内部状态始终与外部 value 保持一致，从而避免在将来进入非受控模式时出现状态不一致的问题。
  // 例如：value 为 undefined 时，内部状态 internalValue 也会被重置为 defaultValue，
  // 所以这里需要使用 useEffect 来同步 value 和 internalValue。
    if(value !== undefined) {
      setInternalValue(value)
    }
}, [value])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

     onChange?.(newValue)

     if (value === undefined) {
      setInternalValue(newValue)
     }
  }

  return <>
    <input type="text"
     ref={ref}
     value={value !== undefined ? value : internalValue}
     onChange={changeHandler}
    />
  </>
}

export default forwardRef(Input)