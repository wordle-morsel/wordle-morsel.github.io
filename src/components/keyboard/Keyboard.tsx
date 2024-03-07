import { getStatuses } from '../../lib/statuses'
import { prettifySymbol } from '../../lib/words'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1) {
          if (key === '.' || key === ' ' || key === '_') {
            onChar(key)
          } else if (key === '-') {
            onChar('_')
          }
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key
          value="."
          label={prettifySymbol('.')!}
          onClick={onClick}
          status={charStatuses['.']}
          isRevealing={isRevealing}
        />
        <Key
          value=" "
          label="␣"
          onClick={onClick}
          status={charStatuses[' ']}
          isRevealing={isRevealing}
        />
        <Key
          value="_"
          label={prettifySymbol('_')!}
          onClick={onClick}
          status={charStatuses['_']}
          isRevealing={isRevealing}
        />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" label="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key width={65.4} value="DELETE" label="ENTER" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
