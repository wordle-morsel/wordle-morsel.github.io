import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { prettifySymbol } from '../../lib/words'
import { MAX_CHALLENGES, MAX_WORD_LENGTH } from '../../constants/settings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in {MAX_CHALLENGES} tries. The answer is an English word
        written in{' '}
        <a
          href="https://en.wikipedia.org/wiki/Morse_code"
          className="underline font-bold"
        >
          Morse code
        </a>
        .
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        After each guess, the color of the tiles will change to show how close
        your guess was to the word. Each guess has to be either a valid English
        word or a {}
        <a
          href="https://en.wikipedia.org/wiki/Prosigns_for_Morse_code"
          className="underline"
        >
          Morse prosign
        </a>
        .
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="_" status="correct" />
        <Cell value=" " />
        <Cell value="." />
        <Cell value=" " />
        <Cell value="." />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The symbol '{prettifySymbol('_')}' is in the word and in the correct
        spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="_" />
        <Cell value="_" status="present" />
        <Cell value=" " />
        <Cell value="." />
        <Cell value=" " />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The symbol '{prettifySymbol('_')}' is in the word but in the wrong spot.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <b>NOTE:</b> This game accepts guesses shorter than {MAX_WORD_LENGTH}{' '}
        symbols when padded with spaces. The answer is always full-length
        though.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value=" " />
        <Cell value="." />
        <Cell value="." status="absent" />
        <Cell value=" " />
        <Cell value="_" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The sybol '{prettifySymbol('.')}' is not in the word in any spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="_" status="correct" />
        <Cell value=" " status="correct" />
        <Cell value="_" status="correct" />
        <Cell value="_" status="correct" />
        <Cell value="_" status="correct" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All symbols in the word are in the correct spots.
      </p>
    </BaseModal>
  )
}
