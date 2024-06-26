export default async function Home({ params }: any) {
    return (
        <div>
            <p>{params.gameID}</p>
        </div>
    );
}