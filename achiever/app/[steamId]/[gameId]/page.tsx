import { getGameDetails, getUserGameAchievements } from "@/services/steamService";
import AchievementCard from "./achievementCard";

export default async function Home({ params }: any) {
    let achievements = await getUserGameAchievements(params.steamId, params.gameId);
    let game = await getGameDetails(params.gameId);

    return (
        <div
            style={{ "backgroundImage": `url('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${params.gameId}/page_bg_generated_v6b.jpg')` }}
            className="h-screen w-screen overflow-scroll "
        >
            <div className="w-1/2 m-auto">
                <div
                    className="hero rounded-xl mt-4 mb-4"
                    style={{
                        backgroundImage: `url(${game.header_image})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{game.name}</h1>
                            <p className="mb-5">
                                {game.short_description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 p-4 gap-4 ">
                    {
                        Object.values(achievements).sort((a: any, b: any) => b.achieved - a.achieved).map((achievement: any) => {
                            return <AchievementCard achievement={achievement} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}