import style from './GameStart.module.scss'
import { useState } from 'react';

export type GameStart = {
  onSubmit: (name: string) => void
  btnValue: string;
  inputPlaceh: string;
  inputLabel: string;
};

const GameStart = ({ onSubmit, btnValue, inputPlaceh, inputLabel }: GameStart) => {
  const [name, setName] = useState('')

  const handleSubmit = (name: string) => {
    onSubmit(name)
  }
  return (
    <form 
      className={ style.game }
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(name)
      }}
    >
      <label className={ style.label }>
        { inputLabel }
        <input 
          className={ style.input }
          type="text"
          placeholder={ inputPlaceh }
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
        />
      </label>
      <button
        className={ style.button }
        type='submit'
      >
        { btnValue }
      </button>
    </form>
  )
};

export default GameStart;
