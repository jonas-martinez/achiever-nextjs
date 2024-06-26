import { getUserGames, getUserSteamIDFromVanity } from "@/services/steamService";
import Link from "next/link";

export default async function Home() {
    let steamID = await getUserSteamIDFromVanity();
    let games = await getUserGames(steamID);
    console.log(games);
    return (
        <div>
            <p>{JSON.stringify(steamID)}</p>
            {games.games.map((game: any) => {
                return (
                    <Link href={`/games/${game.appid}`}>
                        <p>{game.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}