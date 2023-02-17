import style from '../WeaponBtn/WeaponBtn.module.scss'
import { GameActions } from '../pages/Game/Game';


const WeaponContainer = ({ action }: { action: GameActions }) => {
  return (
    <div className={ `${ style.weapon } ${ style[action]}` }></div>
  )
};

export default WeaponContainer;
