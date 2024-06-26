import { getUserGameAchievements } from "@/services/steamService";

export async function GET(request: Request, {params}: any) {
    let achievements = await getUserGameAchievements(params.steamId, params.gameId);
    return Response.json(achievements);
}