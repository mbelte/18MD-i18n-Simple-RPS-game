CREATE TABLE
  `games` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `name` varchar(255) DEFAULT NULL,
    `player_choice` varchar(10) DEFAULT NULL,
    `bot_choice` varchar(10) DEFAULT NULL,
    `result` varchar(10) DEFAULT NULL,
    `played_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 33 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 1, 'Vilks', '2023-02-17 17:39:57', 'scissors', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 2, 'Vilks', '2023-02-17 17:40:27', 'rock', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 3, 'Vilks', '2023-02-17 17:40:40', 'scissors', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 4, 'Vilks', '2023-02-17 17:40:43', 'paper', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 5, 'Vilks', '2023-02-17 17:40:46', 'rock', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 6, 'Vilks', '2023-02-17 17:40:50', 'scissors', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 7, 'Vilks', '2023-02-17 17:41:00', 'paper', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 8, 'Vilks', '2023-02-17 17:41:04', 'rock', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 9, 'Ezis', '2023-02-17 17:42:02', 'paper', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 10, 'Ezis', '2023-02-17 17:42:05', 'scissors', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 11, 'Ezis', '2023-02-17 17:42:08', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 12, 'Ezis', '2023-02-17 17:42:13', 'scissors', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 13, 'Player', '2023-02-17 17:44:58', 'paper', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 14, 'Player', '2023-02-17 17:45:02', 'rock', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 15, 'Player', '2023-02-17 17:45:06', 'scissors', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 16, 'Mārtiņš', '2023-02-17 17:58:27', 'scissors', 'win');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 17, 'Mārtiņš', '2023-02-17 17:58:31', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 18, 'Mārtiņš', '2023-02-17 17:58:34', 'paper', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 19, 'Vilks', '2023-02-17 18:04:15', 'paper', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 20, 'Vilks', '2023-02-17 18:04:18', 'scissors', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 21, 'Vilks', '2023-02-17 18:04:21', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 22, 'Vilks', '2023-02-17 18:04:24', 'paper', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 23, 'Vilks', '2023-02-17 18:04:28', 'scissors', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 24, 'Ezis', '2023-02-17 18:06:04', 'scissors', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 25, 'Player', '2023-02-17 18:44:51', 'paper', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 26, 'Player', '2023-02-17 18:44:54', 'scissors', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 27, 'Player', '2023-02-17 18:44:57', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 28, 'Player', '2023-02-17 18:45:01', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('rock', 29, 'Player', '2023-02-17 18:45:04', 'rock', 'tie');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 30, 'Player', '2023-02-17 18:45:07', 'rock', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('paper', 31, 'Player', '2023-02-17 18:45:10', 'rock', 'lose');
insert into `games` (`bot_choice`, `id`, `name`, `played_at`, `player_choice`, `result`) values ('scissors', 32, 'Player', '2023-02-17 18:45:14', 'rock', 'win');
