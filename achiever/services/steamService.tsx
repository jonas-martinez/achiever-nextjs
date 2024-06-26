'use strict'

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";
const vanityUrl = "cbobb";
// 76561197973393048

export async function getUserSteamIDFromVanity() {
    let res = await fetch(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`);

    if (!res.ok) {
        throw Error("Failed to fetch data");
    }

    let json = await res.json();

    return json.response.steamid;
};


export async function getUserGames(steamId: any) {
    let res = await fetch(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`);

    if (!res.ok) {
        throw Error("Failed to fetch data");
    }

    let games = await res.json();

    return games.response;
}

export async function getGameAchievements(steamId: string, gameId: string) {
    // Get user game achievements as there is not API to get game achievements directly
    let res = await fetch(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`)

    let json = await res.json();
    let achievements = json.playerstats.achievements;

    return achievements;
}

export async function getSchemaForGame(gameId: string) {
    // Get user game achievements as there is not API to get game achievements directly
    let res = await fetch(`${steamAPIBaseUrl}/ISteamUserStats/GetSchemaForGame/v2/?key=${steamAPIKey}&appid=${gameId}`)

    let json = await res.json();

    return json.game;
}

export async function getUserGameAchievements(steamId: string, gameId: string) {
    let achievements: any = {};

    let schema = await getSchemaForGame(gameId);

    schema.availableGameStats?.achievements.forEach((achievement: any) => {
        achievements[achievement.name] = achievement;
    });

    let userAchievements = await getGameAchievements(steamId, gameId);

    userAchievements?.forEach((achievement: any) => {
        achievements[achievement.apiname].achieved = achievement.achieved;
    });

    return achievements;
}

export async function getGameDetails(gameId: string) {
    let res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${gameId}`);

    if(!res.ok) {
        throw Error("Failed to fetch data");
    }

    let gameDetails = await res.json();

    return gameDetails[gameId].data;
}

// async getUserGameAchievements(steamId, gameId) {
//     // Get user achievements (unlocked & locked)
//     let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements).catch((error) => null);
//     // Filter unlocked achievements
//     if (achievements != undefined) {
//         let unlocked = achievements.filter(achievement => achievement.achieved == 1 ? true : false);
//         return unlocked.map(achievement => achievement.apiname);
//     } else {
//         return [];
//     }
// },
