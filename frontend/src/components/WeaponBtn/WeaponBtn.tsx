import style from './WeaponBtn.module.scss'
import { GameActions } from '../pages/Game/Game';

export type WeaponBtnProps = {
    action?: GameActions;
    visible: boolean;
    onActionSelected: (action: GameActions) => void;
};

export const WeaponBtn = ({ action = 'rock', onActionSelected, visible }: WeaponBtnProps) => {

  return (
    <button 
        className={ `${ style.weapon } ${ style[action]} ${ !visible ? style.hidden : '' }` }
        onClick={
          () => onActionSelected(action)
        }
    ></button>
  )
};

