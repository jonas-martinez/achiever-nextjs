export async function GET(request: Request, {params}: any) {
    return Response.json({'haha': params.steamId});
}