import { WeaponBtn, WeaponBtnProps } from "../WeaponBtn/WeaponBtn";
import { GameActions } from "../pages/Game/Game";
import style from './Player.module.scss';

type PlayerProps = WeaponBtnProps & {
    name: string;
    score: number;
    scoreTxt: string;
    selectedAction: string
    actions: GameActions;
};

const Player = ({ 
    onActionSelected, 
    name, 
    score, 
    scoreTxt,
    actions, 
    selectedAction
}: PlayerProps) => {

  return (
    <div className={ style.player }>
        <div className={ style.scoreWrap }>
            <span className={ style.scoreText }>
                { `${name} ${scoreTxt}` }
            </span>
            <span className={ style.score }>
            { score }
            </span>
        </div>

        <div className={ style.weapons }>
            {
                Object.keys(actions).map((action) => (
                    <WeaponBtn 
                        key={ action }
                        visible={
                            selectedAction === '' || 
                            selectedAction === action
                        }
                        action={ action }
                        onActionSelected={ onActionSelected }
                    />
                ))
            }

            {/* {
                Object.keys(actions).map((action) => (
                    <WeaponBtn 
                        key={ action }
                        action={ action }
                        onActionSelected={ onActionSelected }
                    />
                ))
            } */}
            {/* <WeaponBtn 
                action='rock'
                onActionSelected={ onActionSelected }
            />
            <WeaponBtn 
                action='paper'
                onActionSelected={ onActionSelected }
            />
            <WeaponBtn 
                action='scissors'
                onActionSelected={ onActionSelected }
            /> */}
        </div>
    </div>
  )
};

export default Player;
