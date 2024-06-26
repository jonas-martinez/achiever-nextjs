import Link from "next/link";

export default async function GameCard({ game, steamId }: any) {
    return (
        <div className="card bg-base-100 image-full shadow-xl">
            <figure>
                <img
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_231x87.jpg`}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{game.name}</h2>
                <p>Total hours: {Math.floor(game.playtime_forever / 60)}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={`/${steamId}/${game.appid}`}>
                        See more
                    </Link>
                </div>
            </div>
        </div>
    );

}