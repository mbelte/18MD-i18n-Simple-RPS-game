import { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { submitGameData } from "../../../assets/helpers/apiCalls";
import style from "./Game.module.scss";
import GameStart from "../../StartGame/GameStart";
import Player from "../../Player/Player";
import Bot from "../../Bot/Bot";

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export type GameActions = keyof typeof actions;

const getRandomAction = () => {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
};

const getWinner = (player: GameActions, bot: GameActions) => {
  if (player === bot) {
    return "gameTie";
  } else if (actions[player] === bot) {
    return "gameWin";
  } else if (actions[bot] === player) {
    return "gameLose";
  }

  return "gameTie";
};

const GamePage = () => {
  const { t } = useTranslation();

  const [gameState, setGameState] = useState(false);
  const [winMsg, setWinMsg] = useState("");
  const [name, setName] = useLocalStorage("playerName", "");
  const [playerAction, setPlayerAction] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

  const [botAction, setBotAction] = useState("");
  const [botScore, setBotScore] = useState(0);
  const [botLoading, setBotLoading] = useState(false);

  const handleGameState = (name: string) => {
    if (name.length) {
      setName(name);
    } else {
      setName("Player");
    }
    setGameState(true);
  };

  const updateScore = (winner: string) => {
    if (winner === 'gameLose') {
      setBotScore(botScore + 1);
    } else if (winner === 'gameWin') {
      setPlayerScore(playerScore + 1);
    }
  };

  const onActionSelected = (selectedAction: GameActions) => {
    if (playerAction) {
      return;
    }

    setBotLoading(true);
    setPlayerAction(selectedAction);
    const newBotAction = getRandomAction();
    const newWinner = getWinner(selectedAction, newBotAction);
    
    submitGameData(name, selectedAction, newBotAction)

    setTimeout(() => {
      setPlayerAction("");
      setBotAction("");
      setWinMsg("");
    }, 2800);

    setTimeout(() => {
      setBotLoading(false);
      setBotAction(newBotAction);

      setWinMsg(newWinner);
      updateScore(newWinner);
    }, 1500);

    // console.log(`Player: ${selectedAction}`, `Bot: ${newBotAction}`)
  };

  return (
    <>
      {gameState && (
        <div className={style.game}>
          <div className={style.win}>
            {t(winMsg)}
          </div>
          <Player
            name={name}
            score={playerScore}
            scoreTxt={t('score')}
            actions={actions}
            selectedAction={playerAction}
            onActionSelected={onActionSelected}
          />

          <Bot 
            action={botAction} 
            score={botScore} 
            scoreTxt={t('score')}
            loading={botLoading} 
          />
        </div>
      )}
      {!gameState && (
        <GameStart
          onSubmit={handleGameState}
          btnValue={t("startBtn")}
          inputPlaceh={t("inputNamePlaceh")}
          inputLabel={t("inputNameLabel")}
        />
      )}
    </>
  );
};

export default GamePage;
