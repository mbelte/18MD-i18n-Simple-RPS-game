import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'RPSGame'
})

db.connect(function(error) {
  if (error) {
    throw error
  }
  console.log('DB connection successful')
})


const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.get("/rps", (req: Request, res: Response) => {
  const boardSql = "SELECT `a`.`name`, `wins`, `loses`, `ties` FROM `games` `a` LEFT JOIN(SELECT `name`, COUNT(1) `ties` FROM `games` WHERE `result` = 'tie' GROUP BY `name`) `t` ON `t`.`name` = `a`.`name` LEFT JOIN(SELECT `name`, COUNT(1) `loses` FROM `games` WHERE `result` = 'lose' GROUP BY `name`) `l` ON `l`.`name` = `a`.`name` LEFT JOIN(SELECT `name`, COUNT(1) `wins` FROM `games` WHERE `result` = 'win' GROUP BY `name`) `w` ON `w`.`name` = `a`.`name` GROUP BY `a`.`name`, `wins`, `loses`, `ties` ORDER BY `wins` DESC, `loses` ASC"
  db.query(boardSql, (error, board) => {
    if (error) {
      throw error
    }

    const weaponsSql = "SELECT DISTINCT `player_choice` `weapon`, COUNT(1) `uses` FROM `games` GROUP BY `player_choice` ORDER BY `uses` DESC"
    db.query(weaponsSql, (error, weapons) => {
      if (error) {
        throw error
      }

      res.send({ board, weapons })
    })
  })
});

app.post("/rps", (req: Request, res: Response) => {
  const { name, player, bot } = req.body

  if (isValidWeapon(player) && isValidWeapon(bot)) {
    const result = getWinStatus(player, bot)
    const sql = 'INSERT INTO `games` (`name`,`player_choice`, `bot_choice`, `result`) VALUES (?)'

    db.query(sql, [[name, player, bot, result]], (error, result) => {
      if (error) {
        throw error
      }
      res.send(result)
    })
  } else {
    res.send('Invalid data!')
  }
});


app.listen(3004, () => {
  console.log("Application started on port 3004!");
});


//  helpers

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

type Weapon = keyof typeof actions;

const isValidWeapon = (weapon: Weapon) => {
  if (Object.keys(actions).includes(weapon)) {
    return true
  } else {
    return false
  }
}

const getWinStatus = (player: Weapon, bot: Weapon) => {
  if (player === bot) {
    return "tie";
  } else if (actions[player] === bot) {
    return "win";
  } else if (actions[bot] === player) {
    return "lose";
  }
  return "tie"
}