import style from '../Player/Player.module.scss';
import Loader from '../Loader/Loader';
import WeaponContainer from '../WeaponContainer/WeaponContainer';
import { GameActions } from '../pages/Game/Game';

type BotProps = {
    score: number;
    action: GameActions;
    loading: boolean;
    scoreTxt: string;
};

const Bot = ({ score, action, loading, scoreTxt }: BotProps) => {
  return (
    <div className={ style.player }>
        <div className={ style.scoreWrap }>
            <span className={ style.scoreText }>
                Bot { scoreTxt }
            </span>
            <span className={ style.score }>
                { score }
            </span>
        </div>                   
            <div className={ style.weapons }>
                {
                    loading ?
                        <Loader /> :
                        <WeaponContainer action={ action } />
                }
            </div>
    </div>
  )
};

export default Bot;
