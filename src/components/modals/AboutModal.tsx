import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This game was based on reactle (now gone) by {}
        <a
          href="https://github.com/cwackerfuss"
          className="underline font-bold"
        >
          cwackerfuss
        </a>
        .
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The dictionary is based on {}
        <a
          href="https://github.com/lynn/hello-wordl"
          className="underline font-bold"
        >
          hello-wordl
        </a>{' '}
        dictionary and{' '}
        <a
          href="https://en.wikipedia.org/wiki/Prosigns_for_Morse_code"
          className="underline font-bold"
        >
          this Wikipedia page
        </a>
        .
      </p>
    </BaseModal>
  )
}
