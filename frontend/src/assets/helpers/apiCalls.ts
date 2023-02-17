import axios from "axios";
import { GameActions } from "../../components/pages/Game/Game";


const baseURL = 'http://localhost:3004'
const host = axios.create({
    baseURL
});

export const submitGameData = async (name: string, player: GameActions, bot: GameActions) => {
    const { data } = await host.post(`/rps`, {
        name,
        player,
        bot
    });
    return data;
}

type Scoreboard = {
    board: [{
        name: string;
        wins: number;
        loses: number;
        ties: number;
    }],
    weapons: [{
        weapon: GameActions;
        uses: number;
    }]
}

export const fetchStats = async () => {
    const { data } = await host<Scoreboard>(`/rps`);
    return data;
}