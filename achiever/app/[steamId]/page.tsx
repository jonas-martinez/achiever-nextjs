import { getUserGames, getUserSteamIDFromVanity } from "@/services/steamService";
import Link from "next/link";
import GameCard from "./gameCard";

export default async function Home({ params }: any) {
    let games = await getUserGames(params.steamId);
    console.log(games);
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {games.games.sort((g: any, g2: any) => g2.playtime_forever - g.playtime_forever ).map((game: any) => {
                return (
                    <GameCard game={game} steamId={params.steamId} />
                );
            })}
        </div>
    );
}